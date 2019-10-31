const jwt = require('jsonwebtoken');
const secret = require('../config/jwt');
// const secret = process.env.JWT_SECRET || 'secret';

module.exports = async (ctx, next) => {
    if (!ctx.request.headers['x-access-token']) ctx.throw(403, 'No token.');

    const token = ctx.request.headers['x-access-token'];
    console.log("token is " + token);

    try {
        const decoded = jwt.verify(token, secret);
        console.log(decoded)

    } catch (err) {
        ctx.throw(err.status || 403, err.text);
    }

    await next();
};





/*const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

module.exports = async (ctx, next) => {
    if (!ctx.request.headers['x-access-token']) ctx.throw(403, 'No token.');

    const token = ctx.request.headers['x-access-token'];
    try {
        ctx.request.jwtPayload = jwt.verify(token, secret);
    } catch (err) {
        ctx.throw(err.status || 403, err.text);
    }

    await next();
};*/

/*

const token = ctx.request.headers['x-access-token'];
jwt.verify(token, secret, ctx => {
    console.log(ctx)
});*/
