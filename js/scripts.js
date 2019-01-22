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
var firstTog = document.querySelector('.toggle--first');
var secondTog = document.querySelector('.toggle--second');
var thirdTog = document.querySelector('.toggle--third');
var isStorageSupport = true;
var storage = '';

/*Открытие-закрытие  модального окна*/
try {
  storage.localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  nameInput.value = storage;
  emailInput.focus();
} else {
  nameInput.focus();
}

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

/*Слайдер*/
var changeSlide = function (togOn, togOff1, togOff2, slideOn, slideOff1, slideOff2) {
    togOn.addEventListener('click', function(evt){
    evt.preventDefault();
    togOn.classList.add('toggle--active');
    togOff1.classList.remove('toggle--active');
    togOff2.classList.remove('toggle--active');
    slideOn.classList.remove('slide--hidden');
    slideOff1.classList.add('slide--hidden');
    slideOff2.classList.add('slide--hidden');
  });
}

changeSlide(firstTog, secondTog, thirdTog, firstSlide, secondSlide, thirdSlide);
changeSlide(secondTog, thirdTog, firstTog, secondSlide, thirdSlide, firstSlide);
changeSlide(thirdTog, firstTog, secondTog, thirdSlide, firstSlide, secondSlide);

/*Валидация*/
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
