const Sequelize = require('sequelize');
const db = require('./db');

const Project = db.define('project', {
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    subject: {
        type: Sequelize.STRING,
    },
    content : {
        type: Sequelize.TEXT,
    },
    imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Project