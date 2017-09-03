'use strict';

/*
* ********************************************
* Button Up to Top
* ********************************************
* */
var $btnTop = $(".btn-top");
$(window).on("scroll", function() {
	if($(window).scrollTop() >= 150)
		$btnTop.fadeIn();
	else
		$btnTop.fadeOut();
});
$btnTop.on("click", () => {
	$("html,body").animate({scrollTop:0}, 900);
});

$btnTop.hover(
    function() {
        $( this ).addClass( "fa-2x" );
    },
    function() {
        $( this ).removeClass( "fa-2x" );
    }
);



/*
 * ********************************************
 * Anchor scrol
 * ********************************************
 * */
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
});


var workers = [
		{
			"id": 1,
			"position":"Директор",
			"firstName":"Євген",
			"surName":"Грібачов",
			"patronymic":"Сергійович",
			"img": ""
		},
		{
			"id": 2,
			"position":"Заступник директора",
			"firstName":"Галина",
			"surName":"Стець",
			"patronymic":"Василівна"
		},
		{
			"id": 3,
			"position":"Головний бухгалтер",
			"firstName":"Ірина",
			"surName":"Титикало",
			"patronymic":"Володимирівна"
		},
		{
			"id": 4,
			"position":"Менеджер (управитель) з адміністративної діяльності",
			"firstName":"Вікторія",
			"surName":"Решеткіна",
			"patronymic":"Володимирівна"
		},
		{
			"id": 5,
			"position":"Провідний фахівець із зв`язків з громадськістю та пресою",
			"firstName":"Ірина",
			"surName":"Юміна",
			"patronymic":"Володимирівна"
		},
		{
			"id": 6,
			"position":"Фахівець з екологічної освіти",
			"firstName":"Дана",
			"surName":"Марценюк",
			"patronymic":"Мирославівна"
		},
		{
			"id": 7,
			"position":"Головний біолог",
			"firstName":"Ігор",
			"surName":"Оболешев",
			"patronymic":"Олександрович"
		},
		{
			"id": 8,
			"position":"Біолог",
			"firstName":"Олексій",
			"surName":"Сербін",
			"patronymic":"Іванович"
		},
		{
			"id": 9,
			"position":"Фахівець",
			"firstName":"Володимир",
			"surName":"Кононець",
			"patronymic":"Іванович"
		},
	];

console.log(workers[1].position);

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
		dots: false
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