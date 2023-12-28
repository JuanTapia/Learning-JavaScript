const nombre ='Juan Tapia';
const edad =44;
const temp= 36.8;
const buleano= true;
const age = 25;
const pi = 3.141592653589793;

const isTrue = true;
const isFalse = false;

const numeros =[1,2,3,4,5,6];
const frutas=['Manzanas','Naranjas','Platanos'];

const persona ={nombre:'Juan', edad:45};
const carro={marka:'Toyota', modelo:'Corolla', ano:'2001'};

const suma= function(a,b){
    return a+b
};
 
const producto=function(a,b){
    return a*b
};



const a={chapa:"sapa"};
const b={chapa:"sapa"};

function incremento(valora){
    return valora=valora+1
};
// incremento(edad);
// const salida = suma(3,6);
// let x={valora:30}
// let y={valora:80}
// x=y
// x.valora=70
// let c=8
// let d=c
// *************
// let objecto={valora:10}
// function increase(obj)
// {
//     obj.valora++;
// }
// increase(objecto)
// ****************
// let numero=20
// function sumatorio(x){
//     x++;
   
// }
// sumatorio(numero)
// ****************
// let number=5
// let copy=number
// number=7

// *************
const arreglo=[1,2,3]
copia=arreglo
arreglo.push(4)

// ************* strings to Numbers
 let cantidad='100.4'
 let cantidad2='100.4px'
 let cantidad3='2.5em'
 let baseDos='10101'
 //cantidad=parseInt(cantidad)
// cantidad=parseInt(baseDos,2)  //10101(2)------> 21(10) binary to decimal
// cantidad=+cantidad
 //cantidad=Number(cantidad2)   // NaN (Not a Number)
 //cantidad=parseFloat(cantidad2)  //it doesnt care px
//cantidad=parseFloat(cantidad3)  // it doesnt care for em

// *************** Number to Strings

//let cantidad=25
// cantidad=String(cantidad)
// cantidad=cantidad.toString()
//cantidad=`La cadena es ${cantidad} y su tipo es` // `${}`
//cantidad='La Nueva cantidad es ' + cantidad   // Concatenation
//cantidad=cantidad.toFixed(3) //25.000
//cantidad=cantidad.toExponential(3) //2.500e+1  
//cantidad=cantidad.toLocaleString() // user's Locale



// console.log(arreglo,copia);
//console.log(cantidad, typeof cantidad);

// let myVariable = null;
// if (myVariable) {
//   console.log("This won't be printed");
// } else {
//   console.log("myVariable is falsy");
// }

// let num = 789;
// let str1 = num.toFixed(2); // "789.00"
// let str2 = num.toExponential(2); // "7.89e+2"
// let str3 = num.toLocaleString(); // "789" (formatted according to user's locale)
// console.log(str1, str2, str3);

// ********************* OPERATORS *************

let x
 
x=5+5      // + is used to add 2 numbers
x=5-5
x=5*5
x=5/5
x=5%5  //te da el coeficiente remanente

// Concatenation

x='Juan' + ' ' + 'Tapia' ;  // + is used to concatenate 2 strings

// exponente

x=2**3;

// Increment      //x=x+1 or x++
x=1
 x++

// Decrement      //x=x-1 or x--
x--

//Asigment operators
x=10

x+=5   // same as using x=x+5
x-=5
x*=5
x/=5
// x%=5
x**=5    //Exponente

// **********Compariso Operators***********8

x=2 == '2'      // ()==() Evaluate the value but not the type
x=2 === '2'      // Evaluates the value and the type
x=2 != 2        // () != () Evaluate the value but not the type
x='2' !== '2'     // Evaluates the value and the type

x=10 > 5
x=10 < 5
x=10 >= 5
x=10 <= 5

//*********** type Coercion(Automaticamente javascript convierte) */

