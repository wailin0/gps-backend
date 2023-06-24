const express = require("express")
const cors = require('cors')
const sequelize = require("./utils/database")
const gpsController = require("./controllers/gps")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/gps", gpsController)

const port = process.env.PORT || 4000;


sequelize
    .sync({force: false})
    .then(result => {
        console.log(result)
        app.listen(port)
    })
    .catch(err => {
        console.log(err)
    })
