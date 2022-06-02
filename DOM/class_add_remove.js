
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
    <p>This is a simple paragraph</p>
    <button onclick="addStyle()">addStyle</button>
    <button onclick="removeStyle()">removeStyle</button>

    <script src="main.js"></script>
</body>
</html>
*/


// css code

/*
.add{
    font-size: 50px;
    color: red;
    background-color: #f1f1f1;
}
*/



var para = document.querySelector("p");

function addStyle(){
    para.classList.add("add");
}

function removeStyle(){
para.classList.remove("add");
}