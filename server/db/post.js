const Sequelize = require('sequelize');
const db = require('./db');

const Post = db.define('post', {
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content : {
        type: Sequelize.TEXT,
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Post