'use strict'

// function addSquare(a, b){
//     function square(x){
//         return x * x
//     }
//     return square(a) + square(b)
// }

// let result = addSquare(2,4)
// console.log(result)
// function A(x) {
//     function B(y) {
//         function C(z) {
//             console.log(x + y + z)
//         }
//         C(3)
//     }
//     B(2)
// }
// A(1)
// function calc(a, b) {
//     return a + b
// }
// console.log(calc(2, 5))
// let a
// function number() {
//     // let a
//     // return a = 'hello'
//     a = 6
//     return a
// }
// console.log(number())
function first() {
  setTimeout(function() {
    console.log(1)
  }, 500)
}
function second() {
    console.log(2)
}
first()
second()