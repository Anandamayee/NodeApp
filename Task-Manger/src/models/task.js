const mongoose = require('mongoose');
const validator = require('validator');
 
const taskSchema=new mongoose.Schema({
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})
const Task = mongoose.model('Task',taskSchema);


module.exports = Task