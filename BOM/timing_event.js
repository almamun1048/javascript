
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
         <button class="save">Save</button>
         <p class="message1"></p>
         <p class="message2"></p>
     </div>

    <script src="day13_3.js"></script>
</body>
</html>
*/

//javascript code

//Timing events methode

//setTimeout
setTimeout(() => {
   console.log("Welcome Message") 
}, 2000);
setTimeout(display, 5000);
function display(){
    console.log("Good Bye")
}



var btn = document.querySelector(".save");
var message1 = document.querySelector(".message1");
var message2 = document.querySelector(".message2");

btn.addEventListener('click',saveUser);
function saveUser(){
    message1.textContent = "Your Registration Done";
    setTimeout(()=>{
        message1.textContent = '';
    },2000)
}


//setinterval
btn.addEventListener('click',displayCount);
function displayCount(){
    let count = 0;
    message2.textContent = count;

    setInterval(()=>{
        count++;
        message2.textContent = count;
    },1000)
}

//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
