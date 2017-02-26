'use strict';

window.showGalery = (function () {

  var gallery = document.querySelector('.gallery-overlay');
  var image = gallery.querySelector('.gallery-overlay-image');
  var closed = gallery.querySelector('.gallery-overlay-close');
  var likes = gallery.querySelector('.likes-count');
  var comments = gallery.querySelector('.comments-count');
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESC = 27;

  closed.addEventListener('click', onClose);
  closed.addEventListener('keydown', onCloseByEnter);
  document.addEventListener('keydown', onCloseByEsc);

  function onClose(event) {
    close();
  }

  function onCloseByEnter(event) {
    if (event.keyCode === KEY_CODE_ENTER) {
      close();
    }
  }

  function onCloseByEsc(event) {
    if (event.keyCode === KEY_CODE_ESC) {
      close();
    }
  }

  function close() {
    gallery.classList.add('invisible');
    gallery.ariaHidden = false;
    gallery.removeEventListener('keydown', onCloseByEsc);
  }

  return function (picture) {
    gallery.classList.remove('invisible');
    image.src = picture.url;
    likes.innerText = picture.likes;
    comments.innerText = picture.comments.length;
  };
})();
