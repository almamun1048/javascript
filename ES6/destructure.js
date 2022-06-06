//destructure

//Array destructure
let numbers = [10,20,30,40,50];
let[num1,num2,num3,num4,num5] = numbers;
let[n1,...z] = numbers;
console.log(num1);
console.log(z);



//swap variables
let a =10, b= 20;
[a,b] = [b,a];
console.log(`a = ${a}\nb = ${b}`);



//object destructure
const studentsInfo = {
   id : 101,
   fullName : "Al Mamun",
   gpa : 3.92
}
const {id,fullName} = studentsInfo;
//console.log(studentsInfo.fullName);
console.log(fullName);





//nested object destructure
const teachersInfo = {
   id : 1048,
   name : "Anisul Islam",
   cgpa : 3.92,
   language : {
      native : "Bangla",
      beginner : "English"
   }
}

const {name,cgpa,language} = teachersInfo;
console.log(language.native);




//function parameter destructure
const parentsInfo = ({name,age})=>{
   console.log(`${name},${age}`)
}

const parent = {
   name : "Monjila Begum",
   aeg : 45
}
parentsInfo(parent);
