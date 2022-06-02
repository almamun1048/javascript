
// html code
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>style</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
   
    <div class="box"><p>Box</p></div>

    <script src="./js/main.js"></script>
</body>
</html>
*/

// css code

/*
body{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box{
    background-color: crimson;
    height: 100px;
    width: 100px;
    font-size: 40px;
    color: white;
    font-weight: bold;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
}

.forHover{
    width: 300px;
    height: 300px;
    font-size: 80px;
    border-radius: 50%;
    transform: rotatez(360deg);
}

*/

//javascript code

var box = document.querySelector(".box");

box.addEventListener("mouseover",function(){
    box.classList.add("forHover");
});

box.addEventListener("mouseout",function(){
    box.classList.remove("forHover");
});
