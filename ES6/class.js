
//class

class Student{

    constructor(id,name){
        this.id = id;
        this.name = name;
    }

    set StudentName(name){
        this.name = name;
    }

    get StudentInfo(){
        return this.id + " "+ this.name;
    }
}
let s1 = new Student(1048,"Al Mamun");
console.log(s1);
console.log(s1.name);
s1.StudentName = "Al Mamun Mridha";
console.log(s1.name);
console.log(s1.StudentInfo);