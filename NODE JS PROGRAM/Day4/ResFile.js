const express = require('express');

const app = express();
 
// Middleware to log the request details

app.use((req, res, next) => {

  console.log(`Request received: ${req.method} ${req.url}`);

  next();

});
 
// Route that sends a basic response

app.get('/hello', (req, res) => {

  res.send('Hello, Express!');

});
 
// Route that sends a JSON response

app.get('/json', (req, res) => {

  const data = { message: 'Hello, JSON!' };

  res.json(data);

});
 
// Route that redirects to another URL

app.get('/redirect', (req, res) => {

  res.redirect('/hello');

});
 
// Route that renders an HTML page

app.get('/render', (req, res) => {

  res.render('index'); // Assumes you have a template engine set up

});
 
// Error handling middleware

app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).send('Something went wrong!');

});
 
const PORT = 4000;

app.listen(PORT, () => {

  console.log(`Server is running on http://localhost:${PORT}`);

});
