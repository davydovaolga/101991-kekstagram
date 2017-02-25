'use strict';

(function () {
  var pictures = [];
  var blockPictures = document.querySelector('.pictures');
  var tmplPicture = document.querySelector('#picture-template');
  var contentPicture = tmplPicture.content.querySelector('.picture');
  var KEY_CODE_ENTER = 13;

  function onLoad(event) {
    var target = event.target;
    pictures = target.response;
    if (target.status !== 200) {
      document.write(target.status + ': ' + target.statusText);
      return;
    }
    pictures.forEach(function (picture) {
      var elementPicture = contentPicture.cloneNode(true);
      var pictureImg = elementPicture.children[0];
      var pictureLikes = elementPicture.querySelector('.picture-likes');
      var picturesComments = elementPicture.querySelector('.picture-comments');

      pictureImg.src = picture.url;
      pictureLikes.innerText = picture.likes;
      picturesComments.innerText = picture.comments.length;
      blockPictures.appendChild(elementPicture);

      elementPicture.addEventListener('click', open);

      function open(evnt) {
        evnt.preventDefault();
        window.showGalery(picture);
      }

      elementPicture.addEventListener('keydown', onOpenByEnter);

      function onOpenByEnter(evnt) {
        evnt.preventDefault();
        if (evnt.keyCode === KEY_CODE_ENTER) {
          window.showGalery(picture);
        }
      }
    });
  }
  window.load('https://intensive-javascript-server-myophkugvq.now.sh/kekstagram/data', onLoad);

})();
