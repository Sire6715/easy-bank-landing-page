const btn = document.getElementById('menu__btn')
const navMenu = document.getElementById('menu')

btn.addEventListener('click', () =>{
    btn.classList.toggle('open')
    navMenu.classList.toggle('closed__menu')
}) 