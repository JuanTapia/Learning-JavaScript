
// Conversion from a string to Number

let cantidad='125.678';
// cantidad=parseInt(cantidad);
// cantidad=parseFloat(cantidad);// for decimals 100.34
// cantidad=+cantidad;
// cantidad=Number(cantidad);
// cantidad=cantidad *1; // multiplying by 1, it automatically/Implicity convert it.

cantidad=Number(parseFloat(cantidad));

console.log(cantidad, typeof cantidad);

let cantidad2='1,345,129.56'.replace(/,/g, '');
cantidad2=parseFloat(cantidad2);
console.log(cantidad2, typeof cantidad2);

// Conversion from Number to String

let cantidad3=123;
// cantidad3=cantidad3.toString();
// cantidad3=String(cantidad3);
cantidad3=cantidad3 + ""; // Coersion


console.log(cantidad3, typeof cantidad3);

//Nan= not a Number
let noESnumero='Hola';
noESnumero=parseInt(noESnumero);

console.log(noESnumero, typeof noESnumero); // the're all Nan
console.log(Math.sqrt(-1));
console.log(NaN+1);
console.log(undefined+undefined);
console.log("juan"/5);

let age=window.prompt('Cuantos anos tienes?');
age=parseInt(age)+1;
console.log(age);