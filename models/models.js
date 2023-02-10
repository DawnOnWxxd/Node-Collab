const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'must provide name'],
        trim: true,
        maxlength: [20,'character limit is 20']

    },
    completed: {
        type:Boolean,
        default:false
    }
})

const schemaModel = mongoose.model('task',taskSchema)

module.exports = {schemaModel};