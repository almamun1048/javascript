
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
    <form>
        <div><label for="name">Name: <input type="text" id="name" name="name" autofocus required></label></div>
        <div><label for="email">Email: <input type="email" id="email" name="email" required></label></div>
        <div><label for="Password">Password: <input type="password" id="password" name="password" minlength="4" maxlength="8" required></label></div>
        <div> <button type="submit">SingUp</button></div>      
    </form>
</div>
    <script src="day11_2.js"></script>
</body>
</html>
*/

//javascript code
var form = document.querySelector('form');
var namee = form.querySelector("div #name");
var email = form.querySelector("div #email");
var password = form.querySelector("div #password");

form.addEventListener('submit',formHandler);
function formHandler(e){
    e.preventDefault();

    const userInfo = {
        namee: namee.value,
        email: email.value,
        password: password.value
    };
    console.log(userInfo);
    namee.value = "";
    email.value = "";
    password.value = "";
}



//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
