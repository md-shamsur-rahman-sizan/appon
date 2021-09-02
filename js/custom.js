$(document).ready(function(){


// =============== MAIN PART START =============== //

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        if(scrolling > 100){
            $("#menu").addClass('menu-background');
        }
        else{
            $("#menu").removeClass('menu-background');
        }
        if(scrolling > 50){
            $(".back-to-top").fadeIn(800);
        }
        else{
            $(".back-to-top").fadeOut(800);
        }
    });


    // =============== BACK TO TOP PART START =============== //

    $(".back-to-top").click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1750);
    });

    // =============== BACK TO TOP PART END =============== //


    // =============== SLICK SLIDER PART START =============== //

    // ========== BANNER SLICK PART START ========== //
    
    $('.banner-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
    });
    
    document.getElementById("slick-slide-control00").innerHTML = '<i class="fas fa-home"></i>';

    // ========== BANNER SLICK PART END ========== //


    // ========== SCREENSHOT SLICK PART START ========== //

    $('.screenshot-slick').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive:[
            {
            breakpoint: 992,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: true
                }
            },
            {
            breakpoint: 768,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true
                }
            },
            {
            breakpoint: 576,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
                }
            },
        ]
    });

    // ========== SCREENSHOT SLICK PART END ========== //


    // ========== FEEDBACK SLICK PART START ========== //
    
    $('.feedback-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.feedback-nav',
    });
    $('.feedback-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.feedback-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive:[
            {
            breakpoint: 576,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
                }
            },
        ]
    });

    // ========== FEEDBACK SLICK PART START ========== //


    // =============== SLICK SLIDER PART END =============== //


    // =============== SCROLL ANIMATION PART START =============== //

    var html_body = $('html, body');
        $('.navbar .navbar-nav .nav-link').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    html_body.animate({
                        scrollTop: target.offset().top - 0
                    }, 1500,);
                    return false;
                }
            }
        });

    // =============== SCROLL ANIMATION PART END =============== //


    // =============== VENOBOX PART START =============== //

    $('.venobox').venobox();

    // =============== VENOBOX PART END =============== //


    // =============== PRELOADER PART START =============== //

    $(window).on('load', function(){
        $(".preloader").delay(500).fadeOut(800);
    });

    // =============== PRELOADER PART END =============== //


    // =============== THEME PART START =============== //

    $(".theme-button").click(function(){
        $('html,body').toggleClass('dark-theme');

        if(document.body.classList.contains("dark-theme")){
            $(".dark-mode").delay(50).fadeOut(100);
        }
        else{
            $(".dark-mode").delay(100).fadeIn(150);
        }
        if(document.body.classList.contains("dark-theme")){
            $(".light-mode").delay(100).fadeIn(150);
        }
        else{
            $(".light-mode").delay(50).fadeOut(100);
        }
    });


    // ========== COLOERS THEME PART START ========== //

    $(".blue-color").click(function(){
        $('html,body').toggleClass('blue-theme');
        $('html,body').removeClass('green-theme');
        $('html,body').removeClass('violet-theme');

        var logo = document.getElementById("logo");
        var footerlogo = document.getElementById("footer-logo");
        var aboutimage = document.getElementById("about-image");
    
        if(document.body.classList.contains("blue-theme")){
            logo.src = "images/logo-blue.png";
        }
        else{
            logo.src = "images/logo.png";
        }
        if(document.body.classList.contains("blue-theme")){
            footerlogo.src = "images/logo-blue.png";
        }
        else{
            footerlogo.src = "images/logo.png";
        }
        if(document.body.classList.contains("blue-theme")){
            aboutimage.src = "images/about-image-blue.jpg";
        }
        else{
            aboutimage.src = "images/about-image.jpg";
        }
    });

    $(".green-color").click(function(){
        $('html,body').toggleClass('green-theme');
        $('html,body').removeClass('blue-theme');
        $('html,body').removeClass('violet-theme');

        var logo = document.getElementById("logo");
        var footerlogo = document.getElementById("footer-logo");
        var aboutimage = document.getElementById("about-image");
    
        if(document.body.classList.contains("green-theme")){
            logo.src = "images/logo-green.png";
        }
        else{
            logo.src = "images/logo.png";
        }
        if(document.body.classList.contains("green-theme")){
            footerlogo.src = "images/logo-green.png";
        }
        else{
            footerlogo.src = "images/logo.png";
        }
        if(document.body.classList.contains("green-theme")){
            aboutimage.src = "images/about-image-green.jpg";
        }
        else{
            aboutimage.src = "images/about-image.jpg";
        }
    });

    $(".violet-color").click(function(){
        $('html,body').toggleClass('violet-theme');
        $('html,body').removeClass('blue-theme');
        $('html,body').removeClass('green-theme');

        var logo = document.getElementById("logo");
        var footerlogo = document.getElementById("footer-logo");
        var aboutimage = document.getElementById("about-image");
    
        if(document.body.classList.contains("violet-theme")){
            logo.src = "images/logo.png";
        }
        else{
            logo.src = "images/logo.png";
        }
        if(document.body.classList.contains("violet-theme")){
            footerlogo.src = "images/logo.png";
        }
        else{
            footerlogo.src = "images/logo.png";
        }
        if(document.body.classList.contains("violet-theme")){
            aboutimage.src = "images/about-image.jpg";
        }
        else{
            aboutimage.src = "images/about-image.jpg";
        }
    });

    // ========== COLOERS THEME PART END ========== //


    // =============== THEME PART END =============== //


// =============== MAIN PART START =============== //


});