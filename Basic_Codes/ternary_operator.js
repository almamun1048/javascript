//ternary operator

//find positive negative or zero
var number = parseInt(prompt("Enter Your Number :"));
var result = number == 0 ? "Zero<br/>" : number > 0 ? "Positive<br/>" : "Negative<br/>";
document.write(result);

//find largest value
var a=5,b=7,c=6,resultt;
var resultt = a > b && a > c ? "a is largest" : b > a && b > c ? "b is largest" : "c is largest";
document.write(resultt);