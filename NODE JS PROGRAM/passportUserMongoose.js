const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');


const app = express();

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

//connect to mangodb
mongoose.connect('mongodb://localhost:27017/passport_auth')
mongoose.connection.on('error',console.error.bind(console,'MongoDB connection error:'));

// body pareser middleware

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(passport.initialize())
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.post('/register',(req,res)=>{
    const {username,password}= req.body;
    User.register(new User({username}),password,(err,user)=>{
        if(err){
            return res.status(500).json({error: err.message})
        }
        res.json({message: 'Registration successful'});
    })
})

app.post('/login',passport.authenticate('local'),(req,res)=>{
    res.json({message: 'Login Successfully'})
})

app.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({ error: 'Logout failed' });
        }
        res.json({ message: 'Logged out successfully' });
    });
});



const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Server is runnning at Localhost://${PORT}`)
})



