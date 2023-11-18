const express = require('express');
const todoController = require('./controllers/todo.controller');

const app = express();
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({extended:true}))
// templates engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
todoController(app);

// listening to port
app.listen(port, () =>{
    console.log(`Listening to http://localhost:${port}`);
});

