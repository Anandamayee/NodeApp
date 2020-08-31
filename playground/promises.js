// const doWorkCallback=(callback)=>{
//     setTimeout(()=>{
//         // callback("this is error",undefined)
//         callback(undefined,11)
//     },2000)
// }

// doWorkCallback((error,result)=>{
//     if(error) return console.log(error);
//     console.log(result);
    
// })


const doworkPromises=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject("error")
        resolve("done")
    },2000)
})
doworkPromises.then((res)=>{
console.log(res);

}).catch((error)=>{
console.log(error);

})