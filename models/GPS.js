const Sequelize = require("sequelize")
const sequelize = require("./../utils/database")

const GPS = sequelize.define('gps', {
    hour: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    minute: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    second: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    year: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    month: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    day: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
    },
    status: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    NSInd: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    EWInd: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    reserve: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    longitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false
    },
    latitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false
    },
    speed: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    angle: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
})

module.exports = GPS
