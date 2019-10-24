const Router = require('koa-router');

const router = new Router();
router.get('/',  async ctx => {ctx.body = 'ok post'});

module.exports = router.routes();