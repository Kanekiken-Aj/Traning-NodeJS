const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

app.use(cookieParser());


app.get('/setcookie', (req, res) => {
    res.cookie('mycookie', 'HelloWorld', { maxAge: 900000, httpOnly: true });
    res.send('Cookie is set');
});

// Define a route to read the cookie
app.get('/getcookie', (req, res) => {
    const mycookie = req.cookies.mycookie;
    res.send('Value of mycookie: ' + mycookie);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});