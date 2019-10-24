const Router = require('koa-router');

const postRouter = require('./post');
const authorRouter = require('./author');

const mainRouter = new Router();

mainRouter.use('/posts', postRouter);
mainRouter.use('/authors', authorRouter);

module.exports = mainRouter.routes();

