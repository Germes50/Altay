'use strict'

// function message() {
//     console.log('hello')
// }
// message()
// let aFunc = function () {
//     console.log('hi')
// }
// aFunc()
// let aFunc = function (name) {
//     console.log('Hi', name)
// }
// aFunc('Ivan')
// setTimeout(function () {
//     console.log('Эта функция анонимная')
// }, 3000)
// function ask(question, yes, no) {
//     if (confirm(question))yes()
//     else no()
// }
// function ShowYes() {
//     alert('Согласен')
// }
// function ShowNo() {
//     alert('Отмена')
// }

// ask('Вы согласны?', ShowYes,ShowNo)
function ask(question, yes, no) {
    if (confirm(question))yes()
    else no()
}

ask(
    'Вы согласны?',
    function(){alert("Вы согласились")},
    function(){alert("Вы отменили выполнение")}
)