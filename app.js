const {people} = require('./data.js')
const express = require('express')
const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/',(req,res)=>{
    res
    .status(200)
    .send(`
    <h1>Hello</h1>
    <a href="/people">Click here</a>
    `)
})

app.get('/people',(req,res)=>{
    res
    .status(200)
    .json(people)
})

app.post('/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res
        .status(400)
        .send(`
        <h1>Oops! Error</h1>
        <h3>Please provide a name in Request Body</h3>
        `)
    }
    res
    .status(200)
    .json({status:"OK", data:name})
})

app.listen(5000,console.log("Server listening on port 5000..."))
