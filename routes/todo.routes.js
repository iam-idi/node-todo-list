const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.controller');

router.get("/", controller.todo_get);

router.post("/", controller.todo_post);

router.delete("/:id", controller.todo.delete);

module.exports = router;
