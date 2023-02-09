let {people} = require('./data.js')
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
    add(name)
    res
    .status(201)
    .json({status:"OK", data:name})
})

app.put('/people/:id',(req,res)=>{
    const {name} = req.body
    const {id} = req.params
    if(!id){
        return res.status(400).json({status:"Failed",data:"Please Provide ID request Param"})
    }
    if(!name){
        return res.status(400).json({status:"Failed",data:"Please Provide Name request Body"})
    }
    const newPeople = people.find((people)=>{
        if(people.id == id){
            people.name = name
            return true
        }
    })
    res.status(201).json(people)
})

app.delete('/people/:id',(req,res)=>{
    const {name} = req.body
    const {id} = req.params
    if(!id){
        return res.status(400).json({status:"Failed",data:"Please Provide ID request Param"})
    }
    if(!name){
        return res.status(400).json({status:"Failed",data:"Please Provide Name request Body"})
    }
   

    people = people.filter(person => person.id != id)

    res.status(201).json(people)
})

app.listen(5000,console.log("Server listening on port 5000..."))
