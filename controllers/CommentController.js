const Post = require('../models/post');
const Author = require('../models/author');
const Comment = require('../models/comment');
const models = require('../models/index');

const CommentController = {
    getCommentsList: async (ctx) => {
        try {
            ctx.body = await Comment.findAndCountAll({
                order: [['id', 'ASC']],
                limit: ctx.request.query.pageLimit,
                offset: ctx.request.query.offsetPosition,
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
// comment list without pagination
/*    getCommentsList: async (ctx) => {
            try {
                ctx.body = await Comment.findAll()
            } catch (err) {
                console.log(err);
                ctx.status = 204;
            }
        },*/
    getComment: async (ctx) => {
        try {
            ctx.body = await Comment.findOne({where: {id: ctx.params.id}});
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    getCommentsByAuthor:  async (ctx) => {
        try {
            ctx.body = await models.Author.findAndCountAll({
                order: [['id', 'ASC']],
                limit: ctx.request.query.pageLimit,
                offset: ctx.request.query.offsetPosition,
                include: [ models.Comment ],
                where: {
                    id: ctx.params.id,
                },
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
// comment list  by author  without pagination
/*    getCommentsByAuthor:  async (ctx) => {
        try {
            ctx.body = await models.Author.findAll({
                include: [ models.Comment ],
                where: {
                    id: ctx.params.id,
                },
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },*/
    getCommentsByPost:  async (ctx) => {
        try {
            ctx.body = await models.Post.findAndCountAll({
                order: [['id', 'ASC']],
                limit: ctx.request.query.pageLimit,
                offset: ctx.request.query.offsetPosition,
                include: [ models.Comment ],
                where: {
                    id: ctx.params.id,
                },
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
// comment list  by post without pagination
/*    getCommentsByPost:  async (ctx) => {
        try {
            ctx.body = await models.Post.findAll({
                include: [ models.Comment ],
                where: {
                    id: ctx.params.id,
                },
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },*/
    addComment: async (ctx, next) => {
        try {
            console.log("tets")
            const newPost = await Comment.create ({
                text: ctx.request.body.text,
                postId: ctx.request.body.post_id,
                authorId: ctx.request.body.author_id
            })
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }

    },
    removeComment: async (ctx) => {
        try {
            ctx.body = await Comment.destroy({where: {id: ctx.params.id}});
        } catch (err) {
            console.log(err);
            ctx.status = 204;
        }
    },
    updateComment: async (ctx, next) => {
        try{
            const updatePost = await Comment.update ({
                text: ctx.request.body.text,
                postId: ctx.request.body.post_id,
                authorId: ctx.request.body.author_id
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

module.exports = CommentController;
