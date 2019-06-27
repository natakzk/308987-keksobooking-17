'use strict';

(function () {
  var adresInput = document.querySelector("#address");

  window.util.mainMapPin.addEventListener('mousedown', function (evt) {
    var PIN_WIDTH = 62;
    var PIN_HEIGHT = 62;
    var PIN_TAIL_HEIGHT = 22;

    evt.preventDefault();
    window.activate.activate();

    var startCoords = {
      x: window.util.mainMapPin.style.left,
      y: window.util.mainMapPin.style.top
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var dragLimit = {
        X: {
          MIN: 0,
          MAX: 1200
        },
        Y: {
          MIN: 130,
          MAX: 630
        }
      };

      var border = {
        TOP: dragLimit.Y.MIN - PIN_HEIGHT - PIN_TAIL_HEIGHT,
        BOTTOM: dragLimit.Y.MAX - PIN_HEIGHT - PIN_TAIL_HEIGHT,
        LEFT: dragLimit.X.MIN,
        RIGHT: dragLimit.X.MAX - PIN_WIDTH
      };

      var mainMapPinPosition = {
        x: window.util.mainMapPin.offsetLeft - shift.x,
        y: window.util.mainMapPin.offsetTop - shift.y
      };

      if (mainMapPinPosition.x >= border.LEFT && mainMapPinPosition.x <= border.RIGHT) {
        window.util.mainMapPin.style.left = mainMapPinPosition.x + 'px';
      }

      if (mainMapPinPosition.y >= border.TOP && mainMapPinPosition.y <= border.BOTTOM) {
        window.util.mainMapPin.style.top = mainMapPinPosition.y + 'px';
      }


      adresInput.value = parseInt(window.util.mainMapPin.style.left, 10) + ', ' + (parseInt(window.util.mainMapPin.style.top, 10)
      + PIN_HEIGHT / 2 + PIN_TAIL_HEIGHT);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      adresInput.value = parseInt(window.util.mainMapPin.style.left, 10) + ', ' + (parseInt(window.util.mainMapPin.style.top, 10)
      + PIN_HEIGHT / 2 + PIN_TAIL_HEIGHT);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });



})();
