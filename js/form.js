'use strict';

(function () {
  var overlay = document.querySelector('.upload-overlay');
  var uploadForm = document.querySelector('#upload-select-image');
  var inputFile = document.querySelector('#upload-file');
  var closeButton = overlay.querySelector('#upload-cancel');
  var scaleTool = overlay.querySelector('.upload-resize-controls');
  var submitButton = document.querySelector('.upload-control');
  var image = overlay.querySelector('.filter-image-preview');
  var filterContainer = overlay.querySelector('.upload-filter-controls');

  inputFile.addEventListener('click', onOpen);
  closeButton.addEventListener('click', onClose);
  closeButton.addEventListener('keydown', onCloseByEnter);
  submitButton.addEventListener('keydown', onOpenByEnter);

  var STEP = 25;
  var DEFAULT_SCALE = 100;
  window.initializeScale(scaleTool, STEP, DEFAULT_SCALE, applyScale);
  window.initializeFilters(filterContainer, applyFilter);
  close();

  function applyFilter(newFilter, oldFilter) {
    image.classList.remove('filter-' + oldFilter);
    image.classList.add('filter-' + newFilter);
  }

  function applyScale(value) {
    image.style.transform = 'scale(' + value / 100 + ')';
  }

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
    if (window.utils.isEnterKey(event)) {
      close();
    }
  }

  function onOpenByEnter(event) {
    event.preventDefault();
    if (window.utils.isEnterKey(event)) {
      open();
    }
  }

  function onCloseByEsc(event) {
    if (window.utils.isEscKey(event)) {
      close();
    }
  }

  function open() {
    overlay.classList.remove('invisible');
    uploadForm.classList.add('invisible');
    overlay.ariaHidden = true;
    document.addEventListener('keydown', onCloseByEsc);
  }

  function close() {
    overlay.classList.add('invisible');
    uploadForm.classList.remove('invisible');
    overlay.ariaHidden = false;
    document.removeEventListener('keydown', onCloseByEsc);
  }
})();
