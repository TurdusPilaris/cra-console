"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAll = exports.testingRouter = void 0;
const express_1 = require("express");
const testing_repositories_1 = require("../repositories/testing-repositories");
exports.testingRouter = (0, express_1.Router)({});
const deleteAll = (req, res) => {
    testing_repositories_1.testingRepositories.deleteAllVideo();
    res.sendStatus(204);
};
exports.deleteAll = deleteAll;
exports.testingRouter.delete('/all-data', exports.deleteAll);
