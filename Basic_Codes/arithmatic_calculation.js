//Arithmatic operator (+,-,*,/,%,**(exponent))
console.log(3+2);
console.log(3-2);
console.log(3*2);
console.log(3/2);
console.log(3%2);
console.log(3**2);


//Assignment Operator (=,+=,-=,*=,/=,%=,**=)
var x = 5;
x+=5;//x = x + 5
console.log(x);

//addition
var a = 5;
var b = 10;
var sum = a + b;
document.write("Sum : "+ sum + "<br/>");
//subtraction
var a = 15;
var b = 10;
var sub = a - b;
document.write("Sub : "+ sub + "<br/>");

//Multiplication
var num1 = prompt("Enter first number :");
var num2 = prompt("Enter second number :");
parseInt(num1,10)// 10 for decimal number
parseInt(num2,10)// 10 for decimal number
document.write("Multiplication : "+ num1*num2);