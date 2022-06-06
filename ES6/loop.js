//for....of , for...in , forEach

//for of
const names = ["n1","n2","n3","n4","n5"];

for(let name of names){
   console.log(name);
}


// object iterate by for in
let students = {
    id : 1048,
    name:"Al Mamun",
    cgpa : 3.25
}
for(let x in students){
   console.log(`${x} : ${students[x]}`);
}

//for each
let numbers = [10,20,30,40,50];
let squareNumbers = [];
numbers.forEach((x)=>{
   console.log(x);
   squareNumbers.push(x*x);
});
console.log(squareNumbers);

//Three Perameter
let newNmbers = [10,20,30,40,50];
newNmbers.forEach((x,index,mainArray)=>{
    mainArray[index] = x + 5;
});
console.log(newNmbers);