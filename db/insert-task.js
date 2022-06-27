const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

const databaseName = "task-manager";
const connectionURL = "mongodb://127.0.0.1:27017";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return "Database connection Failed!";
    }
    console.log("Database connection Success...");
    const db = client.db(databaseName);

    db.collection("tasks").insertMany(
      [
        {
          description: "Wake up at 6'O clock",
          completed: true,
        },
        {
          description: "Learn NodeJS",
          completed: true,
        },
        {
          description: "Have Breakfast",
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log("Unable to insert tasks...");
        }
        console.log("Inserted tasks...");
        console.log(result.ops);
      }
    );
  }
);
