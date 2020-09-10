const express = require('express');
const User = require('../models/user');
const router=new express.Router();


router.post('/users', async (req, res) => {
    let user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user)
    }
    catch (error) {
        res.status(400).send(error);
    }
});

router.post('/users/login',async(req,res)=>{
    try{
        let user=await User.findByCredentials(req.body);
        res.send(user)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.get('/users/:name', async (req, res) => {
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
router.get('/users', async (req, res) => {
    try {
        let users = await User.find({});
        res.status(200).send(users)
    }
    catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/users/:id', async (req, res) => {
    try {
        let user=await User.findById(req.params.id);

        if(!user)return res.status(404).send();
        Object.keys(req.body).forEach(key=>
        user.toJSON().hasOwnProperty(key) ? user[key]=req.body[key] : null)
        await user.save({validateModifiedOnly:true});
        // let user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
})
router.delete('/users/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send();
    }
    catch (e) {
        res.status(400).send(e);
    }
});



module.exports=router;