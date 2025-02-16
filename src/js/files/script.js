// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
if (window.innerWidth > 991.98) {
  const dataHover = document.querySelectorAll('[data-hover]');
  dataHover.forEach(dropdown => {
      // получаем элементы, которые нужно скрыть при уходе мыши
      const dropDownBtn = dropdown.querySelector('[data-button]');
      const dropDownList = dropdown.querySelector('[data-list]');
     // Клик по кнопке. Открыть/Закрыть select
     dropDownBtn.addEventListener('mouseenter', function (e) {
        dropDownList.classList.add('visible');
        this.classList.add('active');
        this.parentElement.classList.add('active');
        document.documentElement.classList.add('in');
       //  document.documentElement.classList.add('lock');
     });
    dropdown.addEventListener('mouseout', event => {
      // проверяем, находится ли курсор мыши внутри элемента dropdown
      if (!dropdown.contains(event.relatedTarget)) {
        // скрываем элементы, если они отображены
        if (dropDownList.classList.contains('visible')) {
          dropDownList.classList.remove('visible');
          dropDownBtn.classList.remove('active');
          dropDownBtn.parentElement.classList.remove('active');
          document.documentElement.classList.remove('in');
         //  document.documentElement.classList.remove('lock');
        }
      }
    });
  });
}
//====================================================================================================
// Получаем все элементы с классом 'search__input'
const searchInputs = document.querySelectorAll('.search__input');
if(searchInputs) {
   // Перебираем каждый элемент и привязываем к нему обработчики событий
   searchInputs.forEach((searchInput) => {
   const clearInputBtn = searchInput.closest('.search__form').querySelector('.search__clear');
   if (searchInput && clearInputBtn) {
      // Функция для очистки поля ввода
      function clearInput() {
         searchInput.value = '';
         clearInputBtn.classList.remove('visible');
      }
      searchInput.addEventListener('input', () => {
         const inputValue = searchInput.value.trim().toLowerCase();
         clearInputBtn.classList.add('visible');
         // Если поле ввода пустое, выходим из функции
         if (!inputValue) {
         return;
         }
      });
      clearInputBtn.addEventListener('click', clearInput);
   }
   });
}
//====================================================================================================
window.addEventListener('DOMContentLoaded', function() {
  var inputField = document.querySelector('.search__input');
  var placeholderElement = document.querySelector('.search__placeholder');
  function setPlaceholder() {
      if (window.innerWidth > 991.98) {
          var placeholderText = placeholderElement.dataset.desktop;
      } else {
          var placeholderText = placeholderElement.dataset.mobile;
      }
      if (inputField && placeholderText) {
          inputField.setAttribute('placeholder', placeholderText);
      }
  }
  if (placeholderElement) {
      setPlaceholder();
      window.addEventListener('resize', function() {
          setPlaceholder();
      });
  }
});
//====================================================================================================
// Проверяем, есть ли элемент с классом "contacts"
var includeElement = document.querySelector('.main');
// Если элемент существует, добавляем класс "inverse" к HTML
if (includeElement) {
  document.documentElement.classList.add('wh');
}
//====================================================================================================
// Теперь функция copyProductCode доступна для вызова из любого места в коде
// Глобальная функция для копирования кода товара
// function copyProductCode(button) {
//   var productCopy = button.closest('.product__copy');
//   var productCodeElement = productCopy.querySelector('.product__code');
//   var productCodeText = productCodeElement.textContent || productCodeElement.innerText;
//   var tempInput = document.createElement('input');
//   tempInput.value = productCodeText;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand('copy');
//   document.body.removeChild(tempInput);
//   // Добавляем класс 'done'
//   productCopy.classList.add('done');
//   // Устанавливаем таймер для удаления класса 'done' через 1 минуту (60000 миллисекунд)
//   setTimeout(function () {
//       productCopy.classList.remove('done');
//   }, 1000);
// }
// // Глобальная функция для обработчика события при загрузке контента
// // function initCopyProductCode() {
// window.initCopyProductCode = function() {
//   // Находим все элементы с классом .product__icon
//   var iconButtons = document.querySelectorAll('.product__icon');
//   if(iconButtons) {
//     // Добавляем обработчик события для каждой кнопки
//     iconButtons.forEach(function(button) {
//       button.addEventListener('click', function() {
//         copyProductCode(button);
//       });
//     });
//   }
// }
// // Вызываем функцию для обработчика события при загрузке контента
// document.addEventListener("DOMContentLoaded", initCopyProductCode);
function copyProductCode(button) {
  var productCopy = button.closest('.product__copy');
  var productCodeElement = productCopy.querySelector('.product__code');
  var productCodeText = productCodeElement.textContent || productCodeElement.innerText;
  // Создаем временный контейнер
  var tempContainer = document.createElement('div');
  tempContainer.style.position = 'absolute';
  tempContainer.style.left = '-9999px';
  // Создаем временный input
  var tempInput = document.createElement('input');
  tempInput.value = productCodeText;
  // Добавляем временный input в контейнер
  tempContainer.appendChild(tempInput);
  document.body.appendChild(tempContainer);
  // Выделяем текст в input и копируем его
  tempInput.select();
  document.execCommand('copy');
  // Удаляем временный контейнер
  document.body.removeChild(tempContainer);
  // Добавляем класс 'done'
  productCopy.classList.add('done');
  // Устанавливаем таймер для удаления класса 'done' через 1 секунду (1000 миллисекунд)
  setTimeout(function () {
      productCopy.classList.remove('done');
  }, 1000);
}
// Глобальная функция для обработчика события при загрузке контента
window.initCopyProductCode = function() {
  // Находим все элементы с классом .product__icon
  var iconButtons = document.querySelectorAll('.product__icon');
  if (iconButtons) {
      // Добавляем обработчик события для каждой кнопки
      iconButtons.forEach(function(button) {
          button.addEventListener('click', function() {
              copyProductCode(button);
          });
      });
  }
}
// Вызываем функцию для обработчика события при загрузке контента
document.addEventListener("DOMContentLoaded", initCopyProductCode);
//====================================================================================================
// // Модуль прокручування до блоку
// import { gotoBlock } from "../files/scroll/gotoblock.js";
// // Функция для выполнения gotoBlock с задержкой
// function executeGotoBlock(parent) {
//   gotoBlock(parent.querySelector('.filters__item'), true, 1000);
// }
// // Функция для отслеживания изменений DOM
// function observeDOMChanges(callback) {
//   const observer = new MutationObserver(callback);
//   observer.observe(document, { subtree: true, childList: true });
// }
// // Функция, которая будет вызываться при изменении DOM
// function onChangeDOM(mutationsList) {
//   console.log("DOM изменения произошли:");
//   mutationsList.forEach(mutation => {
//       mutation.removedNodes.forEach(node => {
//           if (node.classList && node.classList.contains('filters__block') && !node.classList.contains('_showmore-active')) {
//               console.log("Удален элемент с классом filters__block без класса _showmore-active");
//               // Находим родителя filters__item
//               const parentItem = node.closest('.filters__item');
//               if (parentItem) {
//                   setTimeout(() => executeGotoBlock(parentItem), 500);
//               }
//           }
//       });
//   });
// }
// // Начинаем отслеживать изменения DOM
// observeDOMChanges(onChangeDOM);
//====================================================================================================
// // Модуль прокручування до блоку
// import { gotoBlock } from "../files/scroll/gotoblock.js";
//   // Функция для выполнения gotoBlock с задержкой
//   function executeGotoBlock() {
//     gotoBlock('._showmore-active', true, 1000);
// }
// // Наблюдаем за контейнером tabs-services
// const container = document.querySelector('.product-reviews__wrapper');
// if(container) {
// // Функция, которая будет вызываться при изменении DOM
// function handleMutation(mutationsList, observer) {
//     // Проверяем, есть ли добавление класса _tab-active
//     mutationsList.forEach(mutation => {
//         if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//             if (!mutation.target.classList.contains('_showmore-active')) {
//                 // Выполняем ваш код с задержкой в 3 секунды
//                 setTimeout(executeGotoBlock, 500);
//             }
//         }
//     });
// }
// // Создаем новый экземпляр MutationObserver и назначаем ему функцию обратного вызова
// const observer = new MutationObserver(handleMutation);
// observer.observe(container, { attributes: true, subtree: true, attributeFilter: ['class'] });
// }
//====================================================================================================
// Модуль прокручування до блоку
import { gotoBlock } from "../files/scroll/gotoblock.js";
  // Функция для выполнения gotoBlock с задержкой
  function executeGotoBlock() {
    gotoBlock('.product-reviews', true, 200);
}
// Наблюдаем за контейнером tabs-services
const filtersList = document.querySelector('.product-reviews__wrapper');
if(filtersList) {
// Функция, которая будет вызываться при изменении DOM
function handleMutation(mutationsList, observer) {
    // Проверяем, есть ли добавление класса _tab-active
    mutationsList.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (mutation.target.classList.contains('_scroll-active')) {
                // Выполняем ваш код с задержкой в 3 секунды
                console.log('gotoBlock')
                setTimeout(executeGotoBlock, 500);
            }
        }
    });
}
// Создаем новый экземпляр MutationObserver и назначаем ему функцию обратного вызова
const observer = new MutationObserver(handleMutation);
observer.observe(filtersList, { attributes: true, subtree: true, attributeFilter: ['class'] });
}
//====================================================================================================
window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(function () {
    const anchors = document.querySelectorAll('a[href^="#"]');
      const header = document.querySelector('header').offsetHeight;
      const heightMin = header + 10;
      for ( let i = 0; i < anchors.length; i++ ) {
      anchors[i].addEventListener('click', (e) => {
         e.preventDefault();
        //  menuClose();
        //  const isOpen = document.documentElement.classList.contains("menu-open");
        //  if (isOpen) {
        //      menuClose();
        //  }
         const href= anchors[i].getAttribute("href");
         const target = document.getElementById(href.replace('#', ''));
         const position = window.pageYOffset + target.getBoundingClientRect().top - heightMin;
         window.scroll({
         top: position,
         behavior: 'smooth'
         });
      });
      }
    }, 250);
});
//====================================================================================================
document.querySelectorAll('[data-dropdown]').forEach(function (dropDownWrapper) {
  const dropDownBtn = dropDownWrapper.querySelector('[data-dropdown-button]');
  const dropDownList = dropDownWrapper.querySelector('[data-dropdown-list]');
  const dropDownListItems = dropDownList.querySelectorAll('[data-dropdown-item]');
  // const dropDownInput = dropDownWrapper.querySelector('[data-dropdown-input]');
  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
     dropDownList.classList.toggle('visible');
     this.classList.toggle('active');
  });
  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach(function (listItem) {
     listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownBtn.setAttribute('data-value', this.dataset.value);
        dropDownBtn.focus();
        // dropDownInput.setAttribute('value', this.dataset.value);
        dropDownList.classList.remove('visible');
        dropDownBtn.classList.remove('active');
        // Trigger input event
        // dropDownInput.value = this.dataset.value;
        // dropDownInput.dispatchEvent(new Event('input'));
        // console.log(dropDownInput.dispatchEvent(new Event('input')));
     });
  });
  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', function (e) {
     // if (e.target !== dropDownBtn) {
     if (!dropDownBtn.contains(e.target)) {
        dropDownBtn.classList.remove('active');
        dropDownList.classList.remove('visible');
     }
  });
  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', function (e) {
     if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('dropdown__button--active');
        dropDownList.classList.remove('dropdown__list--visible');
     }
  });
});
//====================================================================================================

