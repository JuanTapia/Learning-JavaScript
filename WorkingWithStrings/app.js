// Template Literals
let x;
const profesion='Machinist';
const empresa='Paragon Medical';
// x='Hola, trabajo como '+''+profesion+' at '+empresa+'.';
x=`Hola, trabajo como ${profesion} at ${empresa} por mas de ${2+8} anos`
// In the template literals, we can put variables and also, we can make operations.


console.log(x);

// String Properties and Methods
let x1;
x1='Hello world';
console.log(x1, typeof x1);  //Hello world  String

x1=new String('Hello World');
console.log(x1, typeof x1);  // object
x1=x1.length;           
console.log(x1);             // 11

let x2;
let x3;
x2=new String('Hola a todos');
console.log(x2[0],x2[1],x2[2]); // H o l
console.log(x2.__proto__); // shows a list
x3=x2.substring(1,6);     // ola a
x3=x2.substring(5);     // a todos, index 5 to the rest
// substring and slice are similar but slice can go positive or negative
x3=x2.substring(0,8); // output: Hola a t  [0,8> 0 is included but not 8
x3=x2.slice(0,8); // output: Hola a t  [0,8> 0 is included but not 8

console.log(x3);

