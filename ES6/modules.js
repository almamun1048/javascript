
//### main.js file ###//
import {text,setText} from './myModule.js'
//import{text as message}
console.log(text);
console.log(setText("Good bye ES6"));
console.log(text);



//### myModule.js file ###//
export let text = "Welcome to module";
//export{text as message}
export function setText(txt){
    text = txt;
}


//### main.js file ###//
<script src="main.js" type="module"></script>
