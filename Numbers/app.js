let x;
const numero=new Number(564);
x=numero.toString();          // output: 564 String
x=numero.toString().length;    // output:3, It would tell you how many digits that number has.
x=numero.toFixed(5);      // output: 564.00000 string Number of digits after the decimal point.
x=numero.toPrecision(5);  // output: 564.00 Total of digits before and after decimal point.
x=numero.toExponential(3);  // output: 5.640 x 10^2 digits afer the decimal point.
x=numero.toLocaleString("fa-IR");  // output: ۵۶۴ string for Iran.

x=Math.sqrt(16);   // output: 4 la raiz quadrada de 16
x=Math.round(4.8); // output: 5
x=Math.round(4.2); // output: 4
x=Math.ceil(4.2); // output: 5
x=Math.floor(4.8); // output: 4
x=Math.floor(Math.random()*10+1);   // random numbers [1,10] included 1 and 10.
x=Math.pow(2,3);     // output: 8 2^3
x=Math.min(1,5,6);   // output: 1
x=Math.max(1,5,6);   // output: 6
x=Math.abs(-8);     // output: 8
console.log(x);

// Challenge

const a=Math.floor(Math.random()*100+1);
const b=Math.floor(Math.random()*50+1);

console.log(`The random numbers are ${a} and ${b}`);
console.log(`The SumOutput is: ${a+b}`);
console.log(`The DifferenceOutput is: ${Math.abs(a-b)}`);
console.log(`The ProductOutput is: ${a*b}`);
console.log(`The DivisonOutput is: ${a/b}`);
console.log(`The RemaindertOutput is: ${a % b}`);

