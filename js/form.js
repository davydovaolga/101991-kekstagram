'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadfile = document.querySelector('#upload-file');
var uploadCancel = document.querySelector('#upload-cancel');

uploadOverlay.classList.add('invisible');
uploadSelectImage.classList.remove('invisible');

uploadfile.addEventListener('click', function (event) {
  event.preventDefault();
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
});

uploadCancel.addEventListener('click', function () {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
});

var photo = document.querySelector('.filter-image-preview');
var controls = document.querySelectorAll('input[name="upload-filter"]');
var filter = document.querySelectorAll('.upload-filter-preview');

filter[4].classList.add('filter-phobos');
filter[5].classList.add('filter-heat');

for (var j = 0; j < controls.length; j++) {
  clickControl(controls[j]);
}

function clickControl(control) {
  control.addEventListener('click', function () {
    toggleFilter(control);
  });
}

function toggleFilter(control) {
  for (var i = 0; i < controls.length; i++) {
    photo.classList.remove('filter-' + controls[i].value);
  }

  if (photo) {
    photo.classList.add('filter-' + control.value);
  }
}

var buttonDec = document.querySelector('.upload-resize-controls-button-dec');
var buttonInc = document.querySelector('.upload-resize-controls-button-inc');
var controlsValue = document.querySelector('.upload-resize-controls-value');

controlsValue.step = 25;
controlsValue.value = '100%';

buttonDec.addEventListener('click', function () {
  var value = controlsValue.value.replace(/%/g, '');
  if (value > 25) {
    var percent = Number(value) - 25;
    var scale = percent / 100;
    photo.style.transform = 'scale(' + scale + ')';
    controlsValue.value = String(percent) + '%';
  }
});
buttonInc.addEventListener('click', function () {
  var value = controlsValue.value.replace(/%/g, '');
  if (value < 100) {
    var percent = Number(value) + 25;
    var scale = percent / 100;
    photo.style.transform = 'scale(' + scale + ')';
    controlsValue.value = String(percent) + '%';
  }
});
