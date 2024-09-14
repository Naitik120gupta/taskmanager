const express = require('express');
const router = express.Router();
const task = require('../models/user');


router.post('/tasks', async (req, res) => {
    const { task_id, title, description, status, due_date, priority } = req.body;
    try {
        const newTask = new Task({
            task_id,
            title,
            description,
            status,
            due_date,
            priority
        });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
});


router.get('/tasks', async (req, res) => {
    const { status, sortBy } = req.query;
    try {
        let query = {};
        if (status) {
            query.status = status;
        }
        let tasks = Task.find(query);

        // Sorting
        if (sortBy) {
            const sortFields = {
                'due_date': 'due_date',
                'created_at': 'created_at',
                'priority': 'priority'
            };
            tasks = tasks.sort({ [sortFields[sortBy]]: 1 });
        }

        const result = await tasks;
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error });
    }
});


router.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
    }
});


router.put('/tasks/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updated_at: Date.now() },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
});

// Delete a task
router.delete('/tasks/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
});

module.exports = router;
