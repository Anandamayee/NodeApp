// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(a + b)
//         }, 2000)
//     })
// }

// add(1, 2).then(sum => {
//     console.log(sum);
//     add(sum, 5).then(sumq => console.log(sumq))
//         .catch(error1 => console.error(error1));
// })
//     .catch(error => console.error(error));


// add(1,2).then(sum=>{
//     console.log(sum);
//     return add(sum,4)
// }).then(sum1=>{
//     console.log(sum1);
// }).catch(error=>{
//     console.error(error);
// })

const mongoose=require('../src/database/mongoose');
const User=require('../src/models/user');
const Task=require('../src/models/task')


// User.findByIdAndUpdate('5f4d1a252badd855b76bd56a',{age:1})
// .then(data=>{console.log(data)
// return User.countDocuments({age:1})
// }).then(result=>console.log(result))
// .catch(error=>console.error(error));

// Task.findByIdAndDelete('5f4d1c993d290b57fbab3012')
// .then(data=>{
//     console.log(data);
//     return Task.countDocuments({completed:false})
// }).then(result=>console.log(result)
// ).catch(error=>console.error(error)
// )