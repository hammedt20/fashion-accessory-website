const navMenu = document.querySelector(".nav-menu"),
    navToggle = document.querySelector('.nav-toggle'),
    navClose = document.querySelector('.nav-close'),
    navLink = document.querySelectorAll('.nav-link'),
    header = document.querySelector('.header'),
    linkProducts = document.querySelectorAll('.products-item'),
    scrollUp = document.querySelector('.scroll-up'),
    sections = document.querySelectorAll('section[id]');

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

    linkProducts.forEach(l => l.addEventListener('click', activeProducts));

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 350){
            scrollUp.classList.add('show-scroll');
        }else{
            scrollUp.classList.remove('show-scroll');
        }
    })

    function scrollActive(){
        const scrollY = window.pageYOffset;

        sections.forEach(sec => {
            const sectionHeight = sec.offsetHeight,
            sectionTop = sec.offsetTop -58,
            sectionId = sec.getAttribute('id');

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector(`.nav-menu a[href = ${sectionId}]`).classList.add("active-link");
            }else{
                document.querySelector(`.nav-menu a[href = ${sectionId}]`).classList.remove("active-link");
            }
        })
    }

    window.addEventListener('scroll', scrollActive());
