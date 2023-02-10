const {people}= require('../data')
const {schemaModel} = require('../models/models.js')

const getReqAll = async (req,res)=>{
    try {
        const allTasks = await schemaModel.find({})
        return res
        .status(200)
        .json({allTasks})
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

const postReq = async (req,res)=>{
    try {
        const task = await schemaModel.create(req.body)
        return res
        .status(201)
        .json({task})
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

const getReqSingle = async (req,res)=>{
    try {
        const {id:taskID} = req.params
        if(!taskID){
            return res
            .status(400)
            .json({status:"NO", data:"Please provide ID"})
        }
        console.log(taskID)
        const singleTask = await schemaModel.findOne({ _id: taskID })
        if(!singleTask){
            return res
            .status(404)
            .json({Error:`No task found with ID: ${taskID}`})
        }
        res
        .status(200)
        .json({singleTask})
        
    } catch (error) {
        res
        .status(500)
        .json(error)
    }
    
}


const patchReq = (req,res)=>{
    console.log("PATCH REQ")
    res.send(`PATCH REQ --id-${req.params.id}`)
}

const deleteReq = async (req,res)=>{
try {
    const {id:deleteID} = req.params
   if(!deleteID){
        return res
        .status(400)
        .json({status:"NO", data:"Please provide ID"})
   }

   await schemaModel.deleteOne({ _id:deleteID })
   const allTasks = await schemaModel.find({})
   res
   .status(202)
   .json({allTasks})
   
} catch (error) {
    res
    .status(500)
    .json(error)
}

}

const getTest = (req,res)=>{
    console.log("Accessed from Roblox Test")
    res.send(people)
}

module.exports = {
    getReqAll,
    postReq,
    getReqSingle,
    patchReq,
    deleteReq,
    getTest,
}