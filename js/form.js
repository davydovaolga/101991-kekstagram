'use strict';
(function () {
  var uploadOverlay = document.querySelector('.upload-overlay');
  var uploadSelectImage = document.querySelector('#upload-select-image');
  var uploadfile = document.querySelector('#upload-file');
  var uploadCancel = document.querySelector('#upload-cancel');
  var resizeControls = document.querySelector('.upload-resize-controls');
  var uploadControl = document.querySelector('.upload-control');
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESC = 27;

  uploadOverlay.classList.add('invisible');
  uploadSelectImage.classList.remove('invisible');

  uploadfile.addEventListener('click', onOpen);
  uploadCancel.addEventListener('click', onClose);
  uploadCancel.addEventListener('keydown', onCloseByEnter);
  uploadControl.addEventListener('keydown', onOpenByEnter);

  window.initializeFilters();
  window.createScale(resizeControls, 25, 100);

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
      uploadOverlay.classList.add('invisible');
      uploadSelectImage.classList.remove('invisible');
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
