const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api",
{
    useNewUrlParser:true,
    useCreateIndex:true
});

const Users = mongoose.model('Users',{
    name: {
        type:String
    },
    age: {
        type: Number
    }
})

const me = new Users({
    name: 'Nishant',
    age: 22
})

me.save().then(()=>{
    console.log(me);
}).catch((error)=>{
    console.log(e);
})