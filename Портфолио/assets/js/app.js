'use strict'
const scrollUp = document.querySelector('#scroll-up')
const burger = document.querySelector('#burger-menu')
const nav = document.querySelector('nav')
const ul = document.querySelector('nav ul')
const navLink = document.querySelectorAll('.nav-link')
scrollUp.addEventListener("click", () => {
 window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
 })
})
burger.addEventListener("click", () => {
ul.classList.toggle('show')
})
navLink.forEach((link) => 
   link.addEventListener("click", () =>{
      ul.classList.remove("show")
   })
)

