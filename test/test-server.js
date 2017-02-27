'use strict';

const Koa = require('koa');
const app = new Koa();

app.use((ctx, next) => {
    console.log(ctx.req.url, ctx.req.method);

});

app.listen(8080);