const formOrderBlock = document.querySelector(".form-order__block");
if(formOrderBlock) {
  document.addEventListener("DOMContentLoaded", function() {
    const type1 = document.getElementById("type-1");
    const type2 = document.getElementById("type-2");
    const addressField = document.querySelector(".form__data--address");
    const departmentField = document.querySelector(".form__data--department");

    function toggleFields() {
        if (type1.checked) {
            addressField.classList.add("hide");
            departmentField.classList.remove("hide");
        } else if (type2.checked) {
            addressField.classList.remove("hide");
            departmentField.classList.add("hide");
        }
    }

    // Добавляем обработчики событий для радио-кнопок
    type1.addEventListener("change", toggleFields);
    type2.addEventListener("change", toggleFields);

    // Устанавливаем начальное состояние
    toggleFields();
  });
}
//====================================================================================================
// document.addEventListener("DOMContentLoaded", function() {
//   const popupFeedback = document.getElementById('popup-feedback');
//   const formStarRating = document.querySelector('.form__star-rating');

//   // Функция для прокрутки к блоку с ошибкой
//   function scrollToErrorBlock() {
//     popupFeedback.scrollIntoView({ behavior: 'smooth', block: 'center' });
//   }

//   // MutationObserver для отслеживания добавления класса _form-error
//   const observer = new MutationObserver(function(mutationsList) {
//       for (const mutation of mutationsList) {
//           if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
//               if (formStarRating.classList.contains('_form-error')) {
//                   scrollToErrorBlock();
//               }
//           }
//       }
//   });

//   observer.observe(formStarRating, { attributes: true });
// });


const popupFeedback = document.getElementById('popup-feedback');
if(popupFeedback) {
  document.addEventListener("DOMContentLoaded", function() {
    const formStarRating = document.querySelector('.form__star-rating');

    // Функция для имитации свайпа вверх
    function simulateSwipeUp(element) {
      element.scrollBy({
        top: -window.innerHeight / 3, // Прокручиваем вверх на половину высоты экрана
        left: 0,
        behavior: 'smooth'
      });
    }

    // MutationObserver для отслеживания добавления класса _form-error
    const observer = new MutationObserver(function(mutationsList) {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          if (formStarRating.classList.contains('_form-error')) {
            simulateSwipeUp(popupFeedback);
          }
        }
      }
    });

    observer.observe(formStarRating, { attributes: true });
  });
}
