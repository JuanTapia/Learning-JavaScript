let x;

// Basic Operations
x=5+5;
x=5-5;
x=5*5;
x=5/5;
x=5%5; // 0 the remenant of the divison
x=7%5; // 2 the remenant of the divison
console.log(x);

// Exponent
let x1;
x1=2**3; // 2^3=8
console.log(x1);

//Increment by 1
let x2=45;
x2=x2+1; // the same as x2++; 46
x2++;    // 47
console.log(x2); 
               //Example 1  Post-increment
               let a = 5;
               b=a++;
               console.log(a);  // Output: 6 (incremented after the value is assigned to y)
               console.log(b);  // Output: 5 (original value of x)
               //Example 2  Pre-increment
               let c = 10;
                let d = ++c;
                console.log(c);  // Output: 11 (incremented before the value is assigned to d)
                console.log(d);  // Output: 11 (new value of c)
               //Example 3
               for(let i=0; i<5; i++){
                console.log(i);
               }
               //Example 4
               let cantidad=0;
               console.log(cantidad++); // 0
               console.log(++cantidad); // 2
               //Example 5
               let num=3;
               console.log(num+=2);    // 5
               console.log(num);       // 5
               //Example 6
               let num1=10;
               console.log(num1++ + ++num1 + num1++); //34
               console.log(num1++); //13
               console.log(num1);  //14

// decrement by 1
let x3=45;
x3=x3-1; // the same as x3++; 44
x3--;    // 43
console.log(x3); 


// assigment Operators

let x4=45;
x4+=10;  // same as x4=x4+10; output:55
x4-=20;  //  output:35
x4/=7;  //  output:5
x4*=5;  //  output:25
x4%=7;  //  output:4 // modulate, remanent of a Division.
x4**=2;  //  output:16
console.log(x4);


//Comparison Operator

x5=2==2;      // output= true, '==' compares value but not Type.
x5=2=='2';      // output= true, '==' compares value but not Type.
x5=2==='2';      // output= false, '===' compares both value and Type.
x5=2===2;      // output= true, '===' compares both value and Type.

x5=2!=2;       // Chequing only Value, 2 Not equal to 2. output:false
x5=2!=="2";       // Chequing both Value and Type, 2 Not equal to 2. output:true

x5=45>40;      // true
x5=45<40;      // false
x5=45<=45;      // true
x5=45>=45;      // true
console.log(x5);    