x=5+ '5'    // '55' string, 5 got converted to string and concatenated
x= 5 + Number('5')    // 10 number
x=5*'5'      // 25 number, '5' got converted to number and multiply
x=5+null     // 5 number, Number(null)=0
x=Number(true)   // 1 number
x=Number(false)  // 0 number
x=5+true        // 6 number
x=5+false       // 5 number
x=5+undefined    // NaN


//************ Working With Strings********** */

const name ='Juan'
const anos= 45
 
x='Hola, me llamo '+ name +' y tengo ' + anos+ ' anos'
x=`Hola, me llamo ${name} y tengo ${anos} anos de edad` //template literals

//String Properties and Methods
const str = new String('Hola a todos, como estan?')
x=str.length
x=str[0]
//x=str[0]    // acces values by key or index and same as x=charAt(0)
//  x=str.toUpperCase()
x=str.indexOf('H')

x=str.__proto__; // to acces the prototypes 

// Podemos personalizar Metodos on Strings using Prototypes
 String.prototype.MiMetodo= function(){
    return this.toUpperCase()
 }
x=str.MiMetodo()

// Otro ejemplo
// String.prototype.contarCaracteres= function(cart){
//     const regux = new RegExp(cart,'g')
//     return this.match(regux)?.length || 0
    
// } 

String.prototype.contar=function(par){
    const RegObjecto= new RegExp(par,'g')
    return this.match(RegObjecto)?.length || 0
}

const regex= /to/
const cadenaa='Say hello to everyone to!'
console.log(regex.test(cadenaa))




x=cadenaa.contar('d')
x=str.__proto__
x=cadenaa.MiMetodo()
x=cadenaa.charAt(0)
x=str.indexOf('H')
x=cadenaa.substring(0,4)  // say
x=cadenaa.substring(2)  // it start [2] to the rest
x=cadenaa.substring(0,4) // say
x=cadenaa.slice(0,4)  // say
x=cadenaa.slice(-25) // -25 --string-- 0 // Say hello to everyone to!
x=cadenaa.slice(-12)  // everyone to!
x=cadenaa.slice(-25,-12)// say hello to
x=cadenaa.trim()  //clears whitespace
x=cadenaa.replace('hello','hola') // say hola to everyone to!
x=cadenaa.includes('everyone') // true
x=cadenaa.valueOf() // say hello to everyone to! string
x=str.valueOf()  // Hola a todos, como estan? string(even tho it's object but its primitive value is string)
x=cadenaa.split() // ['say hello to everyone to!] object //convierte el string into array of one item
x=cadenaa.split('')  // convierte el string into array of 25 items(cada eslabon or caracter)
x=cadenaa.split(' ') // convierte el string into array of 5 deviding the caracters by the whitespace

//Chalenge
const MyString='developer'
x=MyString.toUpperCase().charAt(0)+ MyString.substring(1)
//console.log(x, typeof x)




//********** Working with Number****** */

const num= new Number(5) // javascript puts a wrapper on a Number so it's a object
//console.log(num, typeof num)

x=num.toString()  // '5' string
//x=num.length()  // Error massage, there's no length in a number
x=num.toString().length  // 1 number
x=num.toFixed(2)  // 5.00 string
x=num.toPrecision(2) // 5.0 string
x=num.toExponential(3)
x=num.toLocaleString('ar-EG')  // numer 5 en egipto

x= new Date()       // it will give you today's date
x=x.toString()      // it will convert to string
x=new Date(1978,4,1,5,24,33)  // Mon May 01 1978 05:24:33 (0=January,,,,13=december)
x=new Date('1978-5-01')     // Mon May 01 1978  00:00:00
x=new Date('05/01/1978 5:24:33')  //Mon May 01 1978 05:24:33
x=Date.now()  // miliseconds
x=new Date('05-01-1978 5:24:33') //Mon May 01 1978 05:24:33
x=new Date()
x=x.getTime()  // will give you Time Stamp
x=x.valueOf()
x=new Date(1685050155559) // will give the exact date of this Stamp
x=Math.floor(Date.now()/1000)  // time stamp from miliseconds to secondsl

