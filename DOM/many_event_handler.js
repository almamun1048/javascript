
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
   <details>
       <summary>Al Mamun</summary>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem explicabo saepe quasi consequuntur harum ducimus facere temporibus quia deleniti placeat vitae, maiores blanditiis incidunt, omnis quisquam sapiente sequi velit ipsa fuga eaque est autem maxime. Quos distinctio, ratione expedita culpa, inventore magnam non dignissimos nesciunt nemo, minus sit! Impedit, vitae.</p>
   </details>

</div>
    <script src="main.js"></script>
</body>
</html>
*/


//javascript code

//load,unload,scroll,resize,toggle
window.addEventListener('load',function(){
    console.log("load");
});
window.addEventListener('unload',function(){
    console.log("unload");
});
window.addEventListener('scroll',function(){
    console.log("scroll");
});
window.addEventListener('resize',function(){
    const width = this.window.outerWidth;
    const height = this.window.outerHeight;
    console.log(`Height : ${height}, Width : ${width}`);
});

const details = document.querySelector("details");
details.addEventListener('toggle',function(e){
    console.log("toggole");
    console.log(e.target.open);

})
//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
