// Condition if else-if else

var marks = parseInt(prompt("Enter your marks :"));

if(marks > 100 || marks < 0)
    console.log("A+");
else if(marks >= 80 && marks < 100)
    console.log("A+");
else if(marks < 80 && marks >= 70)
    console.log("A");    
else if(marks < 70 && marks >= 60)
    console.log("A-");    
else if(marks < 60 && marks >= 50)
    console.log("B");    
else if(marks < 50 && marks >= 40)
    console.log("B+");    
else
    console.log("Fail");