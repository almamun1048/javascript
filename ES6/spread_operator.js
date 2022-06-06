//spred operator

const add = (x,y,...z)=>{
    //rest perameter
    console.log(x);
    console.log(y);
    console.log(z);
}

let numbers = [1,2,3,4,5,6,7,8,9];
add(10,...numbers,11);
//spred operator


//concate by spread operator
let num1 = [1,2,3];
let num2 = [4,5,6];

let num = [...num1,...num2];
console.log(num);

//object concate by spread operator
let p1 = {
    name : "Al Mamun",
    age : 25
}
let p2 = {
    nationality : "Bangladesh",
    Occupation : "Programmer"
}
let p = {...p1,...p2};
console.log(p);