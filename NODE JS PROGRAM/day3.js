//  task schema.. models../ router .. task.js

const express = require('express');
const mongoose  = require('mongoose');
const bodyparser = require('body-parser');
// const router = require('./routes/task')
const form = require('./routes/form')

const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(bodyparser.json());

// mongoose.connect('mongodb://localhost:27017/technology',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })



mongoose
  .connect("mongodb://localhost:27017", {
    // dbName: "task-Manager",
    dbName: "User-data"

  })
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed");
  });

  // app.use('/api', router)
  app.use('/api', form)





  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:4000`);
  });