let d=new Date()
x=d.toString()  // it will give the currrent in String form

x=d.getTime() // it will give time stamp
x=d.valueOf() // it will give time stamp

x=d.getFullYear() // it will give only the year
x=d.getMonth() // it'll the month(zero base: january 0......december 13)
x=d.getMonth() +1 // it'll the correct month
x=d.getDate() // it'll give the day of the month
x=d.getDay()  // it'll give the day of the week(zero base)
x=d.getHours() // it'll give the hour of the day
x=d.getMinutes() // it'll give the minutes of the hour
x=d.getSeconds()
x=d.getMilliseconds()

x=`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}` // 2023-5-25 string

//El formato para diferentes paises
x=Intl.DateTimeFormat('en-US').format(d)   //    5/28/2023  string
x=Intl.DateTimeFormat('es-PE').format(d)   //    28/5/2023  string
x=Intl.DateTimeFormat('en-UK').format(d)   //    28/5/2023  string
x=Intl.DateTimeFormat('default').format(d)   //   5/28/2023  string, it will automatically find the format.
x=Intl.DateTimeFormat('default', {month:'long'}).format(d)   // May  string, it'll write the complete Month word.
x=d.toLocaleString('defaut',{month: 'short'})  // it'll write the short version of the Month, for example December(Dec)

// Newer thing to Dates
x=d.toLocaleString('es-PE',{ 
weekday:'long',
month:'long',
day:'numeric',
hour:'numeric',
minute:'numeric',
second:'numeric',
TimeZone:'UTC-4:0'
})
// console.log(x, typeof x)

// Create a new Date object
const date = new Date();

// Get the timezone offset in minutes
const timezoneOffset = date.getTimezoneOffset();

// Calculate the offset in hours and minutes
const offsetHours = Math.abs(Math.floor(timezoneOffset / 60));
const offsetMinutes = Math.abs(timezoneOffset % 60);

// Determine the sign of the offset
const offsetSign = timezoneOffset > 0 ? '-' : '+';

// Format the timezone string
const timezoneString = `UTC${offsetSign}${offsetHours}:${offsetMinutes}`;

// Display the timezone
console.log('Timezone for Lima, Peru:', timezoneString);



// ********** Arrays*****************

//Array literal
let arreglos=[23,45,76,89,1]

arreglos=[45,'Hola',null, true]

//Array Constructor
arreglos= new Array(23,45,69,'34')


x=arreglos[0]  // it gives the first item 23
x=arreglos[4]  // it gives the last item '34'
x=`My favorite Number is ${arreglos[2]}` // My favorite Number is 69
x=arreglos.length  // it'll give you the number of items inside the Array
arreglos[5]=100  // we add one more item to the end of the  Array
arreglos[arreglos.length]=200   // 23,45,69,'34',100,200 // we add one more item to the end of Array
arreglos[arreglos.length]=300   // 23,45,69,'34',100,200, 300// we add one more item to the end of Array
arreglos.push(400)  // // 23,45,69,'34',100,200, 300,400// we add one more item to the end of Array
arreglos.pop()   // 23,45,69,'34',100,200, 300 // we popped out the last item
arreglos.unshift(99) // 99,23,45,69,'34',100,200, 300 is added to the beginning of the array at index zero
arreglos.shift()   //23,45,69,'34',100,200, 300 is taken out of the beginning of the array at index zero
arreglos.reverse()  //300, 200, 100, '34', 69,45,23

