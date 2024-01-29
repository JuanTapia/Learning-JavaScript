const currentDate = new Date();
console.log(currentDate); // Output: Current date and time

const specificDate = new Date(2023, 0, 15, 12, 30, 0);
console.log(specificDate); // Output: Sun Jan 15 2023 12:30:00 GMT+0000 (Coordinated Universal Time)

// Get Date Components
const year = currentDate.getFullYear();
const month = currentDate.getMonth(); // 0 to 11
const day = currentDate.getDate();
console.log(`${year}-${month + 1}-${day}`); // Output: Current date in YYYY-MM-DD format

// Set Date Components
// currentDate.setFullYear(2024);
// currentDate.setMonth(6); // July (0 to 11)
// currentDate.setDate(20);
// console.log(currentDate); // Output: Updated date and time

// Formatting Dates
const formattedDate = currentDate.toDateString();
const formattedTime = currentDate.toTimeString();
const formattedDateTime = currentDate.toLocaleString();

console.log(formattedDate);      // Output: Sun Jan 15 2023
console.log(formattedTime);      // Output: 12:30:00 GMT+0000 (Coordinated Universal Time)
console.log(formattedDateTime);  // Output: 1/15/2023, 12:30:00 PM

// Dates Arithmetic
const tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1);
console.log(tomorrow); // Output: Date object representing tomorrow

// Parsing Dates
const dateString = "2023-01-15T10:30:00";
const parsedDate = new Date(dateString);
console.log(parsedDate); // Output: Date object representing the parsed date


let fechaActual=new Date();
// fechaActual.setFullYear(2017);   // it will change the actual year
const ano=fechaActual.getFullYear();
const mes=fechaActual.getMonth();
const dia=fechaActual.getDate();
console.log(`La fecha de hoy es: ${ano}-${mes+1}-${dia}`);
console.log(fechaActual);
console.log(fechaActual.toDateString());  //Wed Jan 24 2024
console.log(fechaActual.toTimeString());  // 11:33:13 GMT-0500 (Eastern Standard Time)
console.log(fechaActual.toLocaleDateString()); // 1/24/2024

const manana=new Date(fechaActual);
manana.setDate(2+fechaActual.getDate());

console.log(manana);

// We can time a For Loop
// const comienzo=new Date();
// for (let index = 0; index < 100000; index++) {
//     console.log(index);
    
// }
// const final=new Date();
// const tiempo=(final-comienzo)/1000;  // we devided by 1000 because the output is in miliseconds
// console.log(tiempo);

let x;
const d=new Date();
x=d;
x=d.getDate(); // Day of the Month
x=d.getDay();  // Day of the week
x=`${d.getMonth()+1}-${d.getDate()}-${d.getFullYear()}`;
// Calling the API and Passing the Date
x=Intl.DateTimeFormat('en-US').format(d); // timeformat in USA
x=Intl.DateTimeFormat('en-GB').format(d); // timeformat in Uk
x=Intl.DateTimeFormat('default').format(d); // Back to timeformat in US
x=Intl.DateTimeFormat('default',{month:'long'}).format(d); // January

// Using toLocaleString
x=d.toLocaleString('default',{month:'short'});  // Jan

x=d.toLocaleString('default',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric',
    hour:'numeric',
    minute:'numeric',
    second:'numeric',
    timeZone:'America/Indianapolis',
});

console.log(x);


