// Mostrar menu mobile
let menuIcon = document.querySelector('.menu-icon-header')
let menuShow = document.querySelector('.list-items-mobile')
menuIcon.addEventListener('click', ()=>{
    if (menuShow.classList.contains('open')) {
        menuShow.classList.remove('open')
        menuIcon.src = "./assets/icons/header-icons/menu-mobile-icon.svg"
    } else {
        menuShow.classList.add('open')
        menuIcon.src = "./assets/icons/header-icons/close-icon.svg"
    }
})