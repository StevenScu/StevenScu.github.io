const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const contactsLink = document.querySelector('.contacts__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    contactsLink.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const highlightClass = document.querySelector('.highlight')
    const welcomeMenu = document.querySelector('#welcome-page')
    const aboutMenu = document.querySelector('#about-page')
    const projectMenu = document.querySelector('#projects-page')
    let scrollPos = window.scrollY

    if(window.innerWidth > 960 && scrollPos < 400){
        welcomeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPos < 2000){
        aboutMenu.classList.add('highlight')
        welcomeMenu.classList.remove('highlight')
        projectMenu.classList.remove('highlight')
        return
    }
    else if (window.innerWidth > 960 && scrollPos < 3600){
        projectMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((highlightClass && window.innerWidth < 960 && scrollPos < 400) || highlightClass){
        highlightClass.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);