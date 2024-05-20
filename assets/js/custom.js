// -----------> jQuery
(function($) {
    "use strict";

    // preloader area here js
    // ------------------------ 
    $(window).on("load", function(){
        $(".preloder").fadeOut(1000);
    });

    // -----------------------
    //  top up button area js
    // ------------------------ 
    $(window).scroll(function(){
        if($(this).scrollTop() > 80){
            $(".topUp-btn").fadeIn(1000);
        } else{
            $(".topUp-btn").fadeOut(1000);
        }
    });
    $(".topUp-btn").click(function(){
        $(" html,body").animate({scrollTop : 0}, 1000);
    });

    
    // -----------------------
    // This will create a sticky js
    // -----------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });


    // -----------------------
    // This will create a owlCarousel
    // logo carousel area here js
    // -----------------------
    $('.hero-carousel').owlCarousel({
        loop: true,
        items: 4,
        margin: 48,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 3,
                margin: 40
            },
            500: {
                items: 4,
                margin: 20
            },
            992: {
                items: 4,
                margin: 48
            }
        }
    });



    // -----------------------
    // This will create a counter up js
    // -----------------------
    $('.counter span').counterUp({
        delay: 10,
        time: 1000
    });


    // -----------------------
    // This will create a slick slider
    // clients slider area here js
    // -----------------------
    $('.clients-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });


    // -----------------------
    // This will create a slick slider
    // blog slider area here js
    // -----------------------
    $('.blog-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });


    
    // -----------------------
    // aos animate js
    // -----------------------
    AOS.init({
      duration: 1000,
      once: true
    });
    
}(jQuery));



// -----------> javaScript
// -----------------------
// header mobile menu area here
// ------------------------ 
const menuBar = document.querySelector(".mobile-menu-bar");
const sideBarMenu = document.querySelector(".off-canvas-menu");
const closeMenu = document.querySelector(".close-menu");
const bodyOverlay = document.querySelector(".body-overlay");
menuBar.onclick = ()=>{
    sideBarMenu.classList.add("active");
    bodyOverlay.classList.add("active");
};
closeMenu.onclick = ()=>{
    sideBarMenu.classList.remove("active");
    bodyOverlay.classList.remove("active");
};
bodyOverlay.onclick = ()=>{
    sideBarMenu.classList.remove("active");
    bodyOverlay.classList.remove("active");
};
// --------------------------
// -JS area ends here
// --------------------------