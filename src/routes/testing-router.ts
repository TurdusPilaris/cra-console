import {Request, Response, Router} from "express";
import {Ava1, VideoType} from "../db";
import {app, db} from "../app";
import {testingRepositories} from "../repositories/testing-repositories";

type ParamsType = {id:string};
type ReqBodyType = {title: string, author: string,  availableResolutions: typeof Ava1};
type QueryType = {title: string};
export const testingRouter = Router({})

export const deleteAll = (req: Request<ParamsType, any, ReqBodyType, QueryType>, res: Response<VideoType>) => {

    testingRepositories.deleteAllVideo();
    res.sendStatus(204);

}


testingRouter.delete('/all-data', deleteAll);