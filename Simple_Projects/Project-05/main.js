//Selection Part
const fontSize = document.querySelector("#fontSize");
const bgColor = document.querySelector("#bgColor");
const reset = document.querySelector("#reset");
const main = document.querySelector("#main");


//setValues function
const setValues = (fontsize,bgcolor)=>{
    fontSize.value = fontsize;
    bgColor.value = bgcolor;

    main.style.fontSize = fontsize;
    main.style.backgroundColor = bgcolor;
}
//LoadStorage initialSetup function
const initialSetup = ()=>{
    const font = localStorage.getItem("fontSize");
    const bgc = localStorage.getItem("bgColor");

    if(!fontSize && !bgColor){
        setValues("16px","orange");
    }
    if(fontSize && bgColor){
        setValues(font,bgc);
    }
    if(!fontSize && bgColor){
        setValues("16px",bgc)
    }
    if(fontSize && !bgColor){
        setValues(font,"orange")
    }
}



//reset by click
const resetValue = ()=>{
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");

    localStorage.setItem("fontSize","16px");
    localStorage.setItem("bgColor","orange");
    setValues("16px","orange");
}

//function selectBgColor
const selectBgColor = (event)=>{
    const selectedBgColor = event.target.value;
    main.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor",selectedBgColor);
}
//function selectFontSize
const selectFontSize = (event)=>{
    const selectedFontSize = event.target.value;
    main.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize",selectedFontSize);
}
//addEventListenner
fontSize.addEventListener('change',selectFontSize);
bgColor.addEventListener('change',selectBgColor);
reset.addEventListener('click',resetValue);

//loadstorage initial setup
initialSetup();