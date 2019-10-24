const Router = require('koa-router');
const { UserController } = require('../controllers/UserController')

const router = new Router();
router
    .get('/',  async ctx => {ctx.body = 'authors list'})
    // .get('/test', UserController.getById)
    .get('/:id',  async ctx => {ctx.body = 'get author by id'})
    .post('/',  async ctx => {ctx.body = 'add author'})
    .put('/:id',  async ctx => {ctx.body = 'edit author'})
    .delete('/:id',  async ctx => {ctx.body = 'delete author'})


module.exports = router.routes();