'use strict';

var uploadOverlay = document.querySelector('.upload-overlay');
var uploadSelectImage = document.querySelector('#upload-select-image');
var uploadfile = document.querySelector('#upload-file');
var uploadCancel = document.querySelector('#upload-cancel');
var controlsValue = document.querySelector('.upload-resize-controls-value');
var controls = document.querySelectorAll('input[name="upload-filter"]');
var buttonDec = document.querySelector('.upload-resize-controls-button-dec');
var buttonInc = document.querySelector('.upload-resize-controls-button-inc');
var uploadControl = document.querySelector('.upload-control');
var uploadFilterControls = document.querySelector('.upload-filter-controls');
var filterImagePreview = document.querySelector('.filter-image-preview');
var KEY_CODE_ENTER = 13;
var KEY_CODE_ESC = 27;

uploadOverlay.classList.add('invisible');
uploadSelectImage.classList.remove('invisible');

uploadfile.addEventListener('click', closeWindow);
uploadCancel.addEventListener('click', openWindow);
buttonDec.addEventListener('click', zoomOut);
buttonInc.addEventListener('click', zoomIn);
uploadFilterControls.addEventListener('click', onClick);
uploadFilterControls.addEventListener('keydown', onClickEnter);

function onClickEnter(evt) {
  if (evt.keyCode === KEY_CODE_ENTER) {
    onClick(event);
  }
}

function onClick(event) {
  var target = event.target;
  if (target.classList.contains('upload-filter-preview')) {
    removeFilter();
    var filter = target.parentNode.previousElementSibling;
    filterImagePreview.classList.add('filter-' + filter.value);
  }
}

uploadCancel.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODE_ENTER) {
    openWindow();
  }
});

uploadControl.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEY_CODE_ENTER) {
    closeWindow(event);
  }
});


function closeWindow(event) {
  event.preventDefault();
  uploadOverlay.classList.remove('invisible');
  uploadSelectImage.classList.add('invisible');
  controlsValue.step = 25;
  controlsValue.value = '100%';
  var value = parseInt(controlsValue.value, 10);
  scaleСalculation(value);
  removeFilter();
  filterImagePreview.classList.add('filter-none');
  uploadOverlay.ariaHidden = true;
  document.addEventListener('keydown', function (evnt) {
    if (evnt.keyCode === KEY_CODE_ESC) {
      uploadOverlay.classList.add('invisible');
      uploadSelectImage.classList.remove('invisible');
    }
  });
}

function removeFilter() {
  for (var i = 0; i < controls.length; i++) {
    filterImagePreview.classList.remove('filter-' + controls[i].value);
  }
}

function openWindow() {
  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');
  uploadOverlay.ariaHidden = false;
}

function zoomOut() {
  var value = parseInt(controlsValue.value, 10);
  if (value > 25) {
    var percent = value - 25;
    scaleСalculation(percent);
  }
}

function zoomIn() {
  var value = parseInt(controlsValue.value, 10);
  if (value < 100) {
    var percent = value + 25;
    scaleСalculation(percent);
  }
}

function scaleСalculation(percent) {
  var scale = percent / 100;
  filterImagePreview.style.transform = 'scale(' + scale + ')';
  controlsValue.value = String(percent) + '%';
}
