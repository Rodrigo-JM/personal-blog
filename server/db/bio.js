const Sequelize = require('sequelize');
const db = require('./db');

const Bio = db.define('bio', {
    title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    content : {
        type: Sequelize.TEXT,
    },
})

module.exports = Bio