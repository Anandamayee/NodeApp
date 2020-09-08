const mongoose = require('mongoose');
const validator=require('validator');


const connectionUL = 'mongodb://127.0.01:27017/task-manger-api'

mongoose.connect(connectionUL, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim:true
    },
    age: {
        type: Number,
        default:0,
        validate(value){
            if(value<0) throw new Error('Age must be a positive number.')
        }
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error('Please enter a valid email');
        }
    },
    password:{
        type:String,
        required:true,
        maxlength:15,
        minlength:8,
        validate(value){
            let reg=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if(!reg.test(value))  throw new Error('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character: ')
        }

    }
})


// const me = new User({
//     name: 'Mike',
//     age : 20,
//     email : 'mike@sdf.com'
// });

// const me = new User({
//     name: '   Andy    ',
//     // age : 20,
//     email : '   Mike@sdf.com   '
// });

// const me = new User({
//     name: '   Andy    ',
//     // age : 20,
//     email : '   Mike@sdf.com   ',
//     password:"aaAAA12Wsd"
// });

// me.save().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.error(error);
// })


// const Test=mongoose.model('Task',{
//     description :{
//         type :String
//     },
//     completed :{
//         type:Boolean
//     }
// });

// const tasks=new Test(
//     {description:'read',completed:false}
// );

// tasks.save().then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.error(error);
// });