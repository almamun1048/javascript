
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
         <button class="btn">TimeStart</button>
         <p class="message"></p>
     </div>

    <script src="day13_4.js"></script>
</body>
</html>
*/

//javascript code


var btn = document.querySelector(".btn");
var message = document.querySelector(".message");

btn.addEventListener('click',startClock);

    function startClock(){
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        minutes = formateTime(minutes);
        seconds = formateTime(seconds);
        let time = hours + " : "+minutes+" : "+seconds;
        
        message.textContent = time;
        
        setInterval(startClock,1000);



        function formateTime(value){
            if(value<10){
                value = "0"+value;
            }
            return value;
        }
        }


//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
