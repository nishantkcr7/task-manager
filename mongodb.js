const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const connectionUlr = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUlr, {useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log("Unable to connect database!");
    }
    console.log("Database Connection Success...");
    const db = client.db(databaseName);
    db.collection('users').insertOne({
        name:'Anuja Ajay',
        age:19
    }, (error, success)=>{
        if(error){
            return console.log("Unable to Insert");
        }
        if(success.acknowledged){
            console.log("Inserted! ", success.insertedId);
        }
    })
});