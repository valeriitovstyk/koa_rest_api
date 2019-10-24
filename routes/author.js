const Router = require('koa-router');
const UserController = require('../controllers/UserController');
const koaBody = require('koa-body');

const router = new Router();
router
    .get('/', UserController.getAuthorList)
    .get('/:id', UserController.getAuthor)
    .post('/', koaBody(), UserController.addAuthor)
    .put('/:id', koaBody(), UserController.updateAuthor)
    .delete('/:id', UserController.removeAuthor);

module.exports = router.routes();
