const express = require('express');
const bodyParser = require('body-parser');
 
const app = express();
const port = 3000;
 
// Middleware to parse JSON in POST requests
app.use(bodyParser.json());
 
// Define a route for GET requests
app.get('/', (req, res) => {
  res.send('Hello, this is a GET request!',);
});
 
// Define a route for POST requests
app.post('/', (req, res) => {
  const dataFromClient = req.body; // Assuming the client sends JSON in the request body
  res.json({ message: 'Received POST request!', data: dataFromClient });
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost new:${port}`);
});
 