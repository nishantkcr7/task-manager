const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const ObjectId = mongodb.ObjectId;

MongoClient.connect("mongodb://127.0.0.1:27017", {useNewUrlParser:true}, (error, client)=>{
    if(error){
        return console.log("Database connection failed...");
    }
    console.log("Database connected...");
    const db = client.db("task-manager");
    // const updatePromise = db.collection("users").updateOne(
    //     {
    //         _id: new ObjectId("62b976f6d3611898fa589777")
    //     },
    //     {
    //         $inc: {
    //             age:+1
    //         }
    //     }
    // );
    // updatePromise.then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    db.collection('tasks').updateMany(
        {
            completed: false
        },
        {
            $set: {
                completed:true
            }
        }
    ).then((success)=>{
        console.log(success);
    }).catch((failed)=>{
        console.log(failed);
    })
});