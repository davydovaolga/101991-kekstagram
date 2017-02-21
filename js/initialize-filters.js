'use strict';

window.initializeFilters = (function () {

  return function (element, cb) {
    var KEY_CODE_ENTER = 13;
    var filterOld = 'none';

    element.addEventListener('click', onSelectFilter);
    element.addEventListener('keydown', onSelectFilterByEnter);

    function onSelectFilter(event) {
      var target = event.target;
      if (target.classList.contains('upload-filter-preview')) {
        var filterNew = target.parentNode.previousElementSibling;
        cb(filterNew, filterOld);
        filterOld = filterNew;
      }
    }

    function onSelectFilterByEnter(event) {
      if (event.keyCode === KEY_CODE_ENTER) {
        onSelectFilter(event);
      }
    }
  };
})();
