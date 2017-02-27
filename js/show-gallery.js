'use strict';

window.showGalery = (function () {
  var gallery = document.querySelector('.gallery-overlay');
  var image = gallery.querySelector('.gallery-overlay-image');
  var closeButton = gallery.querySelector('.gallery-overlay-close');
  var likes = gallery.querySelector('.likes-count');
  var comments = gallery.querySelector('.comments-count');

  closeButton.addEventListener('click', onClose);
  closeButton.addEventListener('keydown', onCloseByEnter);
  document.addEventListener('keydown', onCloseByEsc);

  function onClose(event) {
    event.preventDefault();
    close();
  }

  function onCloseByEnter(event) {
    if (window.utils.isEnterKey(event)) {
      close();
    }
  }

  function onCloseByEsc(event) {
    if (window.utils.isEscKey(event)) {
      close();
    }
  }

  function close() {
    gallery.classList.add('invisible');
    gallery.ariaHidden = false;
    document.removeEventListener('keydown', onCloseByEsc);
  }

  return function (picture) {
    image.src = picture.url;
    likes.textContent = picture.likes;
    comments.textContent = picture.comments.length;
    gallery.classList.remove('invisible');
  };
})();
