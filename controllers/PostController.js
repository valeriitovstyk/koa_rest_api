const Post = require('../models/post');
const Author = require('../models/author');
const models = require('../models/index');

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
    getPostListByAuthorId:  async (ctx) => {
        try {
            ctx.body = await models.Author.findAll({
                include: [ models.Post ],
                where: {
                    id: ctx.params.id,
                },
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
// doesn't work search with name as parameter, sql looks like:
    //WHERE "author"."id" = \'Philip\';', parameters: undefined }
/*    getPostListByAuthorName:  async (ctx) => {
        console.log(this.params);

        try {
            ctx.body = await models.Author.findAll({
                include: [ models.Post ],
                where: {
                    'name': ctx.params.name,
                },
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },*/
    addPost: async (ctx, next) => {
        try {
            const newPost = await Post.create ({
                title: ctx.request.body.title,
                content: ctx.request.body.content,
                userId: ctx.request.body.user_id
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
            const updatePost = await Post.update ({
                title: ctx.request.body.title,
                content: ctx.request.body.content,
                userId: ctx.request.body.user_id
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
