//  creating server using express
const express = require('express');
const fs = require('fs');

const app = express();
app.get('/readfile',(req,res)=>{
    const filepath = './express.js'
    fs.readFile(filepath, 'utf-8',(err,data)=>{
        if(err){
            return res.json(500).send('Error reading file');
        }
        res.send(data);
    });
//    res.send("this is the Hello World")
})

const port = 4000;
app.listen(port,()=>{
   console.log(`Server is starting on PORT ${port}`);
})