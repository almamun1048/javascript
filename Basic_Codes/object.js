
//object

//Single object
var student1 = {
    name : "Al Mamun",
    id : "191-15-1048",
    cgpa : 3.5,
    language : ["Bengali","Hindi","English"],

     func : function(){
          console.log("I am a function");
      }
};
console.log(student1.func());




//Multiple object
//Constructor for create a templete

function Student(name,age,cgpa,lang){
    this.name = name;
    this.age = age;
    this.cgpa = cgpa;
    this.lang = lang;


    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
    }
}

var student1 = new Student("Al Mamun",25,3.5,["Bengali","Hindi","English"]);
var student2 = new Student("Sabbir",26,3.75,["Bengali","Hindi","English","urdhu"]);
var student3 = new Student("Asif",24,3.94,["Bengali","Japanis","Hindi","English"]);

// console.log(student3.name);
// console.log(student2["name"]);

student1.display();
student2.display();
student3.display();
