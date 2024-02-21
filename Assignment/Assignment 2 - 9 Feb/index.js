// Request Object Properties and Methods:

const express = require('express')


const app = express();
const PORT = process.env.PORT | 8000;


//req.params
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Use userId to fetch user data from database
  });
  
// req.query
  app.get('/users', (req, res) => {
    const userName = req.query.name;
    // Use userName to filter user data from database
  });

//   req.body:
// Contains the parsed request body for POST or PUT requests.
  app.post('/users', (req, res) => {
    const userData = req.body;
    // Save userData to the database
  });


//   req.headers:
// Contains the HTTP request headers.
  app.get('/headers', (req, res) => {
    const userAgent = req.headers['user-agent'];
    res.send(`User Agent: ${userAgent}`);
  });


//   req.method:
// Contains the HTTP method used in the request (GET, POST, PUT, DELETE, etc.).
  app.use((req, res, next) => {
    console.log(`HTTP Method: ${req.method}`);
    next();
  });



//   Response Object Properties and Methods:
// res.send():
// Sends a response with the given data.
  app.get('/hello', (req, res) => {
    res.send('Hello, World!');
  });

//   res.json():
// Sends a JSON response.  
  app.get('/user', (req, res) => {
    const user = { name: 'John', age: 30 };
    res.json(user);
  });

//   res.status():
// Sets the HTTP status code of the response.
  app.get('/notfound', (req, res) => {
    res.status(404).send('Not Found');
  });

//   res.redirect():
// Redirects the client to a different URL.
  app.get('/old-url', (req, res) => {
    res.redirect('/new-url');
  });

//   res.sendFile():
// Sends a file as the response.
  app.get('/file', (req, res) => {
    res.sendFile('/path/to/file.txt');
  });

//   res.setHeader():
// Sets an HTTP header for the response.
  app.get('/headers', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Custom header set');
  });
  

  app.listen(PORT, ()=>{
    console.log(`Server is running at localhost://${PORT}`)
  })