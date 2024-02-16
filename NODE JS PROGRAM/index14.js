// Example of Conditional Rendering
const express = require('express');
const app =express()

app.get('/',(req,res)=>{
    const isLoggedin = false
    
    if(isLoggedin){
        res.json('Welcome user!')
    }else{
        res.json('Welcome Guest!')
    }
})

// loop example
app.get('/fruits',(req,res)=>{
    const fruits = ['Apple','Banana','Orange','Mango']
    
   let fruitList = '<ul>';
   for(const fruit of fruits){
    fruitList += `<li>${fruit}</li>`;
   }
   fruitList += '</ul>'
   res.send(fruitList);
})

app.listen(3000,()=>{
    console.log(`Server is running at localhost:3000`)
})