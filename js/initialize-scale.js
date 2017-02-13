'use strict';

window.initializeScale = (function () {

  return function (element, step, startValue) {
    var controlsValue = element.querySelector('.upload-resize-controls-value');
    var buttonDec = element.querySelector('.upload-resize-controls-button-dec');
    var buttonInc = element.querySelector('.upload-resize-controls-button-inc');
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
  };
})();
