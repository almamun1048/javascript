//IIFEs(Immediately Invokeable Function Expression)

//at first function create then call automaticly
(function display(message){
    console.log(message);
})("Hello");

//add two number
(function add(a,b){
    console.log(a+b);
})(5,5);


//Function Expressions
var displayTwo = function displayMessage(msg){
    console.log(msg);
};
// a variable can contain a function and thats call function expression
displayTwo("Hi I am Message");