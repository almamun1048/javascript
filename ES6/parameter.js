//default and rest parameter

//default parameter
const message = (m = "Mamun")=>{
    console.log(`Wel come ${m}`)
}
message("Al Mamun");
message();

//Rest Parameter

const sum = (x,y,...z)=>{
    console.log(`x = ${x}\ny = ${y}\nz = ${z}`);
}
sum(10,20,30,40,50,60,70,80);