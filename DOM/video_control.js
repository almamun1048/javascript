
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
    <!-- controls loop muted -->
    <video width="400" controls>
        <source src="./videos/video1.mp4" type="mp4">
        Your browser not support this video
    </video>
</div>
    <script src="day11_3.js"></script>
</body>
</html>
*/

//javascript code

//audio/video events
//canplay,play,playing,pause,progress,ended,volumechange,waiting
//style add

const video = document.querySelector('video');

video.addEventListener('canplay',function(){
    console.log("canplay");
})
video.addEventListener('play',function(){
    console.log("play");
})
video.addEventListener('playing',function(){
    console.log("playing");
})
video.addEventListener('pause',function(){
    console.log("pause");
})
video.addEventListener('ended',function(){
    console.log("Thanks for watching");
})
video.addEventListener('volumechange',function(){
    console.log("muted to unmuted and unmuted to muted");
})

//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
