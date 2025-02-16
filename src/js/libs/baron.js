// Підключення функціоналу "Чортоги Фрілансера"
// import { isMobile, _slideUp, _slideDown, _slideToggle, FLS } from "../files/functions.js";
// import { flsModules } from "../files/modules.js";
// import { formValidate } from "../files/forms/forms.js";




import baron from 'baron';

// // Находим все элементы с классом .baron
// const baronElementsH = document.querySelectorAll('.baron-h');

// // Перебираем каждый элемент и инициируем Baron
// baronElementsH.forEach(function (element) {
//   window.addEventListener('load', function () {
// 		var baronScroller = baron({
// 			direction: 'h',
// 			root: element, // Используем текущий элемент как корневой для Baron
// 			scroller: '.baron-h__scroller',
// 			bar: '.baron-h__bar'
// 		}).autoUpdate();
//   });
// });


// Находим все элементы с классом .baron
const baronElements = document.querySelectorAll('.baron');

// Перебираем каждый элемент и инициируем Baron
baronElements.forEach(function (element) {
  window.addEventListener('load', function () {
		var baronScroller = baron({
			root: element, // Используем текущий элемент как корневой для Baron
			scroller: '.baron__scroller',
			bar: '.baron__bar'
		}).autoUpdate();
  });
});


// // Находим все элементы с классом .baron-h
// const baronElementsH = document.querySelectorAll('.baron-h');

// // Функция для инициализации Baron
// function initBaron() {
//   if (window.matchMedia("(max-width: 991.98px)").matches) {
//     // Перебираем каждый элемент и инициируем Baron
//     baronElementsH.forEach(function (element) {
//       var baronScroller = baron({
//         direction: 'h',
//         root: element, // Используем текущий элемент как корневой для Baron
//         scroller: '.baron-h__scroller',
//         bar: '.baron-h__bar'
//       }).autoUpdate();
//     });
//   }
// }

// // Выполняем инициализацию при загрузке страницы
// window.addEventListener('load', initBaron);

// // Выполняем инициализацию при изменении размера окна
// window.addEventListener('resize', initBaron);



// Находим все элементы с классом .baron-h
const baronElementsH = document.querySelectorAll('.baron-h');
let baronInstances = [];

function initializeBaron() {
  if (window.matchMedia("(max-width: 991.98px)").matches) {
    baronElementsH.forEach(function (element) {
      // Проверяем, не был ли Baron уже инициализирован для этого элемента
      if (!element.dataset.baronInitialized) {
        const baronInstance = baron({
          direction: 'h',
          root: element, // Используем текущий элемент как корневой для Baron
          scroller: '.baron-h__scroller',
          bar: '.baron-h__bar'
        }).autoUpdate();

        baronInstances.push(baronInstance);
        element.dataset.baronInitialized = true;
      }
    });
  } else {
    // Деинициализируем все экземпляры Baron для экранов шире 992px
    baronInstances.forEach(instance => instance.dispose());
    baronInstances = [];

    // Убираем флаг инициализации с элементов
    baronElementsH.forEach(element => {
      delete element.dataset.baronInitialized;
    });
  }
}

// Инициализация при загрузке страницы
window.addEventListener('load', initializeBaron);

// Повторная инициализация при изменении размера окна
window.addEventListener('resize', initializeBaron);




	// window.addEventListener(handleEvent, { passive: false });

//  $('.baron').baron({
// 	direction: 'h',
//         root: '.baron',
//         scroller: '.baron__scroller',
//         bar: '.baron__bar'
//       }).autoUpdate();