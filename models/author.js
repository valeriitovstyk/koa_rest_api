const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Author = sequelize.define('author', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
    createdAt   : 'createdAt',
    updatedAt   : 'updatedAt',
    timestamps: false,
    underscored : true,
});

module.exports = Author;
