const express = require('express')
const bodyparser = require('body-parser')
const bycrypt = require('bcryptjs')

const app = express();
const PORT = process.env.PORT | 8000;

app.use(bodyparser.json());

// database to stimulate user data
let users=[];

// Registration endpoint
app.post('/register',async(req,res)=>{
    try {
        // Hash the password
        const hashedPassword = await bycrypt.hash(req.body.password,10);
        // create  a new user object
        const user ={ username: req.body.username,password: hashedPassword};

        // Push the user object into the users array
        users.push(user);
        // res.json(users)
        res.send("user registered successfully")
       
    } catch (error) {
        res.send("An error occurred while registering the user.")
    }
    
})


app.post('/login',async(req,res)=>{
    const user = await users.find(user => user.username === req.body.username)
    console.log(user)
   if(user == null){
    return res.send('user not found');
   }
   try {
    if(await bycrypt.compare(req.body.password, user.password)){
        res.send('Login Successful')
    }else{
        res.send('Invalid username or password')
    }
   } catch (error) {
    res.send('An error has occured while loggin in')
   }
    
    
});



app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})