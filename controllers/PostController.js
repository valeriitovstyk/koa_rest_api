const Post = require('../models/post');
// TODO: addAuthor and UpdateAuthor should return new or modified Author
// TODO: updateAuthor - handle if from FE receives only updated fields
// TODO: addAuthor and updateAuthor could have search by name method
// TODO: general error handling

const PostController = {
    getPostList: async (ctx) => {
        try {
            ctx.body = await Post.findAll()
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    getPost: async (ctx) => {
        try {
            ctx.body = await Post.findOne({where: {id: ctx.params.id}});
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    addPost: async (ctx, next) => {
        try {
            const newAuthor = await Post.create ({
                name: ctx.request.body.name,
                email: ctx.request.body.email,
                password: ctx.request.body.password
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }

    },
    removePost: async (ctx) => {
        try {
            ctx.body = await Post.destroy({where: {id: ctx.params.id}});
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    updatePost: async (ctx, next) => {
        try{
            const updateAuthor = await Post.update ({
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

module.exports = PostController;
