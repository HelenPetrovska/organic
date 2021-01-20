$(document).ready(function () {

    // mobile-menu

    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");

    mobileMenu.addEventListener("click", function () {
        mobileMenu.classList.toggle("active-menu");
        if (mobileMenu.classList.contains("active-menu")) {
            mainMenu.classList.add("active-menu");
            document.body.style.overflow = "hidden";
        } else {
            mainMenu.classList.remove("active-menu");
            document.body.style.overflow = "auto";
        }
    });

    // sliders

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $('.responsive').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    // header-scroll

    var header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.addClass('header-scroll');
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });

    // progress-counter

    let cell = document.querySelectorAll(".progress-count");
    
    let updateTimer = function() {
        cell.forEach(item => {
            let count = +item.innerHTML;
            let dataTo = +item.getAttribute("data-to");
            // let dataFrom  = +item.getAttribute("data-from");
            if (count < dataTo) {
                item.innerHTML = count + 1;
            }
        })
    } 
    setInterval(updateTimer, 5);

})