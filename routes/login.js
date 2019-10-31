const Router = require('koa-router');
const LoginController = require('../controllers/LoginController');
const koaBody = require('koa-body');
const checkToken = require('../middleware/authenticate');

const router = new Router();

router
    .post('/encrypt', koaBody(), LoginController.encrypt_this)
    .post('/validate', koaBody(), LoginController.validatePassword)
    .post('/test', checkToken, (ctx) => {
        ctx.body = " successfully authorized "
    });

module.exports = router.routes();
