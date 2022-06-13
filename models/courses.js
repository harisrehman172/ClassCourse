const sequelize = require('../config/config');
const Sequelize = require('sequelize');

var courses = sequelize.define("courses", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_en: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    name_nl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description_en: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description_nl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    logo:{
        type: Sequelize.STRING,
        allowNull: true
    },
    time: {
        type: Sequelize.STRING,
        allowNull: true
    },
    contents_upload_en: {
        type: Sequelize.STRING,
        allowNull: true
    },
    contents_upload_nl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    remarks_en: {
        type: Sequelize.STRING,
        allowNull: true
    },
    remarks_nl:{
        type: Sequelize.STRING,
        allowNull: true
    },
    certification:{
        type: Sequelize.STRING,
        allowNull: true
    },
    price:{
        type: Sequelize.STRING,
        allowNull: false
    },
    course_progress:{
        type: Sequelize.STRING,
        allowNull: false
    }
}, { freezeTableName: true });

module.exports = courses