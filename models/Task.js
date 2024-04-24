const mongoose = require('mongoose');  // imported Mongoose


// -----------Creating Schemas -----------

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    creationDate : {
        type : Date,
        default : Date.now
    },
    status : {
        type : String,
        // Defining three type of enum
        enum : ['pending', 'in-progress', 'completed'],
        default : 'pending'
    },
});

// -----------Creating & Exporting Models  -----------
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;