
//html code

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>style</title>
    <link rel="stylesheet" href="day10_6.css">
</head>
<body>
    <div>

        <textarea class="textField" name="" id="" cols="20" rows="5"></textarea>
        <h1 class="heading">Letter press :</h1>
        <h1 class="heading2">Total Letter :</h1>
    
        <button class="myButton a">a</button>
        <button class="myButton b">b</button>
        <button class="myButton c">c</button>

    </div>
    <script src="day10_6.js"></script>
</body>
</html>
*/

//css code

/*
body{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8b8888;
}

.myButton{
    padding: 5px;
    background-color: rgba(182, 35, 174, 0.356);
    color: white;
    font-size: 2rem;
    font-weight: 500;
    width: 80px;
    margin: 5px;
}

.textField{
    font-size: 40px;
}
.shadow{
    box-shadow: 0px 0px 100px rgb(231, 22, 22);
}
*/

//javascript code

//select elements
var heading = document.querySelector(".heading");
var heading2 = document.querySelector(".heading2");
var textField = document.querySelector(".textField");


//click event by for loop
for(var i = 0 ; i < 3 ; i++){
document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
var text = this.innerHTML;
    
playAnimation(text);

    switch(text){
        case "a":
            var audio = new Audio("sounds/a.wav");
            audio.play();
            break;

        case "b":
            var audio = new Audio("sounds/b.wav");
            audio.play();
            break;

        case "c":
            var audio = new Audio("sounds/c.wav");
            audio.play();
            break;
    }
})
}


//keypress eventlistenner
var count = 0;
textField.addEventListener("keypress",function(event){
    count++;
    var text1 = event.key;
    heading.innerHTML = "You pressed "+text1;
    heading2.innerHTML = "Total pressed "+count;

    playAnimation(text1);
    playSound(text1);
})


//for animation boxshadow
function playAnimation(text){
    var btn = document.querySelector("."+text);
    btn.classList.add("shadow");

    setTimeout(function(){
        btn.classList.remove("shadow");
    },1500)
}


//for sound
function playSound(text){
    switch(text){
        case "a":
            var audio = new Audio("sounds/a.wav");
            audio.play();
            break;

        case "b":
            var audio = new Audio("sounds/b.wav");
            audio.play();
            break;

        case "c":
            var audio = new Audio("sounds/c.wav");
            audio.play();
            break;
    }
}