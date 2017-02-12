'use strict';

window.createScale = (function (element, step, startValue) {
  var controlsValue = document.querySelector('.upload-resize-controls-value');
  var buttonDec = document.querySelector('.upload-resize-controls-button-dec');
  var buttonInc = document.querySelector('.upload-resize-controls-button-inc');
  var filterImagePreview = document.querySelector('.filter-image-preview');

  controlsValue.value = startValue + '%';
  filterImagePreview.style.transform = 'scale(' + startValue / 100 + ')';

  buttonDec.addEventListener('click', onZoomOut);
  buttonInc.addEventListener('click', onZoomIn);

  function onZoomOut() {
    var value = parseInt(controlsValue.value, 10);
    if (value > step) {
      var percent = value - step;
      scaleСalculation(percent);
    }
  }

  function onZoomIn() {
    var value = parseInt(controlsValue.value, 10);
    if (value < startValue) {
      var percent = value + step;
      scaleСalculation(percent);
    }
  }

  function scaleСalculation(percent) {
    var scale = percent / 100;
    filterImagePreview.style.transform = 'scale(' + scale + ')';
    controlsValue.value = String(percent) + '%';
  }
})(window.resizeControls, 25, 100);
