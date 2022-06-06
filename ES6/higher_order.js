//callback and higher order function
const square = (x)=>{
    console.log(`Square of x : ${x*x}`);
}

// const y = square;
// y(5);

// function higherOrder(num,calllback){
//     calllback(num);
// }
// higherOrder(6,square)



//details of callback and higherOrder function

const taskOne = (callback)=>{
    console.log("Test1");
    callback();
}

const taskTwo = (callback)=>{
    setTimeout(()=>{
        console.log("Test2")
        callback();
    },2000);
}

const taskThree = (callback)=>{
    console.log("Test3");
    callback();
}

const taskFour = (callback)=>{
    console.log("Test4");
    callback();
}

const taskFive = ()=>{
    console.log("Test5");
}

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive();
            })
        })
    })
})


