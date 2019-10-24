const models = {
        Author: require('./author'),
        // Comment: require('./comment'),
        Post: require('./post'),
};

models.Post.belongsTo(models.Author);
models.Author.hasMany(models.Post);

module.exports = models;
