const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Author = sequelize.define('author', {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}, {
    // options
});

module.exports = Author;
