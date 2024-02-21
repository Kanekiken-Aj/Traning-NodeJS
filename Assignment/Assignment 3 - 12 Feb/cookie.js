// Save the multiples cookies using the concept of cookies in Node and Express.
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());


app.get('/setcookie', (req, res) => {
    res.cookie('mycookie', 'HelloWorld', { maxAge: 900000, httpOnly: true });
    res.cookie('theme', 'dark', { maxAge: 900000, httpOnly: true });
    res.send('Cookie is set');
});

// Define a route to read the cookie
app.get('/getcookie', (req, res) => {
    const mycookie = req.cookies.mycookie;
    const theme =req.cookies.theme;
    res.send('Value of mycookie: ' + mycookie , theme);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
