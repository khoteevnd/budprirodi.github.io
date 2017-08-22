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
		items:4,
		center: true,
		margin:30,
		stagePadding:30,
		smartSpeed:1000,
		nav: true,
		navText: [
			"<i class=\"fa fa-5x fa-angle-left\" aria-hidden=\"true\"></i>",
			"<i class=\"fa fa-5x fa-angle-right\" aria-hidden=\"true\"></i>"
		],
		dots: true,
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

//MAP: Animate
$(function(){
	$('.map').hover(
		function() {
			$('.center')
				.removeClass('zoomIn animated')
				.addClass('zoomOut animated');
			$('.overley')
				.removeClass('opacityIn animated')
				.addClass('opacityOut animated');
		},
		function() {
			$('.center')
				.removeClass('zoomOut animated')
				.addClass('zoomIn animated');
			$('.overley')
				.removeClass('opacityOut animated')
				.addClass('opacityIn animated');
		}
	);
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