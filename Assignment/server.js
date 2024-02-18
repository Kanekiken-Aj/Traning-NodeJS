// Implement the concept of Dynamic routing using EJS template engine in Node JS with files like profile.ejs, home.ejs and about.ejs and render the home page with the content of profile.ejs file.
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  // Render the home page with the content of profile.ejs file
  res.render('home', { content: 'profile' });
});

app.get('/about', (req, res) => {
  res.render('about');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
