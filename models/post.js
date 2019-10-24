const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('post', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING
    }
}, {
    // options
});


module.exports = Post;