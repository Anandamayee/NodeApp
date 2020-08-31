const { MongoClient, ObjectId } = require('mongodb');


const connectionUL = 'mongodb://127.0.01:27017'
const database = 'task-manger';

MongoClient.connect(connectionUL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.error("Unable".error);

    }
    const db = client.db(database);

    db.collection('users').deleteOne({ "_id": ObjectId("5f48d950096ba741a0ea00f5") }).then(data => console.log(data)).catch(error => console.error(error));
    db.collection('users').deleteMany({ "age": 27}).then(data => console.log(data)).catch(error => console.error(error));


});
