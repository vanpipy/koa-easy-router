'use strict';

const Koa = require('koa');
const app = new Koa();
const Router = require('../index.js');
const router = new Router();

router.get('/200', (ctx, next) => {
    ctx.res.statusCode = 200;
    return next();
});

router.get('/400', (ctx, next) => {
    ctx.res.statusCode = 400;
    return next();
});

router.post('/post', (ctx, next) => {
    ctx.res.statusCode = 200;
    ctx.res.write(JSON.stringify({ whoyouare: 'POST' }));
    ctx.res.end();
});

app.use(router.routes());

module.exports = app;
