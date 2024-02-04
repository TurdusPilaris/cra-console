import {agent as supertest} from 'supertest';
import {app, db} from "../src/app";
import {describe} from "node:test";
import {createDB} from "../src/db";
import request from 'supertest';

const req = supertest(app);

describe('/videos',()=> {

    beforeAll(async () => {

              })

    afterAll(async () =>{

              })
    // it('POST videos = []', async () => {
    //     db.videos = [{title: 'x' }]
    //     const res = await req
    //         .post('/videos/1?search=${x}')
    //         .send({title: 1 })
    //         .expect(200);
    //
    //     console.log(res.body);
    //     expect(res.body.length).toBe(1)
    // })

    it('GET videos = []', async () => {

         const res = await req
             .get('/videos')
             .expect(200);
         // await request(app).get('/videos').expect(200);

          expect(res.body.length).toBe(db.videos.length)
    })

    it('GET videos with uncorrect id = []', async () => {

        const res = await req
            .get('/videos/9')
            .expect(404);

     })

    it('GET videos with correct id = []', async () => {

        const res = await req
            .get('/videos/1')
            .expect(200);

         expect(res.body).toStrictEqual(db.videos[1])
    })

    it('DELETE videos with uncorrect id = []', async () => {

        const res = await req
            .delete('/videos/9')
            .expect(404);

    })

    it('DELETE videos with correct id = []', async () => {

        const res = await req
            .delete('/videos/1')
            .expect(204);

    })

    it('DELETE all videos ', async () => {

        const res = await req
            .delete('/testing/all-data')
            .expect(204);

    })

})