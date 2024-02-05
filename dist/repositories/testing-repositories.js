"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRepositories = exports.db = void 0;
const db_1 = require("../db");
exports.db = (0, db_1.createDB)();
exports.testingRepositories = {
    deleteAllVideo() {
        exports.db.videos.splice(0, exports.db.videos.length);
    }
};
