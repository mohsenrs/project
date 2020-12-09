$(document).ready(function () {
    $(window).scroll(function () {

        if ($(window).scrollTop() > 100) {

            $("#header").addClass("sticky-top");

        } else {
            $("#header").removeClass("sticky-top");
        }

    });
    $("#header-btn").click(function () { 
        $("#nav").slideToggle("slow");
    });
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});