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
    }
}