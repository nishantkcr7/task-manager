const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

MongoClient.connect("mongodb://127.0.0.1:27017", {useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log("Unable to connect to database.");
    }
    const db = client.db("task-manager");

    // db.collection("users").findOne({age:22}, (error, data)=>{
    //     if(error){
    //         return console.log("Data Not Found");
    //     }
    //     console.log(data);
    // });

    // db.collection("tasks").find({completed:true}).toArray((error, data)=>{
    //     console.log(data);
    //     console.log(data.length)
    // });

    //finding task which was last completed.

    db.collection("tasks").findOne({_id: new ObjectID("62b91726f0b2b364176f0cf3")}, (error, task)=>{
        if(error){
            return console.log("Data Not Found");
        }
        console.log(task);
    })
})