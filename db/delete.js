const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017", {useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log("Unable to connect to Database");
    }
    console.log("Database connected...");
    const db = client.db("task-manager");
    db.collection('tasks').deleteMany(
        {
            description:"Wake up at 6'O clock"
        }
    ).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
})