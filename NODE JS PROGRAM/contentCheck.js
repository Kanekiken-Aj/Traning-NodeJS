const express = require('express');
const app = express();
const port = 3000;
 
// Route for JSON response
app.get('/json', (req, res) => {
  // Sample JSON data
  const jsonData = { message: 'Hello, this is a JSON response!' };
 
  // Set Content-Type header to application/json
  res.header('Content-Type', 'application/json');
 
  // Send the JSON data as the response
  res.send(JSON.stringify(jsonData, null, 2));
});
 
// Route for HTML response
app.get('/html', (req, res) => {
  // Sample HTML content
  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<title>HTML Response</title>
</head>
<body>
<h1>Hello, this is an HTML response!</h1>
</body>
</html>
  `;
 
  // Set Content-Type header to text/html
  res.header('Content-Type', 'text/html');
 
  // Send the HTML content as the response
  res.send(htmlContent);
});
 
// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});