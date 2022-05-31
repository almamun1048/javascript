// Libery Function for string


//use of "length function"
var text1 = "Bangladesh";
console.log("Number of Character : " + text1.length);
document.write("Number of Character : " + text1.length);

//take input from user by "prompt function"
var text2 = prompt("Enter Your Name : ");
console.log("Number of Character : " + text2.length);
document.write("Number of Character : " + text2.length);

//print value of 2 index of a String by "charAt function"
var text3 = "Bangladesh";
console.log(text3.charAt(2));
document.write(text3.charAt(2));

//convert upercase by "toUpperCase function"
var text4 = "Bangladesh";
text4 = text4.toUpperCase();
console.log(text4);
document.write(text4);

//convert lowercase by "toLowerCase function"
var text5 = "Bangladesh";
text5 = text5.toLowerCase();
console.log(text5);
document.write(text5);

//concate by "concate function"
var text6 = "Bangladesh";
var text7 = " is a beautiful country";
var text8 = text6.concat(text7);
document.write(text8);

//slice function
var text9 = "Bangladesh";
var text10 = text9.slice(0,3);
document.write(text10);

