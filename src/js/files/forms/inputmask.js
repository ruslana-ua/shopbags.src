/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import "inputmask/dist/inputmask.min.js";


const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
  inputMasks.forEach((input) => {
    Inputmask({
      mask: "+38(999)-999-99-99",
      // placeholder: "",
      showMaskOnHover: false,
    }).mask(document.querySelectorAll('.phone-mask'));
  });
}