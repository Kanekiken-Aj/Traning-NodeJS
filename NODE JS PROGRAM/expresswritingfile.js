//  creating server using express
const express = require('express');
const fs = require('fs');

const app = express();
app.get('/writefile',(req,res)=>{
    const filepath = './example.txt'
    const content = 'Hello, this is the content of the new file'
    fs.writeFile(filepath,content, 'utf-8',(err,data)=>{
        if(err){
            return res.json(500).send('Error writing file');
        }
        res.send("File has been written successfully");
    });
//    res.send("this is the Hello World")
})

const port = 4000;
app.listen(port,()=>{
   console.log(`Server is starting on PORT ${port}`);
})