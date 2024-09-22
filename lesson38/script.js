'use strict'

// function recurse() {
//     if(условие){
//         recurse()
//     } else{
//         конец вызова функции
//     }
// }
// recurse()
// function count(number) {
//     console.log(number)
//     const NewNumber = number - 1
//     if(NewNumber > 0){
//         count(NewNumber)
//     }
// }
// count(56)
// function message(){
//     console.log('Привет мир!')
// }
// setTimeout(message, 5000)
// console.log('Сначала отобразится это выражение')
// function message() {
//     console.log('Hello world!!!')
// }
// setInterval(message, 2000)
// function message(name, lastName) {
//     console.log('Hello' + ' ' + name + ' ' + lastName)
// }
// setTimeout(message, 1000, 'John', 'Doe')
// function message() {
//     console.log('Чтобы перейти подождите появления надписи.')
// }
// setTimeout(message,2000)

// function slide() {
//     console.log('Переходите на следующий слайд')
// }
// setInterval(slide,8000)
let count = 5
const interval = setInterval(()=>{
    console.log(count)
    count--
    if(count < 0) {
        clearInterval(interval)
        console.log('Отсчёт завершён')
    }
},1000) 