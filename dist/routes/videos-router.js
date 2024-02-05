"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putVideos = exports.postVideos = exports.deleteVideo = exports.getVideosWithID = exports.getVideos = exports.videosRouter = void 0;
const express_1 = require("express");
const db_1 = require("../db");
const videos_repositories_1 = require("../repositories/videos-repositories");
exports.videosRouter = (0, express_1.Router)({});
const getVideos = (req, res) => {
    res
        .status(200)
        .send(videos_repositories_1.videosRepositories.getAllVideo());
};
exports.getVideos = getVideos;
const getVideosWithID = (req, res) => {
    if (!req.params.id) {
        res.sendStatus(404);
        return;
    }
    var foundVideo = videos_repositories_1.videosRepositories.findVideos(+req.params.id);
    if (!foundVideo) {
        res.sendStatus(404);
        return;
    }
    res
        .status(200)
        .send(foundVideo);
};
exports.getVideosWithID = getVideosWithID;
const deleteVideo = (req, res) => {
    if (videos_repositories_1.videosRepositories.deleteVideo(req.params.id)) {
        res.sendStatus(204);
        return;
    }
    res.sendStatus(404);
};
exports.deleteVideo = deleteVideo;
const postVideos = (req, res) => {
    let errorsMessages = {
        errorsMessages: []
    };
    if (!req.body.title) {
        errorsMessages.errorsMessages.push({ message: 'Not found', field: 'title' });
    }
    else if (req.body.title.length > 40) {
        errorsMessages.errorsMessages.push({ message: 'string must be less than 40', field: 'title' });
    }
    if (!req.body.author) {
        errorsMessages.errorsMessages.push({ message: 'Not found', field: 'author' });
    }
    else if (req.body.author.length > 20) {
        errorsMessages.errorsMessages.push({ message: 'string must be less than 20', field: 'author' });
    }
    if (Array.isArray(req.body.availableResolutions)) {
        req.body.availableResolutions.map(r => {
            !db_1.Ava1.includes(r) && errorsMessages.errorsMessages.push({ message: 'Not found', field: 'availableResolutions' });
        });
    }
    if (errorsMessages.errorsMessages.length > 0) {
        res.status(400).json(errorsMessages);
        return;
    }
    var createdVideo = videos_repositories_1.videosRepositories.createVideo(req.body.title, req.body.author, req.body.availableResolutions);
    res.status(201).json(createdVideo);
};
exports.postVideos = postVideos;
const putVideos = (req, res) => {
    if (!req.params.id) {
        res.sendStatus(404);
        return;
    }
    let errorsMessages = {
        errorsMessages: []
    };
    // check title
    if (!req.body.title) {
        errorsMessages.errorsMessages.push({ message: 'Not found', field: 'title' });
    }
    else if (req.body.title.length > 40) {
        errorsMessages.errorsMessages.push({ message: 'string must be less than 40', field: 'title' });
    }
    // check author
    if (!req.body.author) {
        errorsMessages.errorsMessages.push({ message: 'Not found', field: 'author' });
    }
    else if (req.body.author.length > 20) {
        errorsMessages.errorsMessages.push({ message: 'string must be less than 20', field: 'author' });
    }
    // check availableResolutions
    if (Array.isArray(req.body.availableResolutions)) {
        req.body.availableResolutions.map(r => {
            !db_1.Ava1.includes(r) && errorsMessages.errorsMessages.push({ message: 'Not found', field: 'availableResolutions' });
        });
    }
    // check canBeDownloaded
    if (typeof (req.body.canBeDownloaded) != 'boolean') {
        errorsMessages.errorsMessages.push({ message: 'Invalid type', field: 'canBeDownloaded' });
    }
    // check canBeDownloaded
    let minAgeRestriction = null;
    if ((req.body.minAgeRestriction) && (typeof (req.body.minAgeRestriction) != "number" || (+req.body.minAgeRestriction < 1 || +req.body.minAgeRestriction > 18))) {
        errorsMessages.errorsMessages.push({ message: 'Invalid field', field: 'minAgeRestriction' });
    }
    else if ((req.body.minAgeRestriction)) {
        minAgeRestriction = +req.body.minAgeRestriction;
    }
    if (!req.body.publicationDate) {
        errorsMessages.errorsMessages.push({ message: 'Not found field', field: 'publicationDate' });
    }
    else {
        const dateInspection = (/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/gi).test(req.body.publicationDate);
        if (typeof req.body.publicationDate != "undefined" && !dateInspection) {
            errorsMessages.errorsMessages.push({
                message: "Invalid publicationDate",
                field: 'publicationDate'
            });
        }
    }
    if (errorsMessages.errorsMessages.length > 0) {
        res.status(400).json(errorsMessages);
        return;
    }
    // const foundVideo = db.videos.find(a => a.id === +req.params.id);
    const foundVideo = videos_repositories_1.videosRepositories.updateVideo(+req.params.id, req.body.title, req.body.author, req.body.availableResolutions, req.body.canBeDownloaded, minAgeRestriction, req.body.publicationDate);
    if (!foundVideo) {
        errorsMessages.errorsMessages.push({ message: 'Not found video', field: 'id' });
        res.status(404).json(errorsMessages);
        return;
    }
    res.status(204).json(foundVideo);
};
exports.putVideos = putVideos;
exports.videosRouter.get('/', exports.getVideos);
exports.videosRouter.get('/:id', exports.getVideosWithID);
exports.videosRouter.delete('/:id', exports.deleteVideo);
exports.videosRouter.post('/', exports.postVideos);
exports.videosRouter.put('/:id', exports.putVideos);
