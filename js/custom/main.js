/*
* AETHER - A premium template from Designova
* Author: Designova, http://www.designova.net
* Copyright (C) 2016 Designova
* This is a premium product. For licensing queries please contact info@designova.net
*/

/*global $:false */
/*global window: false */
(function() {
    "use strict";
    $(function($) {

        //Detecting viewpot dimension
        var vH = $(window).height();
        var vW = $(window).width();
        //Adjusting Intro Components Spacing based on detected screen resolution
        $('.fullwidth').css('width', vW);
        $('.fullheight').css('height', vH);
        $('.halfwidth').css('width', vW / 2);
        $('.halfheight').css('height', vH / 2);
        $('.90percheight').css('height', vH-vH/10);
        $('.ms-section img').css('max-width', vW / 2);
        //$('.slant-bg-wrap, .slant-layer:first-child:before').css('max-width', vW);

        //Equal Heights Trigger
        $('.equal-height-childs').equalHeights();
        
        //PRELOADER
        $('body, html').addClass('preloader-running');
        $('#mastwrap').css('visibility', 'hidden');
        $(window).load(function() {
            $("#status").fadeOut();
            $("#preloader").delay(1000).fadeOut(1000);
            $('body, html').removeClass('preloader-running');
            $('body, html').addClass('preloader-done');
            $("#mastwrap").delay(1000).css('visibility',
                'visible');
        });

        //Common UX/UI
        if ( $( "#works-container" ).length ) {
            $( ".works-filter-wrap" ).fadeIn(3000);
        }
        if ( $('.studio-approach-item').length ) {
            $('.studio-approach-item').on('click', function(){
                $('.studio-approach-item-details').slideUp();
                $('.studio-approach-item').removeClass('active-item');
                $(this).addClass('active-item');
                $(this).find('.studio-approach-item-details').slideDown();
            });
        }


        //Main Menu Trigger

        $('.menu-icon-wrapper, .mobile-menu-icon-open').on('click', function(){
            $('.mobile-menu-icon-open').hide();
            $('.mobile-menu-icon-close').show();
            $('header.masthead').toggleClass('no-bgcolor');
            $('nav ul > li').find('.sub-menu').stop().hide();
            $('.menu-panel').removeClass('halfview');
            $('.sub-menu').removeClass('halfview');
            $('.mastnav').fadeToggle(500);
            $('.mastnav').toggleClass('mastnav-bordered');
        });
        $('.mobile-menu-icon-close').on('click', function(){
            $(this).hide();
            $('.mobile-menu-icon-open').show();
            $('header.masthead').toggleClass('no-bgcolor');
            $('nav ul > li').find('.sub-menu').stop().hide();
            $('.menu-panel').removeClass('halfview');
            $('.sub-menu').removeClass('halfview');
            $('.mastnav').fadeToggle(500);
            $('.mastnav').toggleClass('mastnav-bordered');
        });



        //Sub Menu Trigger
        $('nav ul > li').on('click', function(){
            $('nav ul > li').find('.sub-menu').stop().hide();
            $('.menu-panel').addClass('halfview');
            $('.sub-menu').addClass('halfview');
            $(this).find('.sub-menu').stop().fadeIn(1000);
        });


        //CAROUSELS
        $(".agency-carousel, .horizontal-carousel").owlCarousel({
            autoWidth: false,
            items: 2,
            loop: true,
            nav: false,
            dots: true,
            navText: false,
            addClassActive: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            },
            onInitialize:beforeOwlSlide,
            onInitialized:afterOwlSlide,
            onTranslate: beforeOwlSlide,
            onTranslated: afterOwlSlide
        });
        function beforeOwlSlide(){
                    if ( $( ".boxed-caption-anim" ).length ) {
                        $('.boxed-caption-anim').hide();
                        $('.active .boxed-caption-anim').removeClass('anim-slide');
                    }
        }
        function afterOwlSlide(){
                    if ( $( ".boxed-caption-anim" ).length ) {
                    $('.active .boxed-caption-anim').show().addClass('anim-slide');
                    }
        }

        $(".project-carousel").owlCarousel({
            autoWidth: false,
            autoHeight: false,
            items: 1,
            loop: true,
            nav: false,
            dots: true,
            navText: false,
            addClassActive: true,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        $(".clients-carousel").owlCarousel({
            autoWidth: false,
            items: 4,
            loop: true,
            nav: false,
            dots: true,
            navText: false,
            addClassActive: true,
            smartSpeed: 1000,
            autoHeight: false,
            responsive:{
                0:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });


        $(".testimonial-carousel").owlCarousel({
            autoWidth: false,
            items: 2,
            loop: true,
            nav: false,
            dots: true,
            navText: false,
            addClassActive: true,
            smartSpeed: 1000,
            autoHeight: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });

        $(".team-carousel").owlCarousel({
            autoWidth: false,
            items: 3,
            loop: true,
            nav: false,
            dots: true,
            navText: false,
            addClassActive: true,
            smartSpeed: 1000,
            autoHeight: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });

        //ISOTOPE
                //ISOTOPE GLOBALS
                var $container1 = $('.works-container');


                //ISOTOPE INIT
                $(window).load(function() {

                   //checking if all images are loaded
                    $container1.imagesLoaded( function() {

                        //init isotope once all images are loaded
                        $container1.isotope({
                            // options
                            itemSelector: '.masonry-item',
                            layoutMode: 'masonry',
                            transitionDuration: '0.8s'
                        });


                        //forcing a perfect masonry layout after initial load
                        setTimeout(function() {
                        $container1.isotope('layout');
                        }, 100);


                        // triggering filtering
                        $('.works-filter li a').on('click', function() {
                            $('.works-filter li a').removeClass('active');
                            $(this).addClass('active');

                            var selector = $(this).attr('data-filter');
                            $('.works-container').isotope({
                                filter: selector
                            });
                            setTimeout(function() {
                                $container1.isotope('layout');
                            }, 700);
                            return false;
                        });


                        //Isotope ReLayout on Window Resize event.
                        $(window).on('resize', function() {
                            $container1.isotope('layout');
                        });

                        //Isotope ReLayout on device orientation changes
                        window.addEventListener("orientationchange", function() {
                            $container1.isotope('layout');
                        }, false);

                    });

                });

        //Hover Effects
        $('.masonry-item a').on('mouseenter', function() {
                $(this).find('.boxed-caption').slideDown();
         });
        $('.masonry-item a').on('mouseleave', function() {
                $(this).find('.boxed-caption').slideUp();
         });

        //VENOBOX

        $('.venobox').venobox({
            numeratio: true
        });

        //BX SLIDER
        $(document).ready(function(){
          $('.bxslider').bxSlider({
            adaptiveHeight:true
          });
        });


        //MULTI SCROLL

        if ( $( "#multiscroll" ).length ) {

            $('#multiscroll').multiscroll({
                verticalCentered : true,
                scrollingSpeed: 1500,
                easing: 'easeInSine',
                menu: false,
                sectionsColor: [],
                navigation: true,
                navigationPosition: 'right',
                navigationColor: '#000',
                navigationTooltips: [],
                loopBottom: true,
                loopTop: true,
                css3: false,
                paddingTop: 0,
                paddingBottom: 0,
                normalScrollElements: null,
                keyboardScrolling: true,
                touchSensitivity: 5,

                // Custom selectors
                sectionSelector: '.ms-section',
                leftSelector: '.ms-left',
                rightSelector: '.ms-right',

                //events
                onLeave: function(index, nextIndex, direction){
                    if ( $( ".boxed-caption-anim" ).length ) {
                        $('.boxed-caption-anim').hide().removeClass('anim-slide');
                    }
                },
                afterLoad: function(anchorLink, index){
                    if ( $( ".boxed-caption-anim" ).length ) {
                    $('.boxed-caption-anim').show().addClass('anim-slide');
                    }
                },
                afterRender: function(){
                    //re init Venobox after split panel is generated
                    $('.venobox').venobox({
                        numeratio: true
                    });
                    if ( $( ".boxed-caption-anim" ).length ) {
                    $('.boxed-caption-anim').show().addClass('anim-slide');
                    }
                },
                afterResize: function(){},
            });

            $('.ms-section').find('.ms-thumbnail').on('mouseenter', function(){
                $(this).parent().find('.ms-caption').slideDown(1000);
                $(this).addClass('border-wrapped');
            });
            $('.ms-section').on('mouseleave', function(){
                $(this).find('.ms-caption').slideUp(1000);
            });

        }


        //RESPONSIVE VIDEO EMBED
        $(document).ready(function(){
            // Target your .container, .wrapper, .post, etc.
            $(".project-video").fitVids();
        });



        //PARALLAX
        //Initialize Each Parallax Layer  
        function parallaxInit() {
            $.stellar({
                positionProperty: 'transform'
            });
        }

        if (!device.tablet() && !device.mobile()) {

            //Activating Parallax effect if non-mobile device is detected
            $(window).bind('load', function() {
                parallaxInit();
            });


        } else {

            //Dectivate Parallax effect if mobile device is detected (bg image is displayed)
            $('.parallax, .parallax-layer').addClass('no-parallax');

        }   
        

        

    });
    // $(function ($)  : ends
})();
//  JSHint wrapper $(function ($)  : ends