
// Value or primitive type
// a points at/assigned to the value of 1 (a ----> 1)
const a=1; // a and b have the same value of 1, they dont have a copy of the value of 1 and they're independent of each other.
const b=1;

console.log(`Comparing Value & type of a and b is ${a===b}`) //true

let a1=15;
let b1=a1;
console.log(a1, b1); // a1 and b1, they both point to the value of 15 but they are two different 15

 b1=30;
console.log(a1, b1);// b1 is reassigned to 30, but a1 and b1 are independent from each other



// Non-primitive, reference or Object type
// c points at the location address of the Array
// c ----> 46234      Address: 46234 of [1]
const c=[1];
const d=[1];

console.log(`Comparing Value & type of c and c is ${c===d}`) //false

let c1=[1,2];
let d1=c1;
console.log(c1,d1);// they both point the same reference
d1.push(3);
console.log(c1,d1);// Since they both point to the same memory address or reference, any changes you made to one, it also affects to the otherone.
d1=[20,30,40];
console.log(c1,d1);// In this case, we're overriding the variable of d1 
d1.push(100);
console.log(c1,d1);// it will affect only to d1, since they point to two different reference






// Passing a value into a function

// we're passing the value of 45, not the variable Miedad
function incrementarEdad(edad){
    edad=edad+10;
};
let Miedad=45;
incrementarEdad(Miedad);
console.log(Miedad);

// Passing a reference into a function

const me={age:45}; // me is constant but not its properties
function addAge(user){
    user.age=user.age+10;
};
addAge(me);
console.log(me);

arr=[10,20,30];
console.log(arr);
function anadirArreglo(arreglo,a){
    arreglo.push(a);
};
anadirArreglo(arr,40);
console.log(arr);