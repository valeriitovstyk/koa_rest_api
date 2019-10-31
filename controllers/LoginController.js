const Author = require('../models/author');
const encrypt = require('../helpers/crypto');
const hashIsCorrect = require('../helpers/crypto');
const secret = require('../config/jwt');
const jwt = require('jsonwebtoken');

const LoginController = {
    encrypt_this: async (ctx) => {
        ctx.body = await encrypt(ctx.request.body.password);
    },
    validatePassword: async (ctx) => {
        try {
            const credentials = await Author.findOne({
                    attributes: ['name', 'password'],
                    where: {name: ctx.request.body.name}
                },
            );
            const isCorrect = await hashIsCorrect(ctx.request.body.password, credentials.password);
            isCorrect ? ctx.body = " jwt" : ctx.body = "go away ";
            if (isCorrect) {
                const validatedAuthor = {
                    "name":  ctx.request.body.name,
                    "password": ctx.request.body.name
                }
                const token = jwt.sign(validatedAuthor, secret, { expiresIn: 900});
                const response = {
                    "status": "Logged in",
                    "token": token,
                }
                ctx.body = response;
            }
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    getCredentials: async (ctx) => {
        try {
            const credentials = await Author.findOne({
                    attributes: ['name', 'password'],
                    where: {name: ctx.request.body.name}
                },
            );
            const encrypted_pass = await encrypt(credentials.name);
            console.log(encrypted_pass)

            credentials ? ctx.body = credentials : ctx.body = "no data";
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
};

module.exports = LoginController;
