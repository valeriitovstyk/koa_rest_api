const Router = require('koa-router');

const postRouter = require('./post');
const authorRouter = require('./author');
const commentRouter = require('./comment');

const mainRouter = new Router();

// mainRouter.post('/login', authenticate);
mainRouter.use('/posts', postRouter);
mainRouter.use('/authors', authorRouter);
mainRouter.use('/comments', commentRouter);

module.exports = mainRouter.routes();

