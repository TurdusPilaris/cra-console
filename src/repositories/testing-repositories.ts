import {Ava1, createDB, VideoType} from '../db'
export const db = createDB()
export const testingRepositories = {

    deleteAllVideo() {
        db.videos.splice(0, db.videos.length);
    }
}