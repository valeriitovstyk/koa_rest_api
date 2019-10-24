const Router = require('koa-router');
// const UserController = require('../controllers/UserController');
const PostController = require('../controllers/PostController');
const koaBody = require('koa-body');
// const models = require('../models/index');
const jwt = require('../middleware/jwt');

const router = new Router();
router
    .get('/', PostController.getPostList)
    .get('/:id', PostController.getPost)
    .get('/author/:id', PostController.getPostListByAuthorId)
     // doesn't properly work with name parameter
    // .get('/author/:name', PostController.getPostListByAuthorName)
    .post('/', jwt, koaBody(), PostController.addPost)
    .put('/:id', jwt, koaBody(), PostController.updatePost)
    .delete('/:id', jwt, PostController.removePost);

module.exports = router.routes();
