
//html code

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>drag event</title>
</head>
<body>

    <div>
        <div id="div1"></div>
        <p id="drag1" draggable="true">I am dragable p tag</p>
    </div>

    <script src="day12_1.js"></script>
</body>
</html>
*/


//javascript code
//drag event
var div = document.getElementById("div1");
var p = document.getElementById("drag1");

p.addEventListener('dragstart',function(e){
e.dataTransfer.setData('Text',e.target.id);
})

div.addEventListener('dragover',function(e){
e.preventDefault();
})

div.addEventListener('drop',function(e){
let id = e.dataTransfer.getData('Text');
div.appendChild(document.getElementById(id));
div.style.padding = "20px";
div.style.fontSize = "30px";
div.style.color = "white";
div.style.fontWeight = "bold";
e.preventDefault();
})



//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
//div style
div.style.height = "300px";
div.style.width = "300px";
div.style.backgroundColor = "crimson";
