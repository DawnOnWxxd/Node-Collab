let {people} = require('./data.js')
const express = require('express')
const app = express()
const routes = require('./routes/script.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.use('/api/v1/tasks',routes)


app.listen(5000,console.log("Server listening on port 5000..."))
