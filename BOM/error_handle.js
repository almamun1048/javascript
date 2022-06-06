//error handeling try,catch,throw,finally keyword

try{
    console.log("Hi everyone");
    alert(x);
    console.log("Bye everyone");
}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("Inside finally");
}




try{
   let num = prompt("Enter a value 5 to 10");
    if(num < 5)
    {
        throw `${num} is less than 5`;
    }
    else if(num > 5)
    {
        throw `${num} is greater than 10`;
    }
    else{
        console.log(`${num} is greater than 10`);
    }
}catch(error){
    console.log(error);
}finally{
    console.log("Inside finally");
}