'use strict';

const app = require('./test-server');
const request = require('supertest');

describe('Router type', () => {
    it('should be request with correct path and status', () => {
        request(app.listen())
            .get('/200')
            .expect(200);
    });

    it('should be request with bad path and status', () => {
        request(app.listen())
            .get('/400')
            .expect(400);
    });

    it('should be request with post method', () => {
        request(app.listen())
            .post('/post')
            .expect(200);
    });
});
