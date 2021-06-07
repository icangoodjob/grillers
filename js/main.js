const slider = document.querySelector('.slider__container');
const slider2 = document.querySelector('.slider__container-2');
const slider3 = document.querySelector('.slider__container-3');
const slider4 = document.querySelector('.slider__container-4');

let mobileSwiper;
let mobileSwiper2;
let mobileSwiper3;
let mobileSwiper4;
function mobSwiper() {
	if (window.innerWidth <= 991 && slider.dataset.mobile == 'false'){
		mobileSwiper = new Swiper(slider, {
			slidesPerView: 1,
			slidesPerGroup: 1,
			loop: true,
			spaceBetween: 20,
			slideClass: 'index__works__col',
			initialSlide: 0, 
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
			320: {
				slidesPerView: 1.2,
			},
		},	
			// 767: {
			// 	slidesPerView: 1.5,
			// },
		});
		mobileSwiper2 = new Swiper(slider2, {
			loop: true,
			spaceBetween: 20,
			slideClass: 'index__news__col',
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				300: {
					slidesPerView: 'auto',
				},
				375: {
					slidesPerView: 1.5,
				},
				580: {
					slidesPerView: 1.8,
				},
				767: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 2,
				},
			},
		});
		mobileSwiper3 = new Swiper(slider3, {
			loop: true,
			spaceBetween: 20,
			slideClass: 'index__product__col',
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				300: {
					slidesPerView: 'auto',
				},
				375: {
					slidesPerView: 1.5,
				},
				767: {
					slidesPerView: 2,
				},
			},
		});
		mobileSwiper4 = new Swiper(slider4, {
			loop: true,
			spaceBetween: 20,
			slideClass: 'index__client__col',
			pagination: {
				el: ".slider__pagination",
				type: "progressbar",
			},
			breakpoints: {
				300: {
					slidesPerView: 'auto',
				},
				375: {
					slidesPerView: 1.5,
				},
				580: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 3,
				},
			},
		});
		slider.dataset.mobile = 'true';
		slider2.dataset.mobile = 'true';
		slider3.dataset.mobile = 'true';
		slider4.dataset.mobile = 'true';
	}
	if (window.innerWidth > 991) {
		slider.dataset.mobile = 'false';
		slider2.dataset.mobile = 'false';
		slider3.dataset.mobile = 'false';
		slider4.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')){
			mobileSwiper.destroy();
			mobileSwiper2.destroy();
			mobileSwiper3.destroy();
			mobileSwiper4.destroy();
		}
	}
}
mobSwiper();
window.addEventListener('resize', () => {
	mobSwiper();
});

// ОКНО ВЫЗОВА КАТАЛОГА
$('#header__catalog').click(function(){
	$('.catalog__window').toggleClass('active');
	$('.overlay').toggleClass('active');
})

// Плавная прокрутка страницы на самый верх
$(function() {
	$('.go-up__btn').click(function(){
		$('html, body').animate({scrollTop: 0}, 3000);
	});
});

// Меню Burger
$(document).ready(function() {
	$('.burger').click(function(event) {
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
		$('.adaptive__logo').toggleClass('active');
		$('.header__top').toggleClass('white');
		$('.adaptive__user__btn').toggleClass('black');
		$('.adaptive__basket__btn').toggleClass('black');
	});
});

// Каталог адаптив
const catalogBtn = document.querySelector('.menu__link_catalog'),
subMenuCatalog = document.querySelector('.sub-menu__catalog');

catalogBtn.addEventListener('click', function(e){
	e.preventDefault();
	this.classList.toggle('active');
	subMenuCatalog.classList.toggle('active');
});