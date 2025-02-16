/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation,Mousewheel,EffectCards,Thumbs,EffectFade,FreeMode } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
	// 		// Підключаємо модулі слайдера
	// 		// для конкретного випадку
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		//autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }
	var productSliders = document.querySelectorAll('.product__slider');
	if(productSliders) {
		// Проходим по каждому слайдеру
		productSliders.forEach(function(productSlider) {
			// Создаем новый Swiper для текущего слайдера
			new Swiper(productSlider, {
					modules: [Navigation,Mousewheel,FreeMode],
					// slideToClickedSlide: true,
					observer: true,
					observeParents: true,
					spaceBetween: 0,
					speed: 800,
					// loop: true,
					freeMode: {
						enabled: true,
						sticky: false,
						momentumBounce: false,
					},
					// freeMode: {
					// 	enabled: true,
					// 	sticky: false,
					// 	momentumBounce: false,
					// },
					mousewheel: {
						enabled: true,
						sensitivity: 0.2,
						forceToAxis: true
					},
					navigation: {
							prevEl: '.product__swiper-button-prev',
							nextEl: '.product__swiper-button-next',
					},
					breakpoints: {
									0: {
										slidesPerView: 1.45,
										spaceBetween: 20,
										slidesPerGroup: 1,
										// autoHeight: true,
										// mousewheel: false,
										freeMode: {
											enabled: true,
											sticky: true,
											momentumBounce: false,
										},
									},
									768: {
										slidesPerView: 3.2,
										slidesPerGroup: 2,
										spaceBetween: 20,
										// mousewheel: false,
									},
									// 992: {
									// 	slidesPerView: 2.9,
									// 	spaceBetween: 20,
									// 	mousewheel: false,
									// },
									992: {
										slidesPerView: 4,
										spaceBetween: 24,
										slidesPerGroup: 4,
										// mousewheel: false,
									},
									// 1386: {
									// 	slidesPerView: 3.95,
									// 	spaceBetween: 20,
									// 	slidesPerGroup: 3,
									// 	// mousewheel: false,
									// },
					},
					on: {
							// Ваши события
					}
			});

		});
	}

	var reviewsSlider = document.querySelector('.reviews__slider');
	if(reviewsSlider) {
		new Swiper('.reviews__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation,EffectCards],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			// autoHeight: false,
			speed: 400,
			// grabCursor: true,

			// grabCursor: true,
			effect: "cards",
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			//lazy: true,
			grabCursor: true,
			centeredSlides: true,
			// slidesPerView: "auto",
			cardsEffect: {
				// perSlideOffset: 14.5,
				// perSlideOffset: 8,
				perSlideOffset: 10,
				perSlideRotate: 0,
				rotate: true,
				slideShadows: true,
			},

			// Ефекти
			// effect: 'fade',
			// autoplay: {
			// 	delay: 10000,
			// 	disableOnInteraction: false,
			// },
			// ex
			// Пагінація

			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },


			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.reviews__swiper-button-prev',
				nextEl: '.reviews__swiper-button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події

			on: {
				init: function (swiper) {
					const allSlides = document.querySelector('.reviews__fraction--all');
					const allSlidesItems = document.querySelectorAll('.reviews__slide:not(.swiper-slide-duplicate)');
					allSlides.innerHTML = allSlidesItems.length;
				},
				slideChange: function (swiper) {
					const currentSlide = document.querySelector('.reviews__fraction--current');
					currentSlide.innerHTML = swiper.realIndex + 1;
				}
			}

		});
	}



// var galleryMain;
// var galleryThumbs;

// function initSwipers() {
//     if (galleryMain) {
//         galleryMain.destroy(true, true);
//     }
//     if (galleryThumbs) {
//         galleryThumbs.destroy(true, true);
//         galleryThumbs = null;
//     }

