const Router = require('koa-router');
const PostController = require('../controllers/PostController');
const koaBody = require('koa-body');
const checkToken = require('../middleware/authenticate');

const router = new Router();
router
    .get('/', PostController.getPostList)
    .get('/:id', PostController.getPost)
    .get('/author/:id', PostController.getPostListByAuthorId)
     // doesn't properly work with name parameter
    // .get('/author/:name', PostController.getPostListByAuthorName)
    .post('/', checkToken, koaBody(), PostController.addPost)
    .put('/:id', checkToken, koaBody(), PostController.updatePost)
    .delete('/:id', checkToken, PostController.removePost);

module.exports = router.routes();
