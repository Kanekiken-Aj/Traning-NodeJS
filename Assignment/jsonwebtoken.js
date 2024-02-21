// Write the code for authentication using jsonwebtoken library and implement it to create the token and login using the token.
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Secret key for signing and verifying JWT tokens
const JWT_SECRET_KEY = 'your-secret-key';

// Middleware to parse JSON data
app.use(bodyParser.json());

// Example user data (can be replaced with data from a database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' }
];

// Route to generate JWT token upon successful login
app.post('/login', (req, res) => {
  // Extract username and password from request body
  const { username, password } = req.body;

  // Find user by username and password
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate JWT token with user data
    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
}); 

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  // Get token from request headers
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Token is not provided' });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}

// this is tested using postman and passing autherazation header and token as the value to check of the protected the route
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// sample output
// {
//   "message": "Protected route accessed successfully",
//   "user": {
//       "id": 1,
//       "username": "user1",
//       "iat": 1708250180,
//       "exp": 1708253780
//   }
// }