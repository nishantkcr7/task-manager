const express = require("express");
const chalk = require("chalk");

const port = process.env.PORT || 3000;

const app = express();
require("../db/mongoose");

const User = require("../model/user");
const Tasks = require("../model/task");
console.log(User.find({}))
app.use(express.json());


app.post("/add-user", (req, res) => {
  const user = User(req.body);

  user
    .save()
    .then(() => {
      console.log(chalk.green.inverse.bold("user added."));
      res.send(user);
    })
    .catch((e) => {
      console.log(chalk.inverse.red.bold("User not added"));
      res.status(400);
      res.send(e);
    });
});
app.post("/add-task", (req, res) => {
  const task = new Tasks(req.body);
  task
    .save()
    .then(() => {
      console.log(chalk.bold.inverse.green("Task Inserted"));
      res.send(task);
    })
    .catch((e) => {
      console.log(chalk.bold.inverse.red("Task Not Inserted"));
      res.status(400);
      res.send(e);
    });
});

app.get('/get-user', (req, res)=>{
    console.log(req.body);
    User.find({}).then((users)=>{
        res.send(users)
    }).catch(e=>{
        res.status(500);
        res.send({"message":"Server Down"});
    })
})

app.get('/find-user/:id', (req, res)=>{
    const userId = req.params.id;
    User.findById(userId).then((user)=>{
        if(!user){
            return res.status(400).send()
        }
        res.send(user);

    }).catch(e=>{
        res.send(e);
    })
})

app.get('/get-task', (req, res)=>{
    const task = new Tasks();
    Tasks.find({}).then((task)=>{
        res.send(task)
    }).catch((e)=>{
        res.send(e);
    })
})

app.get("/gettaskById/:id", (req, res)=>{
    const _id = req.params.id;
    Tasks.findById(_id).then((tasks)=>{
        res.send(tasks);
    }).catch(e => {
        res.send(e);
    })
})

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
