// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>onClick</title>
// </head>
// <body>
    
//     <button onclick="image1()">Mamun</button>
//     <button onclick="image2()">Habiba</button>

//     <br>

//     <img id="myImageId" src="" alt="" height="400px" width="400px">

//     <script src="main.js"></script>
// </body>
// </html>



var pic = document.querySelector("#myImageId");

function image1(){
    pic.src = "images/pic1.jpg";
}

function image2(){
    pic.src = "images/pic2.jpg";
}