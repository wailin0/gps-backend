const Sequelize = require("sequelize")
const sequelize = require("./../utils/database")

const GPS = sequelize.define('gps', {
    longitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false
    },
    latitude: {
        type: Sequelize.DECIMAL(9, 6),
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: sequelize.literal('NOW()')
    }
})

module.exports = GPS
