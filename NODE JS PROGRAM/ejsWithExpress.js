const express=require('express');
const ejs = require('ejs');

const app =express();
// set ejs as a templete engine
app.set('view engine','ejs');

// define a route 
app.get('/',(req,res)=>{
    // render  the 'index.ejs' template
    res.render('index',{title:'Express with EJS', message:'Hello, EJS '});
})

// start the server
const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on localhost:${PORT}`)
})

// 
