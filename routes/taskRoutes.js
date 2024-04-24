
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');



// ------ Creating a New Task -------------
router.post('/', async (req, res) => {
    try{
        const {title, description, status} = req.body; // collecting information from client side
        const task = new Task({title, description, status}); 
        await task.save();
        res.status(201).json(task);
    }catch(err){
        console.log(err.message);
        res.status(500).json({message: err.message});
    }
})


// -----------Retrieving Task -------------
router.get('/:id', getTask,  async (req, res) => {
    res.status(200).json(res.task);
});


// -----------Updating Task -------------
router.patch('/:id', getTask, async(req, res)=>{
    if(req.body.title!= null){
        res.task.title = req.body.title;
    }
    if(req.body.description!= null){
        res.task.description = req.body.description;
    }
    if(req.body.status!= null){
        res.task.status = req.body.status;
    }
    try{
        const updatedTask = await res.task.save();
        res.status(200).json(updatedTask);
    }catch(e){
        res.status(400).json({message: e.message});
    }
});


// -----------Deleting Task -------------
router.delete('/:id', getTask, async (req, res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Task Deleted'});
    }catch(e){
        console.error(e);
        res.status(500).json({message: e.message});
    }
});


// Middleware to getTask by Id

async function getTask(req, res, next){
    let task;
    try{
        task = await Task.findById(req.params.id);
        if(task == null){
            return res.status(404).json({message: 'Cannot find Task'});
        }
    }catch(err){
        return res.status(500).json({message: err.message});
    }
    res.task = task;
    next();
}


module.exports = router;