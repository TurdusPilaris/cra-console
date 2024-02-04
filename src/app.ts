import express, {Request, Response} from 'express'
import {Ava1, createDB, VideoType} from "./db";
import {AvailableResolution} from "./db";
import {log} from "node:util";
export type TypeErrorMessage = {
    message: string;
    field: string
}
export type TypeErrors = {
    errorsMessages: TypeErrorMessage[]
}

export const app = express()
export const db = createDB()

import bodyParser from 'body-parser'
import {videosRouter} from "./routes/videos-router";
import {testingRouter} from "./routes/testing-router";
const jsonBodyMiddleware = bodyParser.json();
app.use(jsonBodyMiddleware)

app.use('/videos', videosRouter)
app.use('/testing', testingRouter)

