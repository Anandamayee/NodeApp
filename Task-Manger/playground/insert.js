// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID=mongodb.ObjectID;

const {MongoClient,ObjectId}=require('mongodb');


const connectionUL = 'mongodb://127.0.01:27017'
const database = 'task-manger';

const id=new ObjectId();
console.log(id.id.length);
console.log(id.toHexString().length);



MongoClient.connect(connectionUL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.error("Unable".error);

    }
    // const db = client.db(database);
    // db.collection('users').insertOne({
    //     name: "Arya",
    //     age: "26",
    //     _id:id
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

    // db.collection('task').insertMany([
    //     {
    //         description:"Read",
    //         completed:false,
    //     },
    //     {
    //         description:"Apply",
    //         completed:true
    //     },
    //     {
    //         description:"Achive",
    //         completed:false
    //     }
    // ],(error,result)=>{
    //     if(error) return console.error("Error occured");
    //     console.log(result.ops);
    // })
});
