'use strict';

window.initializeFilters = (function () {

  return function (element, cb) {
    var KEY_CODE_ENTER = 13;
    var filterOld = 'none';

    element.addEventListener('click', onSelectFilter);
    element.addEventListener('keydown', onSelectFilterByEnter);

    function onSelectFilter(event) {
      var target = event.target;
      if (!target.classList.contains('upload-filter-preview')) {
        return;
      }
      var filterNew = target.parentNode.previousElementSibling;
      if (typeof cb === 'function') {
        cb(filterNew, filterOld);
      }
      filterNew.setAttribute('checked', true);
      filterOld = filterNew;
    }

    function onSelectFilterByEnter(event) {
      if (event.keyCode === KEY_CODE_ENTER) {
        onSelectFilter(event);
      }
    }
  };
})();
