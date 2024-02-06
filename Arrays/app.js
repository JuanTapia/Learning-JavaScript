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

