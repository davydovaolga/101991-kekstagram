'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadfile = document.querySelector('#upload-file');
var uploadCancel = document.querySelector('#upload-cancel');
var controlsValue = document.querySelector('.upload-resize-controls-value');

uploadOverlay.classList.add('invisible');
uploadSelectImage.classList.remove('invisible');

uploadfile.addEventListener('click', closeWindow);

function closeWindow(event) {
  event.preventDefault();
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
  controlsValue.step = 25;
  controlsValue.value = '100%';
  var value = parseInt(controlsValue.value, 10);
  var scale = value / 100;
  photo.style.transform = 'scale(' + scale + ')';
  controlsValue.value = String(value) + '%';
}

uploadCancel.addEventListener('click', openWindow);

function openWindow() {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
}

var photo = document.querySelector('.filter-image-preview');
var controls = document.querySelectorAll('input[name="upload-filter"]');
var preview = document.querySelectorAll('.upload-filter-preview');

for (var k = 0; k < controls.length; k++) {
  preview[k].classList.add('filter-' + controls[k].value);
}

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

buttonDec.addEventListener('click', zoomOut);
buttonInc.addEventListener('click', zoomIn);

function zoomOut() {
  var value = parseInt(controlsValue.value, 10);
  if (value > 25) {
    var percent = Number(value) - 25;
    var scale = percent / 100;
    photo.style.transform = 'scale(' + scale + ')';
    controlsValue.value = String(percent) + '%';
  }
}

function zoomIn() {
  var value = parseInt(controlsValue.value, 10);
  if (value < 100) {
    var percent = Number(value) + 25;
    var scale = percent / 100;
    photo.style.transform = 'scale(' + scale + ')';
    controlsValue.value = String(percent) + '%';
  }
}
