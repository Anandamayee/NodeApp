const express = require('express');
const Task = require('../models/task');
const router=new express.Router();


router.post('/task', async (req, res) => {
    try {
        let task = new Task(req.body);
        await task.save()
        res.status(201).send(task)
    }
    catch (error) {
        res.status(400).send(error);
    }



});
router.get('/task', async (req, res) => {
    try {
        let tasks = await Task.find({});
        res.status(200).send(tasks)
    }
    catch (error) {
        res.status(500).send(error);
    }
});
router.get('/task/:id', async (req, res) => {
    try {
        let _id = req.params.id;
        let task = await Task.findById(_id);
        if (!task) return res.status(400).send('No task found')
        res.status(200).send(task)
    }

    catch (error) {
        res.status(500).send(error);
    }

});

module.exports=router;