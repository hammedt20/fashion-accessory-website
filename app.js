const navMenu = document.querySelector(".nav-menu"),
    navToggle = document.querySelector('.nav-toggle'),
    navClose = document.querySelector('.nav-close'),
    navLink = document.querySelectorAll('.nav-link'),
    header = document.querySelector('.header');

    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })

    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })

    navLink.forEach(link => link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    }))

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 50){
            header.classList.add('scroll-header');
        }else{
            header.classList.remove('scroll-header');
        }
    })