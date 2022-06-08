
//how to create a promise-panding,resolve,reject

const promise1 = new Promise((resolve,reject)=>{
    let completedPromise = false;
    if(completedPromise){
        resolve('completed promise 1');
    }else{
        reject("no completed promise 1");
    }
});

const promise2 = new Promise((resolve,reject)=>{
    resolve("Completed promise2");
})

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Completed promise3");
    },2000)
})
const promise4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Completed promise4");
    },1000)
})
console.log(promise1);


promise1.then((res) =>{
    console.log(res);
}).catch((err) => {
    console.log(err)
})


promise2.then((res)=>{
    console.log(res);
})


//call promise together
Promise.all([promise1,promise2]).then((res)=>{console.log(res)})
//call promise with destructure
Promise.all([promise1,promise2]).then((res1,res2)=>{console.log(res1,res2)})
//call promise by race
Promise.race([promise3,promise4]).then((res)=>{console.log(res)})

console.log("End");