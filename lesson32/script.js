'use strict'

// let obj = {
//     1 : 'a',
//     2 : 'b',
//     3 : 'c'
// };
// for (let key in obj){
//     console.log(obj[key]);
// }
// let arr = [1, 2, 3, 4, 5];
// for (let i in arr){
//     console.log(arr[i]);
// }
// const obj = {
//     name : 'John',
//     age: 20,
//     marks:{
//         science: 70,
//         math: 75
//     }
// }
// for (let i in obj){
//     console.log(i);
// }
// let i = 10;
// do {
//     console.log(i);
//     i--;
// } while (i >= 1);
let result = 0;
for (let i = 1; i <= 100; i++){
    result = result + i
};
console.log(result);