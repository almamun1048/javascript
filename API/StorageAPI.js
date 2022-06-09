//localStorage
//localStorage
//setItem
localStorage.setItem("userName","Al Mamun");
localStorage.setItem("password","1048");
localStorage.setItem("delete","delete");
const countries = ["Austrolia","Bangladesh","Finland"];
localStorage.setItem("countries",JSON.stringify(countries));
//getItem
const userName = localStorage.getItem("userName");
const password = localStorage.getItem("password");
const locality = JSON.parse(localStorage.getItem("countries"));
//deleteItem
localStorage.removeItem("delete");
//alldalete
// localStorage.clear();


//sessionStorage
//sessionStorage
//setItem
sessionStorage.setItem("fullName","Al Mamun");
sessionStorage.setItem("id","1048");
const user = {id:"101",name:"mamun"};
sessionStorage.setItem("user",JSON.stringify(user));
//getItem
const name = sessionStorage.getItem("fullName");
const id = sessionStorage.getItem("id");
const userObject = JSON.parse(sessionStorage.getItem("user"));


//deleteItem
// sessionStorage.removeItem("delete");
//alldalete
// sessionStorage.clear();

//cookies
//cookies

document.cookie = 'user=mamun;expires=Mon,28 Apr 2022 20:27:00 GMT'
