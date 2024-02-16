// Node JS: create CRUD operation using Node and Express with fields like firstname, lastname, email, password, age.

const express = require('express');
const router = express.Router();

// const Task = require('../models/task');
const User = require('../models/form')

router.post("/register", async(req,res)=>{
    try{
        const user =new User(req.body);
        await user.save();
        res.status(200).send(user);
    }catch(err){
        res.status(400).send(err);
    }
    console.log("data Inserted Successfully");
});

router.get('/users', async(req,res)=>{
    try{
        const users = await User.find();
        res.send(users);
    }catch(err){
        res.send(500).send(err);
    }
    console.log("Fetched data Successfully")
});

// Update a task by id
// router.patch('/tasks/:id',async(req,res)=>{
//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body,{new:true, runValidators:true})
//         if(!task){
//             return res.status(404).send();
//         }res.send(task);
//     }catch(err){
//             res.status(400).send(err)
//         }
//         console.log("Data Updated!")
// });

// // Delete a task by ID
// router.delete('/tasks/:id',async(req,res)=>{
//     try{
//         const task = await Task.findByIdAndDelete(req.params.id, req.body,{new:true, runValidators:true})
//         if(!task){
//             return res.status(404).send();
//         }res.send(task);
//     }catch(err){
//             res.status(500).send(err)
//         }
//         console.log("Data Deleted!")
// });


module.exports =router;