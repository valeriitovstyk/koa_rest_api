const Router = require('koa-router');
const UserController = require('../controllers/UserController');
const koaBody = require('koa-body');
const models = require('../models/index');

const router = new Router();
router
    .get('/', PostController.getPostList)
    .get('/:id', PostController.getPost)
    .post('/', koaBody(), PostController.addPost)
    .put('/:id', koaBody(), PostController.updatePost)
    .delete('/:id', PostController.removePost);

module.exports = router.routes();
