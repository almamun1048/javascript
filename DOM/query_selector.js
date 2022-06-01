
//html code

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Query Selector</title>
</head>
<body>
    <p id="para">paragraph1</p>
    <p class="pclass">paragraph2</p>
    <p>paragraph3</p>

    <div class="link">
        <a href="#">Link</a>
    </div>

    <h1>heading1</h1>
    <h1>heading2</h1>

    <script src="./query_selector.js"></script>
</body>
</html>

*/
var v1 = document.querySelector("#para");
v1.innerHTML = "Query Selector using id";

var v2 = document.querySelector(".pclass");
v2.innerHTML = "Query Selector using class";

var v3 = document.querySelector("p");
v3.innerHTML = "Query Selector using Tag";

var v4 = document.querySelector(".link a");
v4.innerHTML = "div link";

var v5 = document.querySelectorAll("h1")[0];
v5.innerHTML = "querySelectorAll";