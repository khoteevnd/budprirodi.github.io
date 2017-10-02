'use strict';

/*
* ********************************************
* Button Up to Top
* ********************************************
* */
var $btnTop = $(".btn-top");
$(window).on("scroll", () => {
	if($(window).scrollTop() >= 150)
		$btnTop.fadeIn();
	else
		$btnTop.fadeOut();
});

$btnTop.on("click", (event) => {
	console.log("click");
    event.preventDefault();
	$('html, body').animate({scrollTop:0}, 600);
});

/*
 * ********************************************
 * Anchor scroll
 * ********************************************
 * */
$(document).on('click', 'a', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 900);
});

function getJsonArray(){
	return JSON.parse(`[
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
			"position":"Провідний фахівець із зв\`язків з громадськістю та пресою",
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
		}
	]`);
};

//PRELOADER
$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});

//MAP: Animate

$('.map').hover(
    (event) => {
		$('.map-header > .center')
			.removeClass('zoomIn animated')
			.addClass('zoomOut animated');
		$('.map-header > .overley')
			.removeClass('opacityIn animated')
			.addClass('opacityOut animated');
	},
    (event) => {
		$('.map-header .center')
			.removeClass('zoomOut animated')
			.addClass('zoomIn animated');
		$('.map-header .overley')
			.removeClass('opacityOut animated')
			.addClass('opacityIn animated');
	}
);