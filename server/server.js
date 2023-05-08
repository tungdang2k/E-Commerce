const express = require('express')
require('dotenv').config()
const dbconnect = require('./config/dbconnect')
const initRouter = require('./routes')


const app = express()
const port = process.env.PORT || 8888

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dbconnect()
initRouter(app)
app.use('/', (req, res) => { res.send('SERVER ON') })
app.listen(port, () => {
    console.log(`Server running on the port : ${port}`);
})