const Author = require('../models/author');
// TODO: addAuthor and UpdateAuthor should return new or modified Author
// TODO: updateAuthor - handle if from FE receives only updated fields
// TODO: addAuthor and updateAuthor could have search by name method
// TODO: general error handling

const UserController = {
    getAuthorList: async (ctx) => {
        try {
            ctx.body = await Author.findAll()
        } catch (err) {
            console.log(err);
            ctx.status = 204
        }
    },
    getAuthor: async (ctx) => {
        try {
            ctx.body = await Author.findOne({where: {id: ctx.params.id}});
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    addAuthor: async (ctx, next) => {
        try {
            const newAuthor = await Author.create ({
                name: ctx.request.body.name,
                email: ctx.request.body.email,
                password: ctx.request.body.password
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }

    },
    removeAuthor: async (ctx) => {
        try {
            ctx.body = await Author.destroy({where: {id: ctx.params.id}});
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    updateAuthor: async (ctx, next) => {
        try{
            const updateAuthor = await Author.update ({
                name: ctx.request.body.name,
                email: ctx.request.body.email,
                password: ctx.request.body.password
            }, {
                where: {
                    id: ctx.params.id
                }
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }

    },
};

module.exports = UserController;
