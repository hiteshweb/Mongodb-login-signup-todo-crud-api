const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get todos for a user
router.get('/:userId', async (req, res) => {
  const todos = await Todo.find({ userId: req.params.userId });
  res.json(todos);
});

// Add todo
router.post('/', async (req, res) => {
  const { text, userId } = req.body;
  const newTodo = new Todo({ text, userId });
  await newTodo.save();
  res.status(201).json(newTodo);
});

// Update todo
router.put('/:id', async (req, res) => {
  const { text } = req.body;
  const updated = await Todo.findByIdAndUpdate(req.params.id, { text }, { new: true });
  res.json(updated);
});

// Delete todo
router.delete('/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
