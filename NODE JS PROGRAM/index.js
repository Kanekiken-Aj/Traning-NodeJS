// //  modified code for ejs with express code
// const express = require("express");
// const app = express();

// // set ejs as view engine
// app.set("view-engine", "ejs");

// app.get("/example", (req, res) => {
//   // sample data

//   const data = {
//     pageTitle: "Express.js Example",
//     message: "Hello, this is an example of passing data to views!",
//     items: ["Item 1", "Item 2", "Item 3"],
//   };

// //   render the 'exaple.ejs' view and pass data to it

// res.render('example.ejs',data)
// });

// const PORT = 3000
// app.listen(PORT, ()=>{
//     console.log(`Server is running at PORT : Localhost://${PORT}`)
// })

// ------------------------------------------

// const express = require('express');
// const app = express();
// const port = 3000;
 
// // Set EJS as the view engine
// app.set('view engine', 'ejs');
 
// // Define a route
// app.get('/', (req, res) => {
//   // Sample data
//   const data = {
//     title: 'Express.js Views Example. this is title',
//     message: 'Rendering views with data in Express.js. this is message',
//   };
 
//   // Render the 'index' view and pass the data
//   res.render('example2.ejs', { data });
// });
 
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });


// ----------------------------


// displaying through pug... .pug extension file inside views file
// const express = require("express")
// const app = express();

// app.set('view engine', 'pug');

// // specify the directory wherre views are located..
// app.set('views',__dirname + '/views');


// app.get("/example", (req, res) => {
//     // sample data
//     res.render('index.pug',{title: 'Express with Pug'})
// })

// const PORT = 3000
// app.listen(PORT, ()=>{
//     console.log(`Server is running at PORT : Localhost://${PORT}`)
// })



// -----------------------------------------------------
// index.js:
 
// The main Express.js file.
 
const express = require('express');
const app = express();
const port = 3000;
 
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
 
app.get('/', (req, res) => {
    res.render('layout.ejs', { pageTitle: 'Home Page' , body: 'Welcome to our website!'});
});
 
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
 