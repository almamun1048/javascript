// 1.Downwards
//     1.querySelector()/querySelectorAll()
//     2.children

// 2.Upwards
//     1.parentElement
    
// 3.Sideways
//     1.nextElementSibling,previousElementSibling
//     2.parentElement + children + index


/*
//html code

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selector</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <ol class="students-list">
        <li class="student-a">Student-A</li>
        <li class="student-b">Student-B</li>
        <li class="student-c">Student-C</li>
    </ol>

    <script src="main.js"></script>
</body>
</html>

*/



const studentsList = document.querySelector(".students-list");
const studentA = studentsList.querySelector(".student-a");
const studentB = studentsList.children[1];


const studentC = document.querySelector("student-c");
const StudentList = studentC.parentElement;


const student1 = document.querySelector("li");
const student2 = student1.nextSibling;
const student3 = student2.nextSibling;


const stuC = document.querySelectorAll("li")[2];
const stuB = stuC.previousElementSibling;


const stdA = document.querySelector("li");
const stdList = stdA.parentElement;
const stdC = stdList.children[2];


