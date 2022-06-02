
//html code

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ImageSlider</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <button onclick="prev()">previous</button>
    <img src="images/pic1.jpg" height="400" width="400" alt="">
    <button onclick="next()">Next</button>

    <script src="main.js"></script>
</body>
</html>
 */


var photos = ["./images/pic1.jpg","./images/pic2.jpg","./images/pic3.jpg"];
var imgTag = document.querySelector("img");

var count = 0;

function next(){
    count++;
    if(count == photos.length){
        count = 0;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}


function prev(){
    count--;
    if(count == -1){
        count = photos.length - 1;
        imgTag.src = photos[count];
    }else{
        imgTag.src = photos[count];
    }
}