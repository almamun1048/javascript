//why need "use strict"
const add2 = (num1,num2)=>{
    //without let var const it is working
     sum = num1 + num2;
     console.log(`${num1} + ${num2} = ${sum}`);
 }
 add2(5,6);


'use strict'
//without variable declear it will never do work
//function
const add1 = (num1,num2)=>{
   let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}
add1(5,6);
