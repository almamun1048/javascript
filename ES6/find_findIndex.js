
//Array method

let numbers = [13,23,55,34,56,77,89];
//find(callback,value) method return first element on a condition
let firstEvenNumber = numbers.find( x => x%2==0);
console.log(firstEvenNumber);

//findIndex(callback,value) method return first index of value on a condition
let firstEvenNumberIndex = numbers.findIndex( x => x%2==0);
console.log(firstEvenNumberIndex);