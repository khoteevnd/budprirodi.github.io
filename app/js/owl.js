//OWL-CAROUSEL SETTINGS
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        //animateOut: 'slideOutDown',
        //animateIn: 'flipInX',
        loop:true,
        margin:30,
        nav: true,
        //autoWidth:true,
        items: 3,
        center: true,
        stagePadding: 30,
        smartSpeed: 500,
        navText: [
            "<i class=\"fa fa-3x fa-angle-left\" aria-hidden=\"true\"></i>",
            "<i class=\"fa fa-3x fa-angle-right\" aria-hidden=\"true\"></i>"
        ],
        dots: true
    });
});
//OWL-CAROUSEL BTN Animate
$(function(){
/*    $('.owl-prev').hover(
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
    );*/
});