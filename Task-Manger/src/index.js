const express = require('express');
const app = express();
const User = require('./models/user');
const Task = require('./models/task');
const mongoose = require('./database/mongoose');
const port = process.env.PORT || 3000;
app.use(express.json());
app.post('/users', async (req, res) => {
    let user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user)
    }
    catch (error) {
        res.status(400).send(error);
    }
});
app.get('/users/:name', async (req, res) => {
    try {
        let users = await User.find({ name: req.params.name });
        if (users.length == 0) {
            return res.status(400).send('No data found')
        }
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send(error);
    }
});
app.get('/users', async (req, res) => {
    try {
        let users = await User.find({});
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send(error);
    }
});

app.patch('/users/:id', async (req, res) => {
    try {
        let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if(!user)return res.status(404).send();
        res.send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
})
app.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send();
    }
    catch (e) {
        res.status(400).send(e);
    }
})

app.post('/task', async (req, res) => {
    try {
        let task = new Task(req.body);
        await task.save()
        res.status(201).send(task)
    }
    catch (error) {
        res.status(400).send(error);
    }



});
app.get('/task', async (req, res) => {
    try {
        let tasks = await Task.find({});
        res.status(200).send(tasks)
    }
    catch (error) {
        res.status(500).send(error);
    }
});
app.get('/task/:id', async (req, res) => {
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
app.listen(port)
    .once('listening', () => console.log('Server is up on port ', port))
    .once('error', () => { console.error('Unable to connect'); process.exit(1); })
