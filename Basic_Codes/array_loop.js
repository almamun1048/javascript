//Loop in Array

var numbers = [10,20,30,40,50],sum = 0;

for(var i =0 ; i < numbers.length; i++){
    sum = sum + numbers[i];
    console.log(numbers[i]);
}
console.log("Sum = "+sum);


//Take input from user
var num = new Array(),sum = 0;

for(var i = 0; i < 5 ; i++){
    num[i] = parseInt(prompt("Enter five integer number"));
}
for(var i =0 ; i < 5; i++){
    sum = sum + num[i];
    console.log(num[i]);
}
console.log("Sum = "+sum);