"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRepositories = exports.db = void 0;
const db_1 = require("../db");
exports.db = (0, db_1.createDB)();
exports.videosRepositories = {
    // const foundVideo = db.videos.find(a => a.id === +req.params.id);
    findVideos(id) {
        const foundVideo = exports.db.videos.find(a => a.id === id);
        return foundVideo;
    },
    createVideo(title, author, availableResolutions) {
        const publicationDate = new Date();
        publicationDate.setDate(publicationDate.getDate() + 1);
        const createdVideo = {
            id: +(new Date()),
            title: title,
            author: author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: publicationDate.toISOString(),
            availableResolutions: availableResolutions !== null && availableResolutions !== void 0 ? availableResolutions : []
        };
        exports.db.videos.push(createdVideo);
        return createdVideo;
    },
    getAllVideo() {
        return exports.db.videos;
    },
    deleteVideo(id) {
        if (!id) {
            return false;
        }
        for (let i = 0; i < exports.db.videos.length; i++) {
            if (exports.db.videos[i].id === +id) {
                exports.db.videos.splice(i, 1);
                return true;
            }
        }
        return false;
    },
    updateVideo(id, title, author, availableResolutions, canBeDownloaded, minAgeRestriction, publicationDate) {
        let foundVideo = this.findVideos(id);
        if (!foundVideo) {
            return foundVideo;
        }
        ;
        foundVideo.title = title;
        foundVideo.author = author;
        foundVideo.availableResolutions = availableResolutions !== null && availableResolutions !== void 0 ? availableResolutions : [];
        foundVideo.canBeDownloaded = canBeDownloaded;
        foundVideo.minAgeRestriction = minAgeRestriction;
        foundVideo.publicationDate = publicationDate;
        return foundVideo;
    }
};
