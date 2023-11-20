const Todo = require('../models/todo');

const todo_get = (req, res) => {
    Todo.find().sort({createdAt : -1})
    .then((data) => {
        res.render("todo", { todos: data });
    }).catch((err) => console.log(err));
};

const todo_post = (req, res) => {
    const todo = new Todo(req.body);
    todo.save()
    .then((data) => {
        res.redirect('/todo');
    })
    .catch(err => console.log(err));
};

const todo_delete = (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
    .then((data) => {
      res.json({ redirect: '/todo'});
    }).catch(err => console.log(err));
  };

module.exports = {
    todo_get,
    todo_post,
    todo_delete
};