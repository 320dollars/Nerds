'use strict';

var PRESS_ESC = 27;
var writeBtn = document.querySelector('.contacts__btn');
var modalWrite = document.querySelector('.write-us_block');
var nameInput = modalWrite.querySelector('.write__name');
var modalCloseBtn = modalWrite.querySelector('.write__btn--close');
var emailInput = modalWrite.querySelector('.write__email');
var textInput = modalWrite.querySelector('.write__text');
var form = modalWrite.querySelector('.write__info');
var firstSlide = document.querySelector('.slide--first');
var secondSlide = document.querySelector('.slide--second');
var thirdSlide = document.querySelector('.slide--third');
var firstTog = document.querySelector('toggle--first');
var secondTog = document.querySelector('toggle--second');
var firstTog = document.querySelector('toggle--third');

//Открытие-закрытие  модального окна
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
//----------------------------------------------------

var changeSlide = function (togOn, togOff1, togOff2, slideOn, slidOff1, slideOff2) {
  tog.addEventListener('click', function(evt){
    evt.preventDefault();
    tog.classList.add('toggle--active');
    slide.classList.remove('slide--hidden');
  });
}

form.addEventListener('submit', function(evt){
  if (!nameInput.value || !emailInput.value || !textInput.value ) {
    evt.preventDefault();
    modalWrite.classList.add('write--error');
    setTimeout(function (){modalWrite.classList.remove('write--error');}, 700);
  }
});
