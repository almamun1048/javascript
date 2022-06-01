
//html code

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom</title>
</head>
<body>
    <h1 id="heading1">This is first line</h1>
    <h1 id="heading2">This is second line</h1>
    <br>
    <p>i am paragraph1</p>
    <p>i am paragraph2</p>
    <br>
    <b class="bold">i am bold1</b><br>
    <b class="bold">i am bold2</b>
    <script src="./select_html_elements.js"></script>
</body>
</html>

*/

var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");

var para1 = document.getElementsByTagName("p")[0];
var para2 = document.getElementsByTagName("p")[1];

var btag1 = document.getElementsByClassName("bold")[0];
var btag2 = document.getElementsByClassName("bold")[1];

heading1.innerHTML = "Hello";
heading2.innerHTML = "Hi";

para1.innerHTML = "paragraph1";
para2.innerHTML = "paragraph2";

btag1.innerHTML = "Btag1";
btag2.innerHTML = "Btag2";