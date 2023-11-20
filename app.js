const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todo.routes');

const app = express();

// mongoDB connection and port listening
const dbURI = 'mongodb+srv://blogapp:blog123@blogappdb.spncqqr.mongodb.net/todo-listdb?retryWrites=true&w=majority';
mongoose.connect(dbURI)
.then((result) => {
    console.log('DB is connected');
    app.listen(3000, () => console.log('listening to http://localhost:3000'));
})
.catch((err) => console.log(err.message));

// templates engine
app.set('view engine', 'ejs');

// static files & middlewares
app.use(express.static('./public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// todo routes

app.use('/todo', todoRoutes);

