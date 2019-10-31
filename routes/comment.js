const Router = require('koa-router');
const CommentController = require('../controllers/CommentController');
const koaBody = require('koa-body');
const models = require('../models/index');
const checkToken = require('../middleware/authenticate');

const router = new Router();
router
    .get('/', CommentController.getCommentsList)
    .get('/:id', CommentController.getComment)
    .get('/author/:id', CommentController.getCommentsByAuthor)
    .get('/post/:id', CommentController.getCommentsByPost)
    .post('/', checkToken, koaBody(), CommentController.addComment)
    .put('/:id', checkToken, koaBody(), CommentController.updateComment)
    .delete('/:id', checkToken, CommentController.removeComment);

module.exports = router.routes();
