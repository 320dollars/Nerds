'use strict';

/*Валидация*/
var modalWrite = document.querySelector('.write-us_block');
var emailInput = modalWrite.querySelector('.write__email');
var textInput = modalWrite.querySelector('.write__text');
var form = modalWrite.querySelector('.write__info');

form.addEventListener('submit', function(evt){
  if (!nameInput.value || !emailInput.value || !textInput.value ) {
    evt.preventDefault();
    modalWrite.classList.add('write--error');
    setTimeout(function (){modalWrite.classList.remove('write--error');}, 700);
  }
  if (!nameInput.value || nameInput.value < 2) {
    nameInput.classList.add('write--unvalid');
  }
  if (!emailInput.value) {
    emailInput.classList.add('write--unvalid');
  }
  if (!textInput.value) {
    textInput.classList.add('write--unvalid');
  }
});

/*Вывод значения range*/
var firstRange = document.querySelector('#range1');
var secondRange = document.querySelector('#range2');
var firstResult = document.querySelector('#result1');
var secondResult = document.querySelector('#result2');

var getRangeValue = function (range, output) {
  range.addEventListener('input', function () {
    output.innerHTML = range.value;
  });
}

getRangeValue(firstRange, firstResult);
getRangeValue(secondRange, secondResult);

/*Открытие-закрытие  модального окна*/
var PRESS_ESC = 27;
var writeBtn = document.querySelector('.contacts__btn');
var modalWrite = document.querySelector('.write-us_block');
var nameInput = modalWrite.querySelector('.write__name');
var modalCloseBtn = modalWrite.querySelector('.write__btn--close');

writeBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  modalWrite.classList.add('write-us_block--show');
  nameInput.focus();
});

modalCloseBtn.addEventListener('click', function(){
  modalWrite.classList.remove('write-us_block--show');
});

window.addEventListener('keydown', function(evt){
  if (evt.keyCode === PRESS_ESC) {
    modalWrite.classList.remove('write-us_block--show');
  }
});
