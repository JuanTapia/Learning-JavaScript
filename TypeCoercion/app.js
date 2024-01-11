// Coercion happens when Javascript implicitly does the conversion for you, in such a way that makes sense for javascript.

let x;
x=5+'5';     // 55  string
x=5+'10';     // 510 string
x=5+ Number('10');     // 15 Number. Here, we explicitly convert '10' to Number.
x=5*'10';     // 50 Number. for javascript it doesn't make sense to multiply two strins so, it converts to Number.
x=Number(null);  // 0 Number
x=5+null;       // 5 Number   
x=Number(true);  // 1 Number
x=Number(false);  // 0 Number
x=5+true;       // 6 Number   
x=5+false;       // 5 Number   
x=5+undefined;       // NaN Number   
x= 5=='5';         // true boolean. Here, coerceion happens before comparing.
x= 5==='5';         // false boolean, it recomended to use '===' always.



console.log(x, typeof x);