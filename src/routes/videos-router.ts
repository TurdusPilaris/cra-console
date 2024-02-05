import {Request, Response, Router} from "express";
import {Ava1, VideoType} from "../db";
import {app, db, TypeErrors} from "../app";
import {videosRepositories} from "../repositories/videos-repositories";

type ParamsType = {id:string};
type ReqBodyType = {title: string, author: string,  availableResolutions: typeof Ava1};
type QueryType = {title: string};
export const videosRouter = Router({})

export const getVideos = (req: Request<ParamsType, any, ReqBodyType, QueryType>, res: Response<VideoType[]>) => {

    res
        .status(200)
        .send(videosRepositories.getAllVideo());

}
export const getVideosWithID = (req: Request<ParamsType, any, ReqBodyType, QueryType>, res: Response<VideoType>) => {

    if(!req.params.id) {
        res.sendStatus(404);
        return;
    }
    var foundVideo: VideoType | undefined = videosRepositories.findVideos(+req.params.id);

    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }
    res
        .status(200)
        .send(foundVideo);

}
export const deleteVideo = (req: Request<ParamsType, any, ReqBodyType, QueryType>, res: Response<VideoType>) => {

    if (videosRepositories.deleteVideo(req.params.id)) {
        res.sendStatus(204);
        return;
    }

    res.sendStatus(404);

}
export const postVideos = (req: Request<ParamsType, any, ReqBodyType, QueryType>, res: Response<any>) => {


    let errorsMessages: TypeErrors = {
        errorsMessages: []
    };

    if (!req.body.title) {
        errorsMessages.errorsMessages.push({message: 'Not found', field: 'title'})
    } else if (req.body.title.length > 40) {
        errorsMessages.errorsMessages.push({message: 'string must be less than 40', field: 'title'})
    }

    if (!req.body.author) {
        errorsMessages.errorsMessages.push({message: 'Not found', field: 'author'})
    } else if (req.body.author.length > 20) {
        errorsMessages.errorsMessages.push({message: 'string must be less than 20', field: 'author'})
    }

    if (Array.isArray(req.body.availableResolutions)) {
        req.body.availableResolutions.map(r => {
            !Ava1.includes(r) && errorsMessages.errorsMessages.push({message: 'Not found', field: 'availableResolutions'});
        })
    }

    if (errorsMessages.errorsMessages.length > 0) {
        res.status(400).json(errorsMessages);
        return;
    }

    var createdVideo = videosRepositories.createVideo(req.body.title, req.body.author, req.body.availableResolutions);

    res.status(201).json(createdVideo)


}
export const putVideos = (req: Request<ParamsType, any, VideoType, QueryType>, res: Response<any>) => {

    if(!req.params.id) {
        res.sendStatus(404);
        return;
    }

    let errorsMessages: TypeErrors = {
        errorsMessages: []
    };

    // check title
    if (!req.body.title) {
        errorsMessages.errorsMessages.push({message: 'Not found', field: 'title'})
    } else if (req.body.title.length > 40) {
        errorsMessages.errorsMessages.push({message: 'string must be less than 40', field: 'title'})
    }

    // check author
    if (!req.body.author) {
        errorsMessages.errorsMessages.push({message: 'Not found', field: 'author'})
    } else if (req.body.author.length > 20) {
        errorsMessages.errorsMessages.push({message: 'string must be less than 20', field: 'author'})
    }

    // check availableResolutions
    if (Array.isArray(req.body.availableResolutions)) {
        req.body.availableResolutions.map(r => {
            !Ava1.includes(r) && errorsMessages.errorsMessages.push({message: 'Not found', field: 'availableResolutions'});
        })
    }

    // check canBeDownloaded
    if (typeof(req.body.canBeDownloaded) != 'boolean') {
        errorsMessages.errorsMessages.push({message: 'Invalid type', field: 'canBeDownloaded'})
    }

    // check canBeDownloaded
    let minAgeRestriction = null;

    if( (req.body.minAgeRestriction) &&(typeof(req.body.minAgeRestriction) != "number"||(+req.body.minAgeRestriction<1||+req.body.minAgeRestriction>18))) {
        errorsMessages.errorsMessages.push({message: 'Invalid field', field: 'minAgeRestriction'})
    } else if((req.body.minAgeRestriction)){ minAgeRestriction = +req.body.minAgeRestriction}

    if(!req.body.publicationDate){
        errorsMessages.errorsMessages.push({message: 'Not found field', field: 'publicationDate'})
    } else {
        const dateInspection: boolean = (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/gi).test(req.body.publicationDate);
        if (typeof req.body.publicationDate != "undefined" && !dateInspection ) {
            errorsMessages.errorsMessages.push({
                message : "Invalid publicationDate",
                field : 'publicationDate'
            })
        }
    }


    if (errorsMessages.errorsMessages.length > 0) {
        res.status(400).json(errorsMessages);
        return;
    }

    // const foundVideo = db.videos.find(a => a.id === +req.params.id);

    const foundVideo = videosRepositories.updateVideo(+req.params.id,req.body.title, req.body.author,
        req.body.availableResolutions, req.body.canBeDownloaded, minAgeRestriction, req.body.publicationDate)

     if(!foundVideo) {
         errorsMessages.errorsMessages.push({message:'Not found video', field:'id'})
         res.status(404).json(errorsMessages);
         return;
     }

    res.status(204).json(foundVideo);

}

videosRouter.get('/', getVideos);
videosRouter.get('/:id', getVideosWithID);
videosRouter.delete('/:id', deleteVideo);
videosRouter.post('/', postVideos);
videosRouter.put('/:id', putVideos);