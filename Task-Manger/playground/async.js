const mongoose = require('../src/database/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');


// const add = (a, b) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(a<0)reject('+ve')
//             resolve(a + b)
//         }, 2000)
//     })
// }

// const dowork=async ()=>{
//     let sum=await add(1,-2);
//     const sum2=await add(sum,3);
//     return sum2
// }

// dowork().then(result=>console.log(result))
// .catch(error=>console.error(error));

const updateAge = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    let count = await User.countDocuments({ age });
    return count;

}

updateAge('5f4d1a252badd855b76bd56a', 27).then(result => console.log(result))
    .catch(error => console.error(error));

