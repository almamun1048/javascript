
//aler for alert
alert("error here");

//confirm returns true or false
function delelteSomething(){
    var value = confirm("are you sure?");

    if(value == 1){
        console.log("deleled")
    }else{
        console.log("Not deleted")
}
}

delelteSomething();

//prompt return string or null or ''
function welcomeMessage(){
    var h1 = document.createElement("h1");
    let text;
    var namee = prompt("Enter Your Name :");

    if(namee == null || namee == ''){
        text = 'No Name Hare';
    }else{
       text = namee;
}
var textNode = document.createTextNode(text);
document.body.appendChild(h1);
h1.appendChild(textNode);
}

welcomeMessage();



//style add
var body = document.querySelector("body");
body.style.height = "100vh";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.backgroundColor = "#8b8888";
