const mongoose = require('mongoose');


const connectionUL = 'mongodb://127.0.01:27017/task-manger-api'

mongoose.connect(connectionUL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })


// const me = new User({
//     name: 'Andy',
//     age: "ABC"
// });

// me.save().then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.error(error);
// })

const Test=mongoose.model('Task',{
    description :{
        type :String
    },
    completed :{
        type:Boolean
    }
});

const tasks=new Test(
    {description:'read',completed:false}
    
)

tasks.save().then(data=>{
    console.log(data);
}).catch(error=>{
    console.error(error);
    
})