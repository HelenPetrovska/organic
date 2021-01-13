// $(document).ready(function () {

    // mobile-menu

    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");

    mobileMenu.addEventListener("click", function() {
        mobileMenu.classList.toggle("active-menu");
        if(mobileMenu.classList.contains("active-menu")) {
            mainMenu.classList.add("active-menu");
            document.body.style.overflow = "hidden";
        } else {
            mainMenu.classList.remove("active-menu");
            document.body.style.overflow = "auto";
        }
    });

    // slider

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

    // header-scroll

    var header = $('.header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 100 && scrolled > scrollPrev ) {
            header.addClass('out');
        } else {
            header.addClass('header-scroll');
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });


// })
