const Router = require('koa-router');
const UserController = require('../controllers/UserController');
const koaBody = require('koa-body');
const models = require('../models/index');
const jwt = require('../middleware/jwt');


const router = new Router();
router
    .get('/', UserController.getAuthorList)
    .get('/:id', UserController.getAuthor)
    .post('/', jwt, koaBody(), UserController.addAuthor)
    .put('/:id', jwt, koaBody(), UserController.updateAuthor)
    .delete('/:id', jwt, UserController.removeAuthor);

module.exports = router.routes();
