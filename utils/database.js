const Sequelize = require("sequelize")

const sequelize = new Sequelize(
    "gpstest",
    "root",
    "password",
    {
        host: "localhost",
        dialect: "mysql",
    })

module.exports = sequelize
