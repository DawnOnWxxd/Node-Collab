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


const patchReq = async (req,res)=>{
    try {
        const {id:updateID} = req.params
        if(!updateID){
            return res
            .status(400)
            .json({status:"NO", data:"Please provide ID"})
       }

        const findTask = await schemaModel.findOne({ _id: updateID })
        if(!findTask){return res
            .status(404)
            .json({Error:`No task found with ID: ${updateID}`})
        }
    
        const {completed:updateData} = req.body
        await schemaModel.updateOne({ _id: updateID }, {completed: updateData})
        const updatedTask = await schemaModel.findOne({ _id: updateID })
        res
        .status(201)
        .json({updatedTask})

    } catch (error) {
        res
        .status(500)
        .json(error)
    }
}

const deleteReq = async (req,res)=>{
try {
    const {id:deleteID} = req.params
   if(!deleteID){
        return res
        .status(400)
        .json({status:"NO", data:"Please provide ID"})
   }
   const findTask = await schemaModel.findOne({ _id: deleteID })
   if(!findTask){return res
    .status(404)
    .json({Error:`No task found with ID: ${deleteID}`})}
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