x=arreglos.includes(69) // true
x=arreglos.indexOf(69)  // 5
x=arreglos.indexOf(2525)  // if passed an argument that is not in that array, it'll give -1
x=arreglos.slice(3) // itll give the item of index(3) and everything else after that
arreglos=[24,56,47,25,11,98]
x=arreglos.slice(1,4) // 56,47,25  it'll give 1 and stop before 4, slice will not change the original array(arreglos)
//x=arreglos.splice(1,4) // 56,47,25,11  it'll give indxex 1 to 4 , and splice will change the original array(arreglos) arreglos=[24,98]
//x=arreglos.splice(4,1) // Start at index 4 and delete only 1 over so 24,56,47,25,98 and also changed the original array
x=arreglos.splice(1,4).reverse().toString().charAt(3) // start at 1 and move 4 over and changed the original and reserve the order and convert to string y give the third caracter


const fruits=['Apples','Pears','oranges']
const berries=['Strawberry','Blueberry','Rasberry']
fruits.push(berries) // we added the 3rd index of fruits

x=fruits[3][2] // the 3rd index item of fruits and 2nd index inside of it.

const allFruits=[fruits,berries]
x=allFruits
// x=fruits.concat(berries) // combina uno o mas arrays dentro uno nuevo sin modificar los anteriores
x=[...fruits, ...berries]

// arreglos.length=3  // Podemos acortar the number of items // 23, 45 69

// Concatenating Arrays
const Array1=[1,2,3]
const Array2=[4,5,6]
arreglos=[...Array1,...Array2] // [1,2,3,4,5,6] lo combina en un solo array en vez de encanastarlo

// copying Arrays
let Array3=[...Array1]
Array3=[1,2,3,4]
console.log(Array1,Array3)

// Passing Array Elements as Function Argurments
console.log(Math.max(...arreglos))    // 6 es el numero mayor de Arreglos
console.log(Math.max(1,2,3,4,5,6))    // 6 es el numero mayor de Arreglos

// Adding Elements to an existing Array
const Array4=[...Array1,10,20,30]   // [1,2,3,10,20,30]
x=Array4

// Creating a Copy and Modifying Elements
const Array5=[...Array1.slice(0,2).reverse()]
x=Array5


// Challenge 1 Array
const chaArray=[1,2,3,4,5]

chaArray.unshift(0)

chaArray[5]=6

chaArray.reverse()
// console.log(chaArray, typeof chaArray)

// challenge 2 Array
const chaArray1=[1,2,3,4,5]
const chaArray2=[5,6,7,8,9,10]
chaArray1.pop()
const chaArray3=[...chaArray1,...chaArray2]
console.log(chaArray3)

// MOre examples


const colors = ['red', 'blue', 'green'];

// // Adding an element to the end of the array
// colors.push('yellow');

// // Removing an element from the end of the array
// colors.pop();

// // Accessing elements by index
// console.log(colors[0]); // Output: 'red'

// // Iterating over array elements
// colors.forEach(color => {
//   console.log(color);
// });


// const numbers = [1, 2, 3, 4, 5, 6];

// const evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]


// const numbers = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

colors.forEach(Element =>{console.log(Element)})
const greet=()=>{
    console.log('Hola!!')
}
greet()


//************ Object Literal ********* */

const person={
    apodo:'Juancho',
    age:45,
    IsMarried:true,
    address:{                                // Nesting
        street: '8502 Country Meadows Dr.',
        city: 'Indianapolis',
        state: 'IN'
    },
    hobbies: ['Running','swimming']

}
x=person.apodo
x=person.address.street
x=person.hobbies[0]
console.log(x)
console.log(person['age'])
person.apodo='Muelitas'
delete person.IsMarried
person.HasChildren=true
person.saludo=function(){
    console.log(`Hola! me dicen ${this.apodo}`)
}
const person2={
    'First Name':'Juan',
    'Last Nama': 'Tapia'
}
console.log(person2['First Name'])
person.saludo()



// Spread Operator on Objects
const object1={a:1,b:2}
const object2={c:3,d:4}

// const object3={object1,object2} // it puts the objects side by side as nested
const object3={...object1,...object2} // {a:1,b:2,c:3,d:4} same as copy and paste
const object7=Object.assign({},object1,object2)  // {a:1,b:2,c:3,d:4} it does the same thing as the code right above 


console.log(object3)
console.log(object7)
// 1-copy properties to a new object
const source={foo:1, bar:2}
const target=Object.assign({}, source)
console.log(target)
// const object4=Object.assign({})  // {} we passed in just empty object
const object4=Object.assign({},object1) // {a:1,b:2} we assigned object1 to empty one

// 2-merging multiple objects into one
const obj1={foo:1}
const obj2={bar:2}
const obj3={baz:3}

const merged=Object.assign({},obj1,obj2,obj3)
console.log(merged)                           //{foo:1, bar:2, baz:3}


//3-Modifying an existing object
const objecto1={cara:'feo'}
const objecto2={cara:'bonito', cuerpo:'delgado'}

Object.assign(objecto1,objecto2)
console.log(objecto1)

// 4-cloning an object
const original={car:'Ford escape', house:'ranch'}
const cloned=Object.assign({}, original)

console.log(cloned)

// 5-Merging properties into an existing object
const banco1={checking:123}
const banco2={saving:10}

Object.assign(banco1,banco2)
console.log(banco1)
console.log(banco2)

// 6-Overriding properties with later sources
const trabajadores={salario: 50, title:'Ingeniero'}
const trabajador1={salario: 80, horas:23}
const trabajador2={tiempo: 3, title:'Doctor'}

Object.assign(trabajadores, trabajador1, trabajador2)

console.log(trabajadores)




//******* Object Spread Operator & Methods******** */


const ToDo=new Object();  // same as const ToDo={}
ToDo.id=1;
ToDo.name='Buy Milk';
ToDo.completed= false;
console.log(ToDo)

const ToDo2= new Object();
ToDo2.id=2;
ToDo2.name="Repair Dishwasher"
console.log(ToDo2)

// Putting objects into Array
// Object.key()

console.log(Object.keys(ToDo))     // ['id', 'name', 'completed']
console.log(Object.keys(ToDo).length)  // 3
console.log(Object.values(ToDo))  // [1, 'Buy Milk', 'completed']
console.log(Object.entries(ToDo))  // [Array(2), Array(2), Array(2)]
console.log(ToDo.hasOwnProperty('id'))  // true



// const ConstructorPersonalizado= new ToDo2();    

const person5={
    address:{
        coors:{
            lat:42.876,
            lng:-71.4556,
        },
    },
};
console.log(person5.address.coors.lat)



const ToDos=[
    {id:1, name:'Buy Milk'},
    {id:2, name:'Pick the kids from school'},
    {id:3, name:'Take Trash out'},

]

console.log(ToDos)          // [{}, {}, {}]
console.log(ToDos[0])        // {id:1, name:'Buy Milk'}
console.log(ToDos[0].name)    // Buy Milk


// Destructuring & naming *********

const firstName='Juan'
const lasttName='Tapia'
const Edad=45

const persona6={
    firstName: firstName,
    lasttName: lasttName,
    Edad:Edad
}
console.log(persona6.Edad)   // 45

const persona9={
    firstName,
    lasttName,
    Edad:Edad
}
console.log(persona9.Edad)  // 45 as well, in stead of writing firstName: firstName, you only need  firstName, 


// Destructuring

const ToDo3={
    id:1,
    title:'Take out trash',
    user:{
        name:'Jose'
    }

}

const {
    id:ToDo3Id, title, 

}  = ToDo3

console.log(ToDo3Id)

// Otro ejemplo Destructuring Objects

const personaje={
    
    viejo:44,
    chapa:'Jose',
    gender:'Male'
}
// without Destructing
const chapi=personaje.chapa;
const vieja=personaje.viejo;
const genero=personaje.gender;

console.log(chapi,vieja,genero)     //Jose 44 Male

// With Destructing
const {chapa, viejo, gender}= personaje  

