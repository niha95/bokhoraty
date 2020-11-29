/* global $, alert, console*/
$(document).ready(function() {

    $('.samples').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        prevArrow: "<i class='fa fa-angle-left a-left control-c prev slick-prev' aria-hidden='true'></i>",
        nextArrow: "<i class='fa fa-angle-right a-right control-c next slick-next' aria-hidden='true'></i>",
        responsive: [{

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        }]
    });



    var myNavbar = $('.nav');
    var distance = myNavbar.offset().top;
    console.log(distance)
    $(window).scroll(function() {
        var windowScroll = $(Window).scrollTop();
        if (windowScroll >= distance) {
            myNavbar.addClass('fixed');

        } else {
            myNavbar.removeClass('fixed');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $('.scroll-up').fadeIn();

        } else {
            $('.scroll-up').fadeOut();

        }
    });

    $('.scroll-up').on('click', function() {

        $('html,body').animate({
            scrollTop: 0
        }, 500);
    })

});