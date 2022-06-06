
//forEach,map,filter

//map
let numbers = [10,20,30,40,50];
let squareNumbers = numbers.map((x)=>{
   return x*x;
});
console.log(squareNumbers);

//filter
let numbers2 = [10,20,30,40,50];
let newNumbers = numbers2.filter((x)=>{
   return x>20;
});
console.log(newNumbers);