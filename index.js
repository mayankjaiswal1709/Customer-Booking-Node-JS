require('dotenv').config()
const express = require('express')
const app = express()
require('./models/config')
const user = require('./routes/operatorRoutes')
const booking = require('./routes/bookingRouted')
app.use(express.json());




app.use('/', user)
app.use('/', booking)
console.log('helo env is running', process.env.port);
const server = app.listen(process.env.port, (req, res) => {
    console.log(`server is running on port :${process.env.port}`);
}) 