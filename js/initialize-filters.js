'use strict';

window.initializeFilters = (function () {
  var uploadFilterControls = document.querySelector('.upload-filter-controls');
  var filterImagePreview = document.querySelector('.filter-image-preview');
  var controls = document.querySelectorAll('input[name="upload-filter"]');
  var KEY_CODE_ENTER = 13;

  uploadFilterControls.addEventListener('click', onSelectFilter);
  uploadFilterControls.addEventListener('keydown', onSelectFilterByEnter);

  function onSelectFilter(event) {
    var target = event.target;
    if (target.classList.contains('upload-filter-preview')) {
      removeFilter();
      var filter = target.parentNode.previousElementSibling;
      filterImagePreview.classList.add('filter-' + filter.value);
      filter.setAttribute('checked', true);
    }
  }

  function removeFilter() {
    for (var i = 0; i < controls.length; i++) {
      filterImagePreview.classList.remove('filter-' + controls[i].value);
      controls[i].removeAttribute('checked');
    }
  }

  function onSelectFilterByEnter(event) {
    if (event.keyCode === KEY_CODE_ENTER) {
      onSelectFilter(event);
    }
  }
})();
