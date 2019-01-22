'use strict';

var firstRange = document.querySelector('#range1');
var secondRange = document.querySelector('#range2');
var firstResult = document.querySelector('#result1');
var secondResult = document.querySelector('#result2');
var PRESS_ESC = 27;
var writeBtn = document.querySelector('.contacts__btn');
var modalWrite = document.querySelector('.write-us_block');
var nameInput = modalWrite.querySelector('.write__name');
var modalCloseBtn = modalWrite.querySelector('.write__btn--close');
var emailInput = modalWrite.querySelector('.write__email');
var textInput = modalWrite.querySelector('.write__text');
var form = modalWrite.querySelector('.write__info');
var isStorageSupport = true;
var storage = '';
var projects = document.querySelectorAll('.project_block');


/*Вывод значения range*/
var getRangeValue = function (range, output) {
  range.addEventListener('input', function () {
    output.innerHTML = range.value;
  });
}

getRangeValue(firstRange, firstResult);
getRangeValue(secondRange, secondResult);

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

for (var i = 0; i < projects.length; i++) {
  var project =  projects[i];
  project.addEventListener('mouseover', function() {
  project.querySelector('.project__box').classList.add('box--show');
  });
}
