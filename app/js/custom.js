'use strict';
//PRELOADER
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

//OWL-CAROUSEL SETTINGS
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        center: true,
        margin:30,
        stagePadding:30,
        smartSpeed:450,
        nav: true,
        dots: true
    });
});


/*
 function myresize() {
		var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("header").style.width = w - document.getElementById("nav").style.width + "px";
    document.getElementById("header").style.height = h - document.getElementById("nav").style.height + "px";
    //console.log(w + " " + h);
}
 document.addEventListener("DOMContentLoaded", mysize);
 */