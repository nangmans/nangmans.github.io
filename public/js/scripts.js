
    (function ($) {
    "use strict"; 


    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });


    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });


    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    navbarCollapse();
    $(window).scroll(navbarCollapse);
})(jQuery); 

document.getElementById("blog").addEventListener("click", function(){
    window.location = 'https://nangman14.tistory.com/';
    });

document.getElementById("daeran").addEventListener("click", function(){
    window.location = 'http://awsdjangoboard.eba-bspdpztp.ap-northeast-2.elasticbeanstalk.com/boardapp/';
    });

document.getElementById("imagenation").addEventListener("click", function(){
    window.location = 'http://imagenation.ap-northeast-2.elasticbeanstalk.com/';
    });
    
