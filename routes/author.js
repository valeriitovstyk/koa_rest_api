const Router = require('koa-router');
const AuthorController = require('../controllers/AuthorController');
const koaBody = require('koa-body');
const checkToken = require('../middleware/authenticate');

const router = new Router();
router
    .get('/', AuthorController.getAuthorList)
    .get('/:id', AuthorController.getAuthor)
    .post('/', koaBody(), AuthorController.addAuthor)
    .put('/:id', checkToken, koaBody(), AuthorController.updateAuthor)
    .delete('/:id', checkToken, AuthorController.removeAuthor);

module.exports = router.routes();
