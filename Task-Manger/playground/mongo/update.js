const { MongoClient, ObjectId } = require('mongodb');


const connectionUL = 'mongodb://127.0.01:27017'
const database = 'task-manger';

MongoClient.connect(connectionUL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.error("Unable".error);

    }
    const db = client.db(database);

    // db.collection('users').updateOne({
    //     _id: new ObjectId('5f48d7a9e6f06b409e7f72ec')
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then(data => {
    //     console.log(data);

    // }).catch(error => {
    //     console.error(error);

    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectId('5f48d7a9e6f06b409e7f72ec')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then(data => {
    //     console.log(data);

    // }).catch(error => {
    //     console.error(error);

    // })

    // db.collection('task').updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then(data => {
    //     console.log(data);

    // }).catch(error => {
    //     console.error(error);

    // })
    db.collection('task').updateMany({completed:true}, {
        $set: {
            completed: false
        }
    }).then(data => {
        console.log(data);

    }).catch(error => {
        console.error(error);

    })

});
