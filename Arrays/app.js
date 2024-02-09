let x;
const arreglo=new Array(12,13,56,1,3);
const fruit=['Apple','Pear','Banana','Grapes'];

x=arreglo[1]+arreglo[4];
x=`Mi frutas favorita es ${fruit[2]} y ${fruit[3]}`;
arreglo[arreglo.length]=100;
arreglo.length=2;
arreglo[0]='Manzana';
console.log(arreglo);

let y;
const arr=new Array(25,45,67,23);
// arr.unshift(99,6,7);  //  [99, 6, 7, 25, 45, 67, 23] Adds to the begining of the Array.
// arr.push(26,500,34);  // [25, 45, 67, 23, 26, 500, 34] Adds to the end of the Array.
// arr.shift();          //  [45, 67, 23] Takes the first element.
// arr.pop();            // [25, 45, 67] Takes the last element.
arr.reverse();        // [23, 67, 45, 25] It reverses, the last element will be the first one.
console.log(arr);     // Run one line of code at the time.

const arr1=new Array(100,200,300,400,500);
console.log(arr1.includes(100));  // This will return a boolean, in this case is True.
console.log(arr1.indexOf(100));   // This will return the index of the element 100 which is 0.

y=arr1.slice(1,3);
console.log(y);   // [1,3> will take 1 but not 3. [200, 300] This will return the sliced Array. But it does not change the inital array.
console.log(arr1);
console.log(arr1.splice(1,3));   // [1,3] will take 1 but also 3. [200, 300, 400] This will return the sliced Array but it does change the initial array.
console.log(arr1);

const arr2=new Array(0,1,2,3,4,5,6,7);
// arr2.splice(2);     // [0, 1] Removes all elements starting at index2
// arr2.splice(2,3);     // [0, 1, 5, 6, 7] Removes 3 elements starting at index2
// arr2.splice(2,3,35,45);     // [0, 1, 35, 45, 5, 6, 7] Removes 3 elements starting at index2 and replace it with 35 and 45.
console.log(arr2);

const newArray=arr2.map(item=>item*2);
console.log(newArray);

const items=[
    {name:'Bike', price:100},
    {name:'TV', price:200},
    {name:'Album', price:10},
    {name:'Book', price:5},
    {name:'Phone', price:500},
    {name:'Computer', price:1000},
    {name:'Keyboard', price:25},
]
console.log(items);

// El filtro de encontrar los precios mayores or igual de 500
const filteredItems=items.filter(function(x){
    return x.price>=500;
})
console.log(filteredItems);

// El mapeo de los nombres de los Item
const mapItems=items.map(function(x){
    return x.name;
})
console.log(mapItems);

// El mapeo de el doble de los precios de los Item
const mapItems2=items.map(function(x){
    return x.price*2;
})
console.log(mapItems2);

// Encontrar el item llamado book
const mapItems3=items.find(function(x){
    return x.name==='Book';
})
console.log(mapItems3);

// Print out the prices for each item
items.forEach(function(x){
    console.log(x.price)
})

// is it false or true that some of the prices are less then or equal to 25
const esVerdad=items.some(function(x){
    return x.price<=25;
})
console.log(esVerdad)

// is it false or true that every price is less then or equal to 800
const esVerdad2=items.every(function(x){
    return x.price<=800;
})
console.log(esVerdad2)

// Array.reduce(); reduce the array to only one elment
const numeros=new Array(20,30,60,10);
const suma=numeros.reduce(sumatoria,0);
const max=numeros.reduce(maximo,0);
const promedio=numeros.reduce(prome,0)/numeros.length;

function prome (acc,va){
    return acc+va;
}

function maximo(a,b){
    return Math.max(a,b);
};

function sumatoria(a,b){
    return a+b;
};

console.log(`$${suma.toFixed(2)}`);
console.log(max);
console.log(promedio);

// Another Example
const articulos=new Array(
    {nonbre:'Rice', precio:5},
    {nonbre:'Book', precio:20},
    {nonbre:'chicken', precio:10},
    {nonbre:'Monitor', precio:100},
    );
// let precioTotal=0;
// articulos.forEach((total)=>precioTotal+=total.precio);
const precioTotal=articulos.reduce((total,articulo)=>{
    console.log(total, articulo.precio)
    return total+articulo.precio},0);
console.log(precioTotal);


const gente=new Array(
    {name:'Juan', age:45},
    {name:'Jose', age:45},
    {name:'Martin', age:30},
    {name:'Paul', age:25},
    {name:'Antonio', age:55},
    
);
const resultado=gente.reduce((genteAcumulad,persona)=>{
    const edad=persona.age;
    if(genteAcumulad[edad]==null)
    genteAcumulad[edad]=[]
    genteAcumulad[edad].push(persona);
    return genteAcumulad
},{});
console.log(resultado);