// create CRUD operation using Node and Express with fields like firstname, lastname, email, password, age.
const express = require('express');
const app = express();
const PORT = process.env.PORT || 6000;
app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

// existing users
app.get('/users', (req, res) => {
  res.json(users);
});

// finding user
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === id);
  if (!user) {
    return res.json({ message: 'User not found' });
  }
  res.status(200).json(user);
});

//updating
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const updateUser = req.body;
  let found = false;
  users = users.map(user => {
    if (user.id === id) {
      found = true;
      return { ...user, ...updateUser };
    }
    return user;
  });
  if (!found) {
    return res.json({ message: 'User not found' });
  }
  res.json({ message: 'User updated successfully' });
});

// Delete user
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  users = users.filter(user => user.id !== id);
  res.json({ message: 'User deleted successfully' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
