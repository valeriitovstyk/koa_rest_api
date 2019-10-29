const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/comment_relation');

module.exports = sequelize;