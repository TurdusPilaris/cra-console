"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
exports.app = (0, express_1.default)();
exports.db = (0, db_1.createDB)();
const body_parser_1 = __importDefault(require("body-parser"));
const videos_router_1 = require("./routes/videos-router");
const testing_router_1 = require("./routes/testing-router");
const jsonBodyMiddleware = body_parser_1.default.json();
exports.app.use(jsonBodyMiddleware);
exports.app.use('/videos', videos_router_1.videosRouter);
exports.app.use('/testing', testing_router_1.testingRouter);