console.log(chapa)     // Jose
console.log(viejo)      // 44
console.log(gender)     //Male

// otro ejemplo con Arrays
const Arrray=[1,2,3]
const [p,q,r]=Arrray

console.log(p)
console.log(q)
console.log(r)

// Otro ejemplo

let z=10;
let g=20;

// without Destructing
let tempa=z;
z=g;
g=tempa;
console.log(z,g);

// With Destructuring
[z,g]=[g,z];
console.log(`z is now  ${z} and g is now ${g}`);

// Destructuring Function Parameters
function printPerson({a,b}){
    console.log(`Nombre: ${a}, Edad: ${b}`);
}

const personaje1={
    a:'Milagros',
    b: 41
};

printPerson(personaje1);

//Destructuring Nested Objects
const estudiante={
    nombre2:'Laura',
    edad4:20,
    c:{matematica:16, naturales:14}
};

const {nombre2,c:{matematica, naturales}}= estudiante;

console.log(nombre2, matematica, naturales )

// Otro ejemplo with Arrays

const casas=['Juan', 'Pepe', 'Mili', 'Mama'];

const [first, second ,...resto]= casas;

console.log(first, second, resto);

// console.log(arreglos,typeof arreglos)
// console.log(x, typeof x)


// JSON

const persono = {
    name: "John",
    age: 30,
    occupation: "Developer",
    skills: ["JavaScript", "HTML", "CSS"]
  };

  console.log(persono)
  
  // Convert JavaScript object to JSON string
  const jsonString = JSON.stringify(persono);
  console.log(jsonString);
  
  // Convert JSON string to JavaScript object
  const jsonObject = JSON.parse(jsonString);
  console.log(jsonObject);

  // Object chanllenge
const libreria=[
  {
    title:"El nacer",
    author:"Mario v.",
    status: {
        own: true,
        reading: false,
        read:false
    }
},

{
    title:"El nacer2",
    author:"Mario v.2",
    status: {
        own: true,
        reading: false,
        read:false
    }
},

{
    title:"El nacer3",
    author:"Mario v.3",
    status: {
        own: true,
        reading: false,
        read:false
    }
}
];

  libreria[0].status.reading=true;
  libreria[1].status.reading=true;
  libreria[2].status.reading=true;


    const {title: firstbook}=libreria[0]
    
  console.log(libreria)
  console.log(firstbook)

  const Jsonlibreria=JSON.stringify(libreria);
  console.log(Jsonlibreria);

//***************************(***************) */


// Function

function saludar(){
    console.log('Hola a todos!');
}

saludar();

function sumartoria(x,y){
    console.log(x+y);
}

sumartoria(5,3);   // 8

function resta(x,y){
    return x-y;
}
const resultado= resta(7,2);           
console.log(resultado);                 // 5

console.log(resta(30,10));              // 20
console.log(resultado,resta(30,10));    // 5 20

function registrandoUsuario(user='Juan T',x="y"){   // Default Params 

    // if(!user){                 // !user checks if the parameter is falsy(Empty string, null, undefined)
    //     user='Juan T';         // if the user is one of those falsy states, executess user='Juan T'
    // }

    return user+ ' ha sido registrado';
}
  

console.log(registrandoUsuario(undefined));  // Juan T ha side registrado
console.log(registrandoUsuario('Roberto'));  // Roberto ha side registrado

// Rest Params

function sumo(...numeras){
    return numeras;
};

console.log(sumo(1,2,3,4,5))        // [1,2,3,4,5]

function sume(...numeres){
    let total=0;
    for(const nume of numeres){
        total+=nume;
    };
    return total;
};
console.log(sume(1,2,3,4,5));        // 15


// Object in Params

function loginUser(usar){
    return `El usuario ${usar.name}ha sido ingresado con un registro ${usar.id}`;
};

const usar={
    name:'Juan Tapia ',
    id:105573
}

console.log(loginUser(usar));

