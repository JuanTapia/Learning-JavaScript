const fruta=new Array('Papaya','Manzana','Pera');
const berries=new Array('Strawberry','Blueberry','Blackberry');

fruta.push('Mango'); // Add one element to the end of the Array.
console.log(fruta);  // ['Papaya', 'Manzana', 'Pera', 'Mango']


// Spread Operatos and Concat, in this case, they are doing the same thing.

const frutas=[...fruta,...berries]; // ['Papaya', 'Manzana', 'Pera', 'Mango', 'Strawberry', 'Blueberry', 'Blackberry']
const frutas1=fruta.concat(berries);  //  ['Papaya', 'Manzana', 'Pera', 'Mango', 'Strawberry', 'Blueberry', 'Blackberry']

console.log(frutas1);

// Convert string into Array
const nombre='Juan';
const arregloNombre=[...nombre];
console.log(arregloNombre);        // ['J', 'u', 'a', 'n']

// Nesting Arrays
const nestingArray=[...fruta,berries];

console.log(nestingArray);
//
// 0
// : 
// "Papaya"
// 1
// : 
// "Manzana"
// 2
// : 
// "Pera"
// 3
// : 
// "Mango"
// 4
// : 
// (3) ['Strawberry', 'Blueberry', 'Blackberry']


console.log(nestingArray[4][0]);  // Strawberry

// Flatten Arrays

console.log(nestingArray.flat()); // ['Papaya', 'Manzana', 'Pera', 'Mango', 'Strawberry', 'Blueberry', 'Blackberry']

// Static Methods on Arrays Object
let x;
x=Array.isArray(fruta);  // true
x=Array.isArray('pera');  // false
x=Array.from('pera');  // ['p', 'e', 'r', 'a']
x=Array.from('012345');  //  ['0', '1', '2', '3', '4', '5']
const a=1;
const b=2;
const c=3;
const d=4;
x=Array.of(a,b,c,d); // [1, 2, 3, 4]

console.log(x);