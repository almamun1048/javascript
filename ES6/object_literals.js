//Object Literal

const studentInfo1 = (name,age)=>{
    return {
        // name : name,
        // age : age
        name,
        age
    }
}

console.log(studentInfo1("Al Mamun",25));

//consize method

let message = {
    // body : ()=>{
    //     return "Hi i am object function";
    // }
    body(){
        return "Hi i am object function";
    },
    //another way
    'body name'(){
        return "function name with space";
    }
}

console.log(message.body());
console.log(message['body name']());