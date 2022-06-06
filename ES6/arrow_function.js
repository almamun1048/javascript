
//Arrow function part1
const add = (a,b)=> a+b; 
console.log(add(15,17));


//Arrow function part2
let students = [
   {
      id :101,
      name : "Al Mamun",
      gpa : 2.65
   },
   {
      id :102,
      name : "Mostofa",
      gpa : 3.65
   },
   {
      id :103,
      name : "Kamrul",
      gpa : 3.50
   },
   {
      id :104,
      name : "Nishi",
      gpa : 4.00
   }
]
const studentNames = ()=>students.filter((x)=> x.gpa > 3.5).map((y)=>y.name)
console.log(studentNames());

