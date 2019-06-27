'use strict';
(function () {
  var map = document.querySelector('.map');
  var pinList = map.querySelector('.map__pins');
  var mainMapPin = pinList.querySelector('.map__pin--main');

  window.util = {
    map: map,
    pinList: pinList,
    mainMapPin: mainMapPin
  }
})();
