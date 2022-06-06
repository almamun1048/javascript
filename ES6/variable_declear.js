//ES6

//variable declear
let radious,area;
const pi = 3.1416;

radious = parseInt(prompt("Enter radious :"));
area = pi*radious*radious;
//print area
console.log(`Area of Circle = ${area}`);

//function
const add = (num1,num2)=>{
   let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}
add(5,6);