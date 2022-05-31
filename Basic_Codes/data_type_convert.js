// To run javascipt programm ctrl + Alt + n

// datatype number to String convert
let a1 = 20;
a1 = toString(a1);
console.log(typeof(a1));

// datatype String to number convert
let a2 = "30";
a2 = parseInt(a2);
console.log(typeof(a2));

// datatype String to number convert
let a3 = "30.50";
a3 = parseFloat(a3);
console.log(typeof(a3));

// after point two and three value shows with rounded and return String
let b1 = 2.5678;
console.log(b1.toFixed(2));
console.log(b1.toFixed(3));

// Total two and three value shows with rounded and return String
console.log(b1.toPrecision(2));
console.log(b1.toPrecision(3));

//Convert to number data type by Number methode
console.log(typeof(Number("12")));
console.log(typeof(Number("12.5")));
console.log(Number("         12.5        "));
console.log(Number(true));
