$(document).ready(function() {

    var scroll = $(this).scrollTop();
    $('.top-dir').hide();
    $('.bottom-dir').hide();
    $(window).scroll(function () {
        $(".wheel").css("display", "block").fadeOut("slow");
        if(scroll < $(this).scrollTop()) {
            $('.bottom-dir').fadeIn(400);
            $('.top-dir').hide();
        }
        else {
            $('.top-dir').fadeIn(400);
            $('.bottom-dir').hide();
        }
        scroll = $(this).scrollTop();
    });


    var topTop = $("#top").offset().top, topAbout = $("#about").offset().top, topWorks = $("#works").offset().top, topTeam = $("#team").offset().top, topBlog = $("#blog").offset().top;
    $('#nav li:nth-child(1) a').addClass('active');
    $(window).scroll(function(){
        switch (true) {
            case($(window).scrollTop() >= topTop && $(window).scrollTop() < topAbout):
                $('#nav li a:not(#nav li:nth-child(1) a)').removeClass('active');
                $('#nav li:nth-child(1) a').addClass('active');
                break;
            case($(window).scrollTop() >= topAbout && $(window).scrollTop() < topWorks):
                $('#nav li a:not(#nav li:nth-child(2) a)').removeClass('active');
                $('#nav li:nth-child(2) a').addClass('active');
                break;
            case($(window).scrollTop() >= topWorks && $(window).scrollTop() < topTeam):
                $('#nav li a:not(#nav li:nth-child(3) a)').removeClass('active');
                $('#nav li:nth-child(3) a').addClass('active');
                break;
            case($(window).scrollTop() >= topTeam && $(window).scrollTop() < topBlog):
                $('#nav li a:not(#nav li:nth-child(4) a)').removeClass('active');
                $('#nav li:nth-child(4) a').addClass('active');
                break;
            case($(window).scrollTop() >= topBlog):
                $('#nav li a:not(#nav li:nth-child(5) a)').removeClass('active');
                $('#nav li:nth-child(5) a').addClass('active');
                break;
        }
    });


    $("#nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".burger-icon").click(function() {
        $(".burger-icon").fadeOut(200);
        $('.wrap-sidebar').addClass("open-sidebar");
    });

    $("#sidebar-toggle").click(function() {
        $(".burger-icon").fadeIn(400);
        $(".wrap-sidebar").removeClass("open-sidebar");
    });


    $('.header-fixed').hide();
    $(window).scroll(function(){
        if ($(window).scrollTop() > 144) {
            $('.header-fixed').fadeIn(400);
        } else if($(window).scrollTop() < 144) {
            $('.header-fixed').hide();
        }
    });


    $(".wrap-slider").children(".owl-carousel").owlCarousel(
        {
            loop: true,
            mouseDrag: false,
            margin: 0,
            responsiveClass: true,
            animateIn: 'fadeIn',
            smartSpeed:1000,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }
        }
    );

    $(".clients-slider").children(".owl-carousel").owlCarousel(
        {
            loop: true,
            stagePadding:50,
            responsiveClass: true,
            smartSpeed:1000,
            responsive: {
                0: {
                    items: 3,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false,
                }
            }
        }
    );
    $(".team-slider").children(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 0,
            mouseDrag: false,
            responsiveClass: true,
            animateIn: 'fadeIn',
            smartSpeed:1000,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }
        }
    );

    $(".google-maps").hide();
    $(".map").click(function () {
        $(".google-maps").slideToggle(400);
    });

    $('.f-logo').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});