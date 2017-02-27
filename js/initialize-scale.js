'use strict';

window.initializeScale = (function () {

  return function (element, step, startValue, cb) {
    var controlsValue = element.querySelector('.upload-resize-controls-value');
    var buttonDec = element.querySelector('.upload-resize-controls-button-dec');
    var buttonInc = element.querySelector('.upload-resize-controls-button-inc');
    var scale = startValue;
    var MIN_SCALE = 25;
    var MAX_SCALE = 100;

    apply(scale);

    buttonDec.addEventListener('click', onZoomOut);
    buttonInc.addEventListener('click', onZoomIn);

    function onZoomOut() {
      var value = Math.max(MIN_SCALE, scale - step);
      apply(value);
    }

    function onZoomIn() {
      var value = Math.min(MAX_SCALE, scale + step);
      apply(value);
    }

    function apply(percent) {
      controlsValue.value = String(percent) + '%';
      scale = percent;

      if (typeof cb === 'function') {
        cb(percent);
      }
    }
  };
})();
