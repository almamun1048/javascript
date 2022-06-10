const input = document.querySelector("input");
const btn = document.querySelector("button");
const form = document.querySelector("form");
const result = document.querySelector(".result");

const winElement = document.createElement("p");
const lossElement = document.createElement("p");

result.appendChild(winElement);
result.appendChild(lossElement);

let win =0;
let loss =0;
const checkNumber = (e) => {
    e.preventDefault();

    let randomNumber = findNumber(6);
    let inputNumber = Number(input.value);

    if(inputNumber == randomNumber){
        win++;
        winElement.innerHTML = `You win ${win} Times`
    }
    if(inputNumber != randomNumber){
        loss++;
        lossElement.innerHTML = `You loss ${loss} Times`
    }
}
form.addEventListener('submit',checkNumber);

const findNumber = (n)=>{
    return Math.floor(Math.random()*n) + 1;
}