const express = require('express');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy // name of the class which define the strategy of the name and password
const session = require('express-session')
const flash = require('express-flash')
// npm install passport, passport-local, express-flash
const app = express();

// setup the session middleware

app.use(session({secret:'your-code-key', resave:false,saveUninitialized: false}));

app.use(flash());
// should be connected to username and password

// initialize passport and restore authentication state, if any , from the session.
app.use(passport.initialize());// we are initializing the passport
app.use(passport.session());//if any session is activated or not

//set up your local strategy for passport

passport.use(
    new LocalStrategy((username,passport,done)=>{
        //replace this with your actual authentication logic
        if(username === 'user' && passport === 'password'){
            return done(null,{id: 1, username:'user'})
        }else{
            return done(null, false,{message:' Incorrect usernamr or password'})
        }
    })
);

// serialized user information to store in the session
passport.serializeUser((user, done)=>{
    done(null, user.id)
});

passport.deserializeUser((id,done)=>{
    //replace this with your actual user retrieval logic
    const user ={ id:1, username: 'user'};
    done(null, user);
})

app.get('/',(req,res)=>{
    res.send('Home Page');
});

app.get('/',(req,res)=>{
    res.send('Login Page')
})

app.post('/login',passport.authenticate('local',{
    successRedirect:'/dashboard',
    failureRedirect:'/login',
    failureFlash:true
}))

app.get('/dashboard', isAuthenticted, (req,res)=>{
    res.send(`Welcome, ${req.user.username}!`)
})

//logout route

app.get('/logout',(req,res)=>{
    req.logOut();
    res.redirect('/');

});

// middleware to check the user is authenticated

function isAuthenticted(req, res, next){
    if(req.isAuthenticted()){
        return next();
    }
    res.redirect('/login')

}

//start the server

const PORT = 6000

app.listen(PORT,()=>{
    console.log(`Server is running at: localhost://${PORT}`)
})