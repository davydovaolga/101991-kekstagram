'use strict';

window.showGalery = (function () {

  var galery = document.querySelector('.gallery-overlay');
  var image = galery.querySelector('.gallery-overlay-image');
  var closed = galery.querySelector('.gallery-overlay-close');
  var likes = galery.querySelector('.likes-count');
  var comments = galery.querySelector('.comments-count');
  var KEY_CODE_ENTER = 13;
  var KEY_CODE_ESC = 27;

  closed.addEventListener('click', onClose);
  closed.addEventListener('keydown', onCloseByEnter);
  galery.addEventListener('keydown', onCloseByEsc);

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
    galery.classList.add('invisible');
    galery.ariaHidden = false;
    document.removeEventListener('keydown', onCloseByEsc);
  }

  return function (picture) {
    galery.classList.remove('invisible');
    image.src = picture.url;
    likes.innerText = picture.likes;
    comments.innerText = picture.comments.length;
  };
})();
