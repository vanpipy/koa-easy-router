'use strict';

const app = require('./test-server');
const request = require('supertest');

describe('Router type', () => {
    it('should be request with correct path and status', (done) => {
        request(app.listen())
            .get('/200')
            .expect(200, done);
    });

    it('should be request with bad path and status', (done) => {
        request(app.listen())
            .get('/400')
            .expect(400, done);
    });

    it('should be request with post method', (done) => {
        request(app.listen())
            .post('/post')
            .expect(200, done);
    });

    it('should get the query with get method', (done) => {
        request(app.listen())
            .get('/query?a=1&b=2')
            .expect(200, {
                a: 1,
                b: 2
            }, done)
    });
});
