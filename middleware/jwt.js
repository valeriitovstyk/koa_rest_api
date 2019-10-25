const koaJwt = require('koa-jwt');

module.exports = koaJwt({
    secret: 'hardcoded and not secure ',
});