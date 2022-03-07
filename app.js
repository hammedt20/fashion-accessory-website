const navMenu = document.querySelector(".nav-menu"),
    navToggle = document.querySelector('.nav-toggle'),
    navClose = document.querySelector('.nav-close'),
    navLink = document.querySelectorAll('.nav-link'),
    header = document.querySelector('.header'),
    linkProducts = document.querySelectorAll('.products-item');

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

    let mixerProducts = mixitup(".product-content", {
        selectors: {
            target: '.products-card'
        },
        animation: {
            duration: 300
        }
    });

    mixerProducts.filter('.jewelry')

    let activeProducts = function(){
        linkProducts.forEach(l => {
            l.classList.remove('active-product');
        })
        this.classList.add('active-product')
    }

    linkProducts.forEach(l => l.addEventListener('click', activeProducts))
