
//html code

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>style</title>
    <link rel="stylesheet" href="">
</head>
<body>
   
    <h1 class="heading">You have not clicked</h1>

    <button class="myButton">Button 1</button>
    <button class="myButton">Button 2</button>
    <button class="myButton">Button 3</button>

    <script src=""></script>
</body>
</html>
*/

//javascript code

var heading = document.querySelector(".heading");
var len = document.querySelectorAll(".myButton").length;

for(var i = 0 ; i < len ; i++){
document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    heading.innerHTML = text + " is clicked";

})
}

