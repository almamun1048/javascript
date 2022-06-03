
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

    <div id="my-div" class="div1">
        <p>I am a div</p>
  
        <button class="btn">btn1</button>
        <button class="btn">btn2</button>
        <button class="btn">btn3</button>
      </div>

    <script src="main.js"></script>
</body>
</html>
*/


//css code

/*
div {
    background-color: tomato;
    height: 20rem;
    width: 20rem;
    padding: 2rem;
  }
*/

//javascript code

// MouseEvent - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover

console.clear();
const div = document.querySelector("div");

div.addEventListener("click", function (e) {
    console.log("click is occured");
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.innerText);
    console.log(e.target.textContent);
});

div.addEventListener("dblclick", function () {
  console.log("dblclick is occured");
});
div.addEventListener("mousedown", function () {
  console.log("mousedown is occured");
});
div.addEventListener("mouseup", function () {
  console.log("mouseup is occured");
});
div.addEventListener("mouseenter", function () {
  console.log("mouseenter is occured");
});
div.addEventListener("mouseleave", function () {
  console.log("mouseleave is occured");
});
div.addEventListener("mouseover", function () {
  console.log("mouseover is occured");
});
div.addEventListener("mousemove", function (e) {
    console.log("mousemove is occured");
    console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
  console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
});

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.innerText);
  });
});


//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
