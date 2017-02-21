'use strict';

(function () {
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadSelectImage = document.querySelector('#upload-select-image');
  var uploadfile = document.querySelector('#upload-file');
  var uploadCancel = document.querySelector('#upload-cancel');
  var resizeControls = document.querySelector('.upload-resize-controls');
  var uploadControl = document.querySelector('.upload-control');
  var filterImagePreview = document.querySelector('.filter-image-preview');
  var filterElement = document.querySelector('.upload-filter-controls');
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESC = 27;
  var STEP = 25;
  var DEFAULT_SCALE = 100;

  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');

  uploadfile.addEventListener('click', onOpen);
  uploadCancel.addEventListener('click', onClose);
  uploadCancel.addEventListener('keydown', onCloseByEnter);
  uploadControl.addEventListener('keydown', onOpenByEnter);

  var applyScale = function (param) {
    filterImagePreview.style.transform = 'scale(' + param + ')';
  };

  window.initializeScale(resizeControls, STEP, DEFAULT_SCALE, applyScale);

  var applyFilter = function (newFilter, oldFilter) {
    filterImagePreview.classList.remove('filter-' + oldFilter.value);
    filterImagePreview.classList.add('filter-' + newFilter.value);
    newFilter.setAttribute('checked', true);
  };
  window.initializeFilters(filterElement, applyFilter);

  function onOpen(event) {
    event.preventDefault();
    open();
  }

  function onClose(event) {
    event.preventDefault();
    close();
  }

  function onCloseByEnter(event) {
    event.preventDefault();
    if (event.keyCode === KEY_CODE_ENTER) {
      close();
    }
  }

  function onOpenByEnter(event) {
    event.preventDefault();
    if (event.keyCode === KEY_CODE_ENTER) {
      open();
    }
  }

  function onCloseByEsc(event) {
    if (event.keyCode === KEY_CODE_ESC) {
      close();
    }
  }

  function open() {
    uploadOverlay.classList.remove('invisible');
    uploadSelectImage.classList.add('invisible');
    uploadOverlay.ariaHidden = true;
    document.addEventListener('keydown', onCloseByEsc);
  }

  function close() {
    uploadOverlay.classList.add('invisible');
    uploadSelectImage.classList.remove('invisible');
    uploadOverlay.ariaHidden = false;
    document.removeEventListener('keydown', onCloseByEsc);
  }
})();
