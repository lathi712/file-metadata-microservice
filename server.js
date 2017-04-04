'use strict'

const express = require('express')
const cors = require('cors')

const api = require('./api/microservice')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.static(__dirname + 'public'))

// Routes
app.use(api)

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})