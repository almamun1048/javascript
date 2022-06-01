//html code

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>element modify</title>
</head>
<body>
    <div id="my-div">
        <h1 id="head1">Hello</h1>
        <h1 id="head2" title="H1">How are you</h1>
        <a href="#" class="link1 link2">Link</a>
    </div>


    <script src="day9_1.js"></script>
</body>
</html>

*/


var h1 = document.getElementById("head1");
var h2 = document.getElementById("head2");
var my_div = document.getElementById("my-div");


h1.innerHTML = "Heading1";
h2.title = "heading2";
my_div.style.backgroundColor = "#f1f1f1";
my_div.style.padding = "50px";

//create new element below (default)
var h3 = document.createElement("h1");
var text = document.createTextNode("I am New Element");
h3.appendChild(text);
my_div.appendChild(h3);

//remove element
my_div.removeChild(h2);

//create new element upper
var h0 = document.createElement("h1");
var text0 = document.createTextNode("New Element add top");
h0.appendChild(text0);
my_div.insertBefore(h0,h1);

//class show,add,remove
var aclass = document.getElementsByTagName("a")[0];
aclass.classList;
aclass.classList.add("link3");
aclass.classList.remove("link2");
aclass.classList;
