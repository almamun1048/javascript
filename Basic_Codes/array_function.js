
//Array Related methods

var names = ["Al Mamun","Sabbir","Asif","Rofiq","shofiq","jobbor"];
//shift -> First element remove from array
names.shift();
console.log(names);

//unshift -> add a element as a first element of array
names.unshift("Kamrul");
console.log(names);

//splice -> add and remove element by index position
names.splice(2,0,"Poresh","Imran");
//2 for index position,0 for how many values remove,then add one or multiple value
console.log(names);

names.splice(2,4,"abul","babul");
console.log(names);

//remove by index numbers
names.splice(0,2);
console.log(names);

//slice
var newArray = names.slice(1,3);//from idex value and last index value 
console.log(newArray);

//sorted array
var sortedArray = names.sort();
console.log(sortedArray);
//reverse
var sortedReverse = names.reverse();
console.log(sortedReverse);

//sort of numbers
var numberss = [20,5,25,45,1];
numberss.sort(function(a,b){
    return a-b;
});
console.log(numberss);
//reverse of numbers
var numberss = [20,5,25,45,1];
numberss.sort(function(a,b){
    return b-a;
});
console.log(numberss);


// push pop function

var namesThree = ["Habiba","Mahfuza","Khadija","Rahima"];
//push -> add a element of array as a last element
namesThree.push("Al-Mamun");
namesThree.push("Ibrahim");
namesThree.push("Ismail");
console.log(namesThree);
console.log(namesThree.length);
console.log(namesThree[2]);
//pop -> remove last element of array
namesThree.pop();
console.log(namesThree);


//concatetion of arrays using concat function
var country1 = ["Bangladesh","India"];
var country2 = ["Pakistan","Nepal"];

var country = country1.concat(country2);
console.log(country);