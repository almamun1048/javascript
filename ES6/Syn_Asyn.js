//Syncronous and Asyncronous

//default syncronous
//do complete first work then move next work
const taskOne = ()=>{
    console.log("Test1");
}
const taskTwo = ()=>{
    //Asyncrononus function
    setTimeout(()=>{
        console.log("Test2")
    },2000)
}
const taskThree = ()=>{
    console.log("Test3");
}
const taskFour = ()=>{
    console.log("Test4");
}
const taskFive = ()=>{
    console.log("Test5");
}

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();


