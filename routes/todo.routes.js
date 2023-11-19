const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();


// let data = [{ item: "Buy Milk" }, { item: "Walk Dog" }, { item: "Write Code" }];

router.get("/", (req, res) => {
    Todo.find().sort({createdAt : -1})
    .then((data) => {
        res.render("todo", { todos: data });
    }).catch((err) => console.log(err));
});

router.post("/", (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
    .then((data) => {
        res.redirect('/todo');
    })
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {

  Todo.findByIdAndDelete(req.params.id)
  .then((data) => {
    res.json({ redirect: '/todo'});
  }).catch(err => console.log(err));
});

module.exports = router;
