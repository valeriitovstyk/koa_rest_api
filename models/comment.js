const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Comment = sequelize.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    text: {
        type: Sequelize.STRING
    },
}, {
    // options
});

module.exports = Comment;
