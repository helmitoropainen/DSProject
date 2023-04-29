var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const cors = require("cors")

var postRouter = require('./routes/post');

var app = express();

const mongoDB = "mongodb://localhost:27017/codedb"
mongoose.connect(mongoDB)
mongoose.Promise = Promise
const db = mongoose.connection

db.on("error", console.error.bind(console, "MongoDB connection error"))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/post', postRouter);

if (process.env.NODE_ENV === "development") {
    var corsOptions = {
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    }
    app.use(cors(corsOptions))
}

module.exports = app;
