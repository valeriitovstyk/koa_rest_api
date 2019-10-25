const models = {
        Author: require('./author'),
        Comment: require('./comment'),
        Post: require('./post'),
};

models.Post.hasMany(models.Comment);
models.Comment.belongsTo(models.Post);
models.Comment.belongsTo(models.Author);
models.Post.belongsTo(models.Author);
models.Author.hasMany(models.Comment);
models.Author.hasMany(models.Post);

module.exports = models;
