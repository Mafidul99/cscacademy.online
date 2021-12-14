/*
***********************************
* Template Name: Eco - Construction and Multipurpose Clean Responsive HTML5 Template
* Author Name: Prantok104
* Version: 1.0.0
* Template By: Prantok104

* This file contains the script for the actual theme, this is the file you need to edit to change the look of the theme.

This files contents are outlined below >>>>

*** SEARCH EACH SECTION AS IT COMMENTS, YOU WILL GET THE RIGHT SECTION.

**************************************************
**************************************************
*** JS TABLE

 01 - PRELOADER JS
 02 - MAIN SLIDER JS
 03 - NEXT GAME TIME JS
 04 - TEAM SLIDER JS AND PRODUCT SLIDER JS
 05 - CLIENT SLIDER JS
 06 - STICKY HEADER JS
 07 - AWARD COUNTER JS
 08 - PROJECT MAGNIFIC POPUP JS
 */
(function () {
    "use strict";

    jQuery(document).ready(function ($) {

        /*================================================
        01 - PRELOADER JS
        ==================================================*/
        setTimeout(function () {
            $('.loader-bg').fadeToggle();
        }, 2500);

        /*================================================
        02 - MAIN SLIDER JS
        ==================================================*/
        $(".eco-slider-area-start, .eco-about-slider-active").owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: true,
            responsive: {
                0: {
                    items: 1,
                    dots:false
                },
                480: {
                    items: 1,
                    dots:false
                },
                600: {
                    items: 1,
                    dots:false
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        /* MAIN SLIDER CONTENT ANIMATED */
        $(".eco-slider-area-start").on("translate.owl.carousel", function () {
            $(".eco-slingle-slider-content h1, .eco-slingle-slider-content p").removeClass("animated fadeInDown slow").css("opacity", "0");
            $(".eco-slingle-slider-content a").removeClass("animated fadeInUp slow").css("opacity", "0");
        });
        $(".eco-slider-area-start").on("translated.owl.carousel", function () {
            $(".eco-slingle-slider-content h1, .eco-slingle-slider-content p").addClass("animated fadeInDown slow").css("opacity", "1");
            $(".eco-slingle-slider-content a").addClass("animated fadeInUp").css("opacity", "1");
        });
        /*================================================
        03 - NEXT GAME TIME JS
        ==================================================*/
        $('.eco-simple-timer').syotimer({
            year: 2020,
            month: 8,
            day: 29,
            hour: 20,
            minute: 30
        });

        /*================================================
        04 - EXPART SLIDER
        ==================================================*/
        $(".eco-expart-slider-active").owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            margin: 30,
            autoplay: false,
            autoplayTimeout: 7000,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });

        /*================================================
        05 - CLIENT SLIDER JS
        ==================================================*/
        $(".eco-client-slider-active").owlCarousel({
            animateOut: 'fadeOutLeft',
            animateIn: 'fadeInRight',
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });

        /*================================================
        06 - STICKY HEADER JS
        ==================================================*/
        $(window).scroll(function () {
            var sticky = $('.sticky'),
                scroll = $(window).scrollTop();

            if (scroll < 200) sticky.removeClass('fixed');
            else sticky.addClass('fixed').animate({
                scrollTop: 0
            }, 1000);

        });

        /*================================================
        07 - PROJECT COUNTER JS
        ==================================================*/
        $('.counter').counterUp({
            delay: 10,
            time: 3000
        });

        /*================================================
        08 - FEATURE JS
        ==================================================*/
        $('.eco-feature-content').mixItUp();

        /*================================================
        09 - PROJECT MAGNIFIC POPUP JS
        ==================================================*/
        $('.project-image-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        
        /*================================================
        10 - BOTTOM TO TOP BUTTON JS
        ==================================================*/
        
        $(window).scroll(function(){
            if($(this).scrollTop() >= 350){
                $('.eco-btm-to-top').fadeIn(200);
            }else{
                $('.eco-btm-to-top').fadeOut(200);
            }
        });
        
        $('.eco-btm-to-top').click(function(){
           $('body,html').animate({
               scrollTop:0
           }, 1000)
        });
        
        /*================================================
        11 - MOBILE MENU
        ==================================================*/
        $('#mobile-menu').slicknav({
            prependTo:'.responsive-mobile-menu'
        });
    });
}(jQuery));

