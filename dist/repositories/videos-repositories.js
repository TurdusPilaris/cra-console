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
    }
};
