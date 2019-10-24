const Router = require('koa-router');
// const UserController = require('../controllers/UserController');
const PostController = require('../controllers/PostController');
const koaBody = require('koa-body');
// const models = require('../models/index');

const router = new Router();
router
    .get('/', PostController.getPostList)
    .get('/:id', PostController.getPost)
    .get('/author/:id', PostController.getPostListByAuthorId)
     // doesn't properly work with name parameter
    // .get('/author/:name', PostController.getPostListByAuthorName)
    .post('/', koaBody(), PostController.addPost)
    .put('/:id', koaBody(), PostController.updatePost)
    .delete('/:id', PostController.removePost);

module.exports = router.routes();
