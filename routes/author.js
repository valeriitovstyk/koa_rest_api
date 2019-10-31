const Router = require('koa-router');
const UserController = require('../controllers/AuthorController');
const koaBody = require('koa-body');
const checkToken = require('../middleware/authenticate');

const router = new Router();
router
    .get('/', UserController.getAuthorList)
    .get('/:id', UserController.getAuthor)
    .post('/', checkToken, koaBody(), UserController.addAuthor)
    .put('/:id', checkToken, koaBody(), UserController.updateAuthor)
    .delete('/:id', checkToken, UserController.removeAuthor);

module.exports = router.routes();
