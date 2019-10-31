const Router = require('koa-router');
const LoginController = require('../controllers/LoginController');
const koaBody = require('koa-body');



const router = new Router();
router
    .post('/', koaBody(), LoginController.getCredentials)
    .post('/encrypt', koaBody(), LoginController.encrypt_this)
    .post('/validate', koaBody(), LoginController.validatePassword);



/*    .get('/', UserController.getAuthorList)
    .get('/:id', UserController.getAuthor)
    .post('/', jwt, koaBody(), UserController.addAuthor)
    .put('/:id', jwt, koaBody(), UserController.updateAuthor)
    .delete('/:id', jwt, UserController.removeAuthor);*/

module.exports = router.routes();