// Array as params

function getRamdom(arr){
    const ramdomindex=Math.floor(Math.random()*arr.length);
    const itema=arr[ramdomindex];

    console.log(itema);

};

getRamdom([1,2,3,4,5]);


// numbers as parameter
function getRamdom2(...arr){
    const ramdomindex=Math.floor(Math.random()*arr.length);
    const itema=arr[ramdomindex];

    console.log(itema);

};

getRamdom2(1,2,3,4,5);


//******* Global and Function Scope ******** */
window.alert('Hola');
alert('Hola');         // window is so Global that no need to write it 


const globalVariable='Hola a todos';

function globalFuntion(){      //  No interesa si esta dentro o fuera de una function
    console.log(globalVariable);

    const internaVariable='heloa';
}

console.log(globalVariable);
console.log(window.innerWidth);  // 150
console.log(window.innerHeight);  // 719

globalFuntion();
// internaVariable;      // it's not defined

// Block Scope

const cien=100;
if(true){
    const docien=200;
    console.log(cien+docien);
}

// console.log(cien+docien);   // docien not defined

for(let exe=0; exe <=10; exe++){
    console.log(exe);
}

// var, let, const 
    if(true){
        const num1=100;
        let num2=200;
        var num3=300;
    };

    // console.log(num1);    // could not be found (undefinec)
    // console.log(num2);    // could not be found (undefinec)
    console.log(num3);    // 300  this is not recommended, that var variable can be reach from outside 

    function run(){
        var varibleDentroFunction=150;
        };

// console.log(varibleDentroFunction); // When declaring a varible var inside a function, it cannot be reached outside.

var miVariable; // it gets added to properties on windowN

// Nested Scope

function primero(){
    const p=100;
    function segundo(){
        const t=300;
        console.log(p+t);
    }
    segundo();
}
primero();        // 400

if(true){
    const p=100;
    if(p===100){
        const t=500;
        console.log(p+t);       // 600
    }
   
};

// Function Declaration

function anadisSimbolo(value){
    return '$'+ value;
};
console.log(anadisSimbolo(100));


// Function expression
const anadirMenos= function anadirSimbolo(value){
    return '-'+ value;
};

console.log(anadirMenos(800));

// Arrow Function

// function sumi(a,b){
//     return a+b;
// }

// const sumi=function(a,b){
//     return a+b;
// }

// const sumi=(a,b)=>{
//     return a+b;
// }


// Implicit return
const sumi=(a,b)=>a+b;      // because there's only one line of code in{ }

// const doble=(a)=>a*2; 
const doble=a=>a*2;          // It doesn't have to have () only when there's one parameter


console.log(sumi(2,3));      // 5
console.log(doble(3));      // 6

// returnining an object 

const createObj=()=>({name:'Juan',});

const nuneros4=[1,3,4,5,6,7,9,1,2,4];

nuneros4.forEach(function(a){
    console.log(a);
});

// Arrow function in a call back
const cosas=['aparato', 'casas', 45, true, undefined];
cosas.forEach(function(a){console.log(a)});
cosas.forEach(a=> console.log(a));


// IIFE

(function(){
    var avaribala='Esto esto privado';
    console.log(avaribala);
})();

var abuela='abuela';

(function(nombre){
    console.log(`Hola, me llamo ${ nombre}`);
})('Juan');

// Function challenge 1

// function tempConver(f){
//     return (f-32)*5/9;
// };
// const celcius=tempConver(53);
// console.log(celcius);

// another way

// function tempConver(f){
//     const celcius=(f-32)*5/9;
//     return celcius;
// }
// console.log(tempConver(80));

// Another way

const tempConver=f=>(f-32)*5/9;
console.log(tempConver(50));

// function challenge 2
function minMax(){
    const min=Math.min(1,2,3);
    const max=Math.max(1,2,3);
    console.log(min);
    console.log(max);
}
minMax();

