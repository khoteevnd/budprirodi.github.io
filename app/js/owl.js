//OWL-CAROUSEL SETTINGS
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        autoWidth:true,
        items:1,
        center: true,
        margin:30,
        stagePadding:30,
        smartSpeed:1000,
        nav: true,
        navText: [
            "<i class=\"fa fa-3x fa-angle-left\" aria-hidden=\"true\"></i>",
            "<i class=\"fa fa-3x fa-angle-right\" aria-hidden=\"true\"></i>"
        ],
        dots: true
    });
});
//OWL-CAROUSEL BTN Animate
$(function(){
    $('.owl-prev').hover(
        function() {
            $('.owl-prev')
                .removeClass('opacityIn animated')
                .addClass('opacityOut animated');
        },
        function() {
            $('.owl-prev')
                .removeClass('opacityOut animated')
                .addClass('opacityIn animated');
        }
    );
    $('.owl-next').hover(
        function() {
            $('.owl-next')
                .removeClass('opacityIn animated')
                .addClass('opacityOut animated');
        },
        function() {
            $('.owl-next')
                .removeClass('opacityOut animated')
                .addClass('opacityIn animated');
        }
    );
});