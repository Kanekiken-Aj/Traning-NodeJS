const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.post("/task", async(req,res)=>{
    try{
        const task =new Task(req.body);
        await task.save();
        res.status(200).send(task);
    }catch(err){
        res.status(400).send(err);
    }
    console.log("data Inserted Successfully")
});

router.get('/tasks', async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.send(tasks);
    }catch(err){
        res.send(500).send(err);
    }
    console.log("Fetched data Successfully")
});

// Update a task by id
router.patch('/tasks/:id',async(req,res)=>{
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
        if(!task){
            return res.status(404).send();
        }res.send(task);
    }catch(err){
            res.status(400).send(err)
        }
        console.log("Data Updated!")
});

// Delete a task by ID
router.delete('/tasks/:id',async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id, req.body,{new:true, runValidators:true})
        if(!task){
            return res.status(404).send();
        }res.send(task);
    }catch(err){
            res.status(500).send(err)
        }
        console.log("Data Deleted!")
});

module.exports =router;