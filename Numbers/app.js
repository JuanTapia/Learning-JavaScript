let x;
const numero=new Number(564);
x=numero.toString();          // output: 564 String
x=numero.toString().length;    // output:3, It would tell you how many digits that number has.
x=numero.toFixed(5);      // output: 564.00000 string Number of digits after the decimal point.
x=numero.toPrecision(5);  // output: 564.00 Total of digits before and after decimal point.
x=numero.toExponential(3);  // output: 5.640 x 10^2 digits afer the decimal point.
x=numero.toLocaleString("fa-IR");  // output: ۵۶۴ string for Iran.



console.log(x);