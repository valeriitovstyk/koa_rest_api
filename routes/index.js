const Router = require('koa-router');

const postRouter = require('./post');
const authorRouter = require('./author');

const mainRouter = new Router();

mainRouter.use('/posts', postRouter);
mainRouter.use('/authors', authorRouter);

module.exports = mainRouter.routes();



/*
const BP = require('koa-bodyparser');
api.use(BP());

api.use(async (ctx, next) => {
    await next();
    ctx.body = JSON.stringify(ctx.body, null, 2);
})

let users = [{
    name: 'Pipik',
    role: 'supa-pupa',
    _accessLevel: 99,
},{
    name: 'Nyar',
    role: 'voicer',
    _accessLevel: 3,
    social: {
        vk: 'https://vk.com/nyanyar'
    }
}]

api.get('/user', async (ctx, next) => {
    ctx.body = users;
    await next();
})

api.get('/user/:id', async (ctx, next) => {
    let user = users[ctx.params.id];
    if (user)
        ctx.body = user;
    await next();
})

api.post('/user', async (ctx, next) => {
    // body should be parsed by bodeparser we've attached earlier
    let data = ctx.request.body;
    if (data.name !== '') {
        users.push({
            ...data,
            _accessLevel: -1,
        });
        ctx.body = users.slice(-1)[0];
    }
    await next();
})*/
