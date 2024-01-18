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
// The negative numbers start From right to left, so S=0, O=-1, d=-2 and so on.
// Hola a todos
// 0123456789...
x2=new String('Hola a todos');
console.log(x2[0],x2[1],x2[2]); // H o l
console.log(x2.__proto__); // shows a list
x3=x2.substring(1,6);     // ola a [1,6>
x3=x2.substring(5);     // a todos, index 5 to the rest [5,--->]
// substring and slice are similar but slice can go positive or negative
x3=x2.substring(0,8); // output: Hola a t  [0,8> 0 is included but not 8
x3=x2.slice(0,8); // output: Hola a t  [0,8> 0 is included but not 8
x3=x2.slice(8); // output: odos [8,to the rest of the string toward right]. it works with Substring() too.
x3=x2.slice(-9,-3); // output: a a to  <-9,-3]
// x3=x2.substring(-9,-3);  Substrings dont take negative// substring and slice are similar but slice can go positive or negative
x3=x2.trim();  // it gets rid of white space at the beginnig and end of the String, but not in between words. ('        Hola a todos        ');
x3=x2.replace('a todos','Juan'); // output: Hola Juan
x3=x2.includes('todos');         // output: true
x3=x2.valueOf();         // it gives the primitive value of the string, even tho it's a object.
x3=x2.split();          //Output: ['Hola a todos'] since we have not put anything. it gives an array with one element(the string)
x3=x2.split('');   // ['H', 'o', 'l', 'a', ' ', 'a', ' ', 't', 'o', 'd', 'o', 's'] it gives an array which elemens are every character of the strings.
x3=x2.split(' ');  // ['Hola', 'a', 'todos']
x3=x2[x2.length-1];  // output: s , This gives last character of the string.

console.log(x3);  

// First Challenge with Strings
const myString='developer';
// console.log(myString[0].toUpperCase());
// console.log(myString.slice(1));
const myNewString=myString[0].toUpperCase()+myString.slice(1);
console.log(myNewString);
const miCadena='developer';
miNuevaCadena=`${miCadena.charAt(0).toUpperCase()}${miCadena.substring(1)}`;
console.log(miNuevaCadena);

// String.indexof() and String.lastIndexof()

const x4='The code undefined code code !';
x5=x4.indexOf('R');      // output: -1 It's searching for something that is not there.
x5=x4.indexOf('Code');      // output: -1 It's also case sencitive, capitol C is not there.
x5=x4.indexOf('T');      // output: 0
x5=x4.indexOf('!');      // output: 29
x5=x4.length;      // output: 30
x5=x4.indexOf('code');      // output: 4 searches from left to right(from index 0 to the end of the string) and by default it start searching at index 0.
x5=x4.indexOf('code',5);      // output: 19 searches from left to right(from index [5 to the end of the string)
x5=x4.indexOf('code',-5);      // output: 4 searches from left to right(from index [0 to the end of the string)
x5=x4.lastIndexOf('code');   // output: 24 It searches from right to left and start at the end of the string by default.
x5=x4.lastIndexOf('code',23);   // output: 19 It searches from right to left and starts at the index of 23].
x5=x4.lastIndexOf('code',-5);   // output: -1 It searches from right to left and starts at the index of -5].
x5=x4.lastIndexOf('');   // output:30 Empty string

console.log(x5);

