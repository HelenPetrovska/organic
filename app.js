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

    // sliders

    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoHeight: true,
        speed: 1000,
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

    let header = $('.header'),
        scrollPrev = 0;

    $(window).scroll(function () {
        let scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            header.addClass('out');
        } else {
            header.addClass('header-scroll');
            header.removeClass('out');
        }
        scrollPrev = scrolled;
    });

    
    // AOS

    AOS.init();

    // progress-counter

    let cell = document.querySelectorAll(".progress-count");
    
    let updateTimer = function() {
        cell.forEach(item => {
            let count = +item.innerHTML;
            let dataTo = +item.getAttribute("data-to");

            if (count < dataTo) {
                item.innerHTML = +item.innerHTML + 1;
            }
        })
    } 
        // починає працювати
    let progress = document.querySelector(".progress");

    window.addEventListener('scroll', function() {
        if (progress.offsetTop-200<pageYOffset) {
            setInterval(updateTimer, 50);
        }
    })

    // modal

    let modal = document.querySelector(".modal");
    let subscribeBtn = document.querySelector(".subscribe-btn");
    let subscribeCloseBtn = document.querySelector(".subscribe-close-btn");

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
    }

    function closeModal(e) {
        e.preventDefault();
        modal.classList.add("hide");
        modal.classList.remove("show");
    }

    modal.addEventListener("click", function(e) {
        if(e.target === modal) {
            closeModal(e);
        }
    })

    setTimeout(openModal, 30000);

    subscribeCloseBtn.addEventListener("click", closeModal);
    subscribeBtn.addEventListener("click", closeModal);

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
        layoutMode: 'masonry'

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
   

})