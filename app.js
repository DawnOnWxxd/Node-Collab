let {people} = require('./data.js')
const express = require('express')
const app = express()
const routes = require('./routes/script.js')
const {connectDB} = require('./db/connect.js')
require('dotenv').config()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/test',(req,res)=>{
    console.log("Request made from roblox")
    res.json(people)
})

const setupServer = async() => {
    try {
        await connectDB(process.env.DB_URI)
        app.listen(5000,console.log("Connection to DB is established | Server listening on port 5000..."))
    } catch (error) {
        console.log(`Server Failed to start | ${error}`);
    }
}

app.use('/api/v1/tasks',routes)

setupServer()
