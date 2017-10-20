(function ($) {
	"use strict";

    jQuery(document).ready(function($){

// All carousel
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            smartSpeed:1000,
            autoplay:true,
            dots:true,
            navText: ["<i class='zmdi zmdi-arrow-left'>", "<i class='zmdi zmdi-arrow-right'>"]
            
        });

        $(".logo-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            smartSpeed:1000,
            autoplay:true,
            dots:false,
            responsive : {
                0 : {
                    items: 2
                },
                768 : {
                    items: 4
                },
                992 : {
                    items: 6
                }
            } 
            
        });

        $(".case-studies-carousel, .theme2-case-study").owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            smartSpeed:1000,
            autoplay:true,
            responsive : {
                0 : {
                    items: 1
                },
                768 : {
                    items: 2,
                },
                992 : {
                    items: 3
                }
            }        
        });

        $(".case-studies-carousel-2").owlCarousel({
        	loop: true,
        	dots: true,
        	nav: false,
            smartSpeed:1000,
            autoplay:true,
            responsive : {
                0 : {
                    items: 1
                },
                768 : {
                    items: 2
                },
                992 : {
                    items: 3
                }
            }     	
        });

        $(".testimonial-carousel, .single-testimonial-item").owlCarousel({
        	items: 1,
        	loop: true,
        	dots: true,
        	nav: false,
            smartSpeed: 1000,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeInUp',

        });

        // off canvas menu appare index-4
        $(".menu-trigger").on('click', function () {
            $(".off-canvas").addClass("show-off-canvas")
            $(".off-canvas-shade").addClass("active")
        });

        $(".menu-close, .off-canvas-shade").on('click', function () {
            $(".off-canvas").removeClass("show-off-canvas")
            $(".off-canvas-shade").removeClass("active")
        });
        // end

        // home-4 e searching option.
        $(".search-trigger").on('click', function () {
            $(".search-bar-wrap").addClass("active")
        });
        $(".search-close").on('click', function () {
            $(".search-bar-wrap").removeClass("active")
        });

        // layout change.
        $(".boxed-layout").on('click', function () {
            $("body").addClass("boxed-layout").removeClass("wide-layout")
            $(".layout-changer span").removeClass("active")
            $(this).addClass("active")
        });
        $(".wide-layout").on('click', function () {
            $("body").addClass("wide-layout").removeClass("boxed-layout")
            $(".layout-changer span").removeClass("active")
            $(this).addClass("active")
        });
        

        // for testimonial hover active class
        $(".single-testimonial-box").hover(function(){
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass("active");
        });

        // magnific pupup in video at index-4.html
        $(".video-play-btn").magnificPopup({
            type: 'video'
        });

        // Mobile Menu with slick nav
        $("#traffic-menu").slicknav({
            prependTo: '#mobile-menu-wrap',
            allowParentLinks: true,
        });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	