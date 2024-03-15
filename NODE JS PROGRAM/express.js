//  creating server using express
 const express = require('express');

 const app = express();
 app.get('/',(req,res)=>{
    res.send("this is the Hello World")
 })

 const port = 4000;
 app.listen(port,()=>{
    console.log(`Server is starting on PORT ${port}`);
 })   