$(document).ready(function () {

    // mobile-menu

    let mobileMenu = document.querySelector(".nav-mobile-menu");
    let mainMenu = document.querySelector(".navigation");
    let menuLinks = document.querySelectorAll(".menu-link");

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

    menuLinks.forEach(link => {
        link.addEventListener("click", function() {
            mainMenu.classList.remove("active-menu");
            mobileMenu.classList.remove("active-menu");
            document.body.style.overflow = "auto";

        })
    })

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
    
    // btn goTop

    $(function () {
        $('.scrollup').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        })
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    // izotope

    var $grid = $('.grid').isotope({
        itemSelector: '.gallery-images-item',
        layoutMode: 'masonry',
        transitionDuration: '0.8s',
        percentPosition: "true"

      });

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

    // izotope без jquery

    // const elem = document.querySelector('.grid');
    // const iso = new Isotope( elem, {
    //     itemSelector: '.gallery-images-item',
    //     layoutMode: 'masonry'
    // });
    // document.querySelectorAll(".filter-btn").forEach(el => {
    //     el.addEventListener("click", function(e) {
    //         let filter = e.currentTarget.dataset.filter;
    //         iso.arrange({filter: `${filter}`});
    //     })
    // })
   
    // AOS

    AOS.init();

})