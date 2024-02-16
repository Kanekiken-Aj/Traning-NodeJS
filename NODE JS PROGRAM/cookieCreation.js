const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    const username = req.cookies.username || 'Guest';
    res.send(`Hello, ${username}!`);
});

app.get('/set-cookie/:username',(req,res)=>{
    // set cookie
    res.cookie('username:', req.params.username);
    res.send(`Cookie set!`);
});

app.get('/clear-cookie',(req,res)=>{
   res.clearCookie('username')
    res.send(`Cookie Cleared!`);
});

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server is running on PORT: ${port}`)
}); 