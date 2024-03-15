// const greeting = require('./greeting');
// console.log(greeting('Alice'));


// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.status(200).json({message: 'Hello, World!'})
// })


// app.js
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// module.exports = app;

// const express = require('express');
import express from 'express'
const app = express();

app.get('/', (req, res) => {
 res.status(200).json({ message: 'Hello, World!' });
});

export default app;
