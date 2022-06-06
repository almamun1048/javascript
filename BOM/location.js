
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
     
     <div id="location-div">
        <h1>BOM</h1>
         <p></p>
         <p></p>
         <p></p>
         <butto id="visit" style="border: 2px solid black;">visit</butto>
     </div>

    <script src="main.js"></script>
</body>
</html>
 */

//javascript code
var locationDiv = document.querySelector("#location-div");
var p1 = locationDiv.children[1];
var p2 = locationDiv.children[2];
var p3 = locationDiv.children[3];
var btn = locationDiv.children[6];

p1.textContent = location.href;
p2.textContent = location.protocol;
p3.textContent = location.pathname;

btn.addEventListener('click',function(){
    location.assign("https://www.fb.com");
})

//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
