


let toggleBTN = document.querySelector('.toggle-menu-btn')
let faBars = document.querySelector('.fa-bars')
let faXmark = document.querySelector('.fa-xmark')
let nav = document.querySelector('.nav')
let navLinks = Array.from(document.querySelectorAll('nav-container a'))

//about imgs

let aboutImg = Array.from( document.querySelectorAll('.about-img'))



 toggleBTN.addEventListener('click', () => {

       faBars.classList.toggle('hide')
       faXmark.classList.toggle('hide')
       nav.classList.toggle('slide')

 })

 aboutImg.forEach((img) => {


       img.addEventListener('mouseover', () => {

            img.classList.add('top-z')
       })


       img.addEventListener('mouseout', () => {

            img.classList.remove('top-z')
       })

 })

    navLinks.forEach((link) => {


       link.addEventListener('click', ()=> {

        faBars.classList.remove('hide')
        faXmark.classList.add('hide')
        nav.classList.remove('slide')


       })
    })



