const sequelize = require('../config/config');
const Sequelize = require('sequelize');

var teachers = sequelize.define("teachers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true
    },
    full_name_en: {
        type: Sequelize.STRING
    },
    full_name_nl: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    contactNo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    residents: {
        type: Sequelize.STRING,
        allowNull: true
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true
    },
    token: {
        type: Sequelize.STRING,
        allowNull: true
    },
    reset_token: {
        type: Sequelize.STRING,
        allowNull: true
    },
    status: {
        type: Sequelize.TINYINT,
        defaultValue: 0,
    },
    isActive: {
        type: Sequelize.TINYINT,
        defaultValue: 0
    },
    last_login: {
        type: Sequelize.DATE,
        allowNull: true
    },

    isDelete: {
        type: Sequelize.INTEGER,
        defaultValue: '0'
    },

}, { freezeTableName: true });

module.exports = teachers