
//html code

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>style</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div>
    <!-- input type text -->
    <label for="name">Name: <input type="text" name="name" class="name-input" id="name-input"> </label>

    <!-- input type checkbox -->
    <div class="checkBox">
        <label for="pl">C <input type="checkbox" name="program" class="ch" id="ch1" value="C"> </label>
        <label for="pl">Java <input type="checkbox" name="program" class="ch" id="ch2" value="Java"> </label>
        <label for="pl">Pythone <input type="checkbox" name="program" class="ch" id="ch3" value="Pythone"> </label>
    </div>

    <!-- for select tag -->
    <select name="" id="department">
        <option value="cse">CSE</option>
        <option value="eee">EEE</option>
        <option value="mct">MCT</option>
    </select>
</div>
    <script src="day11_1.js"></script>
</body>
</html>
*/


//change event
//<input>,<select>,<textarea>

//input type text
var input = document.querySelector("input[name=name]");
input.addEventListener("change",function(e){
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
    console.log(e.target.id);
    console.log(e.target.value);
});


//input type checkbox
var checkBoxs = document.querySelectorAll("input[name=program]");
    //nodeList
    console.log(checkBoxs);
    //Convert NodeList to Array
    Array.from(checkBoxs).map((program)=>{
    program.addEventListener('change',function(e){
    if(e.target.checked){
        console.log(e.target.value);
    }
})
});

//for select tag
var department = document.querySelector("#department");
department.addEventListener("change",selectHandeler);
function selectHandeler(e){
    console.log(e.target.value);
}




//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