//     let swiperParams = {
//         modules: [Navigation, Thumbs, EffectFade],
//         watchOverflow: true,
//         watchSlidesVisibility: true,
//         watchSlidesProgress: true,
//         preventInteractionOnTransition: true,
//         navigation: {
//             prevEl: '.breadcrumb__product--modrev',
//             nextEl: '.breadcrumb__product--next',
//         },
//         on: {
//             init: function (swiper) {
//                 const allSlides = document.querySelector('.gallery__fraction--all');
//                 const allSlidesItems = document.querySelectorAll('.gallery__slide--mob:not(.swiper-slide-duplicate)');
//                 allSlides.innerHTML = allSlidesItems.length;
//             },
//             slideChange: debounce(function (swiper) {
//                 const currentSlide = document.querySelector('.gallery__fraction--current');
//                 currentSlide.innerHTML = swiper.realIndex + 1;
//             }, 200) // Дебаунс с задержкой 200 миллисекунд
//         }
//     };

//     if (window.innerWidth >= 992) {
//         galleryThumbs = new Swiper(".gallery__thumbs", {
//             slidesPerView: 5,
//             watchOverflow: true,
//             spaceBetween: 11,
//             direction: 'vertical',
//         });

//         swiperParams.thumbs = {
//             swiper: galleryThumbs
//         };

//         swiperParams.slidesPerView = 1.1;
//         swiperParams.spaceBetween = 16;
//         swiperParams.effect = 'fade';
//         swiperParams.fadeEffect = { crossFade: true };
//     } else {
//         swiperParams.slidesPerView = 1.1;
//         swiperParams.spaceBetween = 16;
//         swiperParams.effect = 'slide';
//     }

//     galleryMain = new Swiper(".gallery__slider", swiperParams);
// }

// function debounce(func, wait) {
//     let timeout;
//     return function () {
//         const context = this, args = arguments;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => func.apply(context, args), wait);
//     };
// }

// initSwipers();

// window.addEventListener('resize', function () {
//     initSwipers();
// });




var galleryMain;
var galleryThumbs;

function initSwipers() {
    // Уничтожаем существующие экземпляры слайдеров, если они существуют
    if (galleryMain) {
        galleryMain.destroy(true, true);
    }
    if (galleryThumbs) {
        galleryThumbs.destroy(true, true);
        galleryThumbs = null; // Убираем ссылку на объект после уничтожения
    }

    // Определяем параметры galleryMain в зависимости от ширины экрана
    let swiperParams = {
        modules: [Navigation, Thumbs, EffectFade],
        watchOverflow: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        navigation: {
            prevEl: '.breadcrumb__product--prev',
            nextEl: '.breadcrumb__product--next',
        },
        on: {
            init: function (swiper) {
                const allSlides = document.querySelector('.gallery__fraction--all');
                const allSlidesItems = document.querySelectorAll('.gallery__slide--mob:not(.swiper-slide-duplicate)');
                allSlides.innerHTML = allSlidesItems.length;
            },
            transitionEnd: function (swiper) {
                const currentSlide = document.querySelector('.gallery__fraction--current');
                currentSlide.innerHTML = swiper.realIndex + 1;
            }
        }
    };

    // Проверяем ширину экрана и добавляем или удаляем миниатюры
    if (window.innerWidth >= 992) {
        galleryThumbs = new Swiper(".gallery__thumbs", {
            slidesPerView: 5,
            watchOverflow: true,
            spaceBetween: 11,
            direction: 'vertical',
        });

        swiperParams.thumbs = {
            swiper: galleryThumbs
        };

        swiperParams.slidesPerView = 1;
        swiperParams.spaceBetween = 16;
        swiperParams.effect = 'fade';
        swiperParams.fadeEffect = { crossFade: true };
    } else if (window.innerWidth >= 480) {
			swiperParams.slidesPerView = 1;
			swiperParams.spaceBetween = 16;
			swiperParams.effect = 'slide';
	} else {
			swiperParams.slidesPerView = 1.1;
			swiperParams.spaceBetween = 16;
			swiperParams.effect = 'slide';
	}

    // Инициализация galleryMain с заданными параметрами
    galleryMain = new Swiper(".gallery__slider", swiperParams);
}

// Инициализируем слайдеры при загрузке страницы
initSwipers();

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', function () {
    initSwipers();
});




}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});