import {Ava1, createDB, VideoType} from '../db'
export const db = createDB()
export const videosRepositories = {

    // const foundVideo = db.videos.find(a => a.id === +req.params.id);
    findVideos(id: number):VideoType| undefined  {
        const foundVideo = db.videos.find(a => a.id === id);
        return foundVideo;
    },

    createVideo(title: string, author: string, availableResolutions: string[]):VideoType {

        const publicationDate = new Date();
        publicationDate.setDate(publicationDate.getDate() + 1);

        const createdVideo: VideoType =
            {
                id: +(new Date()),
                title: title,
                author:author,
                canBeDownloaded: false,
                minAgeRestriction: null,
                createdAt: new Date().toISOString(),
                publicationDate: publicationDate.toISOString(),
                availableResolutions: availableResolutions ?? []
            }
        db.videos.push(createdVideo)
        return createdVideo;
    },

    getAllVideo():VideoType[] {
        return db.videos;
    },

    deleteVideo(id:string|undefined): Boolean {
        if(!id) {return false}
        for(let i=0; i < db.videos.length; i++) {
            if (db.videos[i].id === +id) {
                db.videos.splice(i, 1);
                return true;
            }
        }

        return false;

    },

    updateVideo(id:number, title: string, author: string, availableResolutions:string[],
                canBeDownloaded: boolean, minAgeRestriction: number|null, publicationDate: string){

        let foundVideo = this.findVideos(id);

        if (!foundVideo) {return foundVideo};

        foundVideo.title = title;
        foundVideo.author = author;
        foundVideo.availableResolutions = availableResolutions ?? [];
        foundVideo.canBeDownloaded = canBeDownloaded;
        foundVideo.minAgeRestriction = minAgeRestriction;
        foundVideo.publicationDate = publicationDate;

        return foundVideo;

    }
}