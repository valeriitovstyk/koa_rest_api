const Router = require('koa-router');
const CommentController = require('../controllers/CommentController');
const koaBody = require('koa-body');
const models = require('../models/index');
const jwt = require('../middleware/jwt');

const router = new Router();
router
    .get('/', CommentController.getCommentsList)
    .get('/:id', CommentController.getComment)
    .get('/author/:id', CommentController.getCommentsByAuthor)
    .get('/post/:id', CommentController.getCommentsByPost)
    .post('/', koaBody(), CommentController.addComment)
    .put('/:id', jwt, koaBody(), CommentController.updateComment)
    .delete('/:id', jwt, CommentController.removeComment);

module.exports = router.routes();
