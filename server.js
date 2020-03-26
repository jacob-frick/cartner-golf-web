require('dotenv').config()
const express = require('express')
const { join } = require('path')

const app = express()
const { User } = require('./models')

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(require('./routes'))


require('./config/db.js')
    .then(() => app.listen(process.env.PORT || 3001))
    .catch(e => console.error(e))