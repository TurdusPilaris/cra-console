"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAll = exports.testingRouter = void 0;
const express_1 = require("express");
const app_1 = require("../app");
exports.testingRouter = (0, express_1.Router)({});
const deleteAll = (req, res) => {
    app_1.db.videos.splice(0, app_1.db.videos.length);
    res.sendStatus(204);
};
exports.deleteAll = deleteAll;
exports.testingRouter.delete('/all-data', exports.deleteAll);
