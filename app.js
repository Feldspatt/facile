const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/server');
const usersRouter = require('./routes/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', usersRouter);


// Redirect to link
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
})


module.exports = app;
