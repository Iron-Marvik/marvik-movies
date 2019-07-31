$(document).ready(function(){

/*-------------SLICK MENU INITIALIZE-----------*/
    $(function(){
        $('.header-menu').slicknav({
            prependTo:'.mobile-menu'
        });

        $('.slicknav_nav').addClass('clearfix');
    });
/*-------------END SLICK MENU INITIALIZE-----------*/

/*---------VIDEO SETTIMEOUT--------------*/
    var video = document.getElementById("myVideo");
    var upriseForm = $('.uprise-form');
        upriseForm.hide();

        video.onplay = function() {
            setTimeout(function(){
                video.pause(video);
                upriseForm.slideDown("slow");
                video.currentTime = 0;
            },10000);
        };
/*--------END VIDEO SETTIMEOUT---------*/

/*-----------QUALITY BUTTON-----------*/
    var quality = $('.quality');
    var playIcon = $('.ic');

        playIcon.hide();

        quality.click(function(){

            var $next = $(this).find(playIcon);

                if($(this).hasClass('quality-click')){
                    $(this).removeClass('active');
                    $next.show();
                }else{
                    quality.removeClass('quality-click');
                    $(this).addClass('active');
                    playIcon.hide();
                }

            $next.toggle('slow');
            $(this).toggleClass('quality-click');


    });
/*-----------END QUALITY BUTTON-----------*/

/*---------Rating----------*/

    $('.rating .star').hover(function() {
        $(this).addClass('to_rate');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
    })
    .mouseout(function() {
        $(this).parent().find('.star').removeClass('to_rate');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
    })
    .click(function() {
        $(this).removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
        $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
    });

/*---------End Rating----------*/

});

/*----------------SLIDER-------------------*/


    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive : [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

/*----------------END SLIDER------------*/