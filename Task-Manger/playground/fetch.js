const { MongoClient, ObjectId } = require('mongodb');


const connectionUL = 'mongodb://127.0.01:27017'
const database = 'task-manger';

MongoClient.connect(connectionUL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.error("Unable".error);

    }
    const db = client.db(database);
    // db.collection('users').findOne({_id:new ObjectId('5f48d7a9e6f06b409e7f72ec')},(error,user)=>{
    //     if(error)return console.error("somthing went wrong");
    //     else if(user === null) return console.log("No data found")
    //     console.log(user);
    // });

    //returns a curser - pointer to actual data 

    // db.collection('users').find({ name: 'Andy' }).toArray((error, users) => {
    //     if (error) return console.error("somthing went wrong");
    //     else if (users === null) return console.log("No data found")
    //     console.log(users);
    // });
    // db.collection('users').find({ name: 'Andy' }).count((error, count) => {
    //     if (error) return console.error("somthing went wrong");
    //     else if (count === null) return console.log("No data found")
    //     console.log(count);
    // });

    db.collection('task').findOne({_id:new ObjectId("5f48e463c9d4ce47d545d9bb")},(error, task) => {
            if (error) return console.error("somthing went wrong");
            else if (task === null) return console.log("No data found")
            console.log(task);
        });

    db.collection('task').find({completed:false}).toArray((error, tasks) => {
        if (error) return console.error("somthing went wrong");
        else if (tasks === null) return console.log("No data found")
        console.log(tasks);
    });
});
