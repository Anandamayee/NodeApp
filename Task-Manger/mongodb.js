const { MongoClient, ObjectId } = require('mongodb');


const connectionUL = 'mongodb://127.0.01:27017'
const database = 'task-manger';

MongoClient.connect(connectionUL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.error("Unable".error);

    }
    const db = client.db(database);
  
});
