let form = document.querySelector("form");
let price_per_kg = form.querySelector("#ppkg");
let tk_for_quantity = form.querySelector("#tfq");
let check = form.querySelector(".check");
let clear = form.querySelector(".clear");
let result_div = form.querySelector(".result-div");

let ppkg,tfq;


form.addEventListener('submit',formHandler);

function formHandler(event){
    event.preventDefault();

    ppkg = Number(price_per_kg.value);
    tfq = Number(tk_for_quantity.value);

    result_div.children[0].innerHTML = `100_gm : ${ppkg/10} Taka`

    let quantity =  1000/ppkg*tfq;
    let x1 = quantity/1000;


    if(quantity >=1000){
         result_div.children[1].innerHTML = `${tfq} Taka : ${x1.toFixed(3)}_kg`;
        }
    else{
        result_div.children[1].innerHTML = `${tfq} Taka : ${quantity.toPrecision(4,10)}_gm`
    }


    //clear button functionality
    clear.addEventListener('click',()=>{
        price_per_kg.value = '';
        tk_for_quantity.value = '';
        result_div.children[1].innerHTML = '';
        result_div.children[0].innerHTML = '';
    })
  
    }




    