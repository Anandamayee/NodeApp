const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;


const connectionUL = 'mongodb://127.0.01:27017'
const database = 'task-manger';


MongoClient.connect(connectionUL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.error("Unable".error);

    }
    console.log("connected to db");
    const db = client.db(database);
    // db.collection('users').insertOne({
    //     name: "Andy",
    //     age: "26"
    // }, (error, result) => {
    //     if (error)
    //         return console.error("unable to insert");
    //     console.log(result.ops);


    // });

    // db.collection('users').insertMany([
    //     {
    //         name: "Anandamayee",
    //         age: "26"
    //     },
    //     {
    //         name: "Joey",
    //         age: "31"
    //     },
    // ], (error, result) => {
    //     if (error)
    //         return console.error("unable to insert");
    //     console.log(result.ops);
    // });

    db.collection('task').insertMany([
        {
            description:"Read",
            completed:false
        },
        {
            description:"Apply",
            completed:true
        },
        {
            description:"Achive",
            completed:false
        }
    ],(error,result)=>{
        if(error) return console.error("Error occured");
        console.log(result.ops);
        
    })
});