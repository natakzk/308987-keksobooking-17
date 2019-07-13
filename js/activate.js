'use strict';

(function () {

  var AVATAR = {
    imgNumbers: ['01', '02', '03', '04', '05', '06', '07', '08'],
    path: 'img/avatars/user',
    extention: '.png'
  };
  var TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var LOCATION = {
    minX: 300,
    maxX: 900,
    minY: 130,
    maxY: 630
  };
  var ads = [];
  var numberOfAds = 8;

  // взять случайный элемент из диапазона
  function getElFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // взять неповторяющийся случайный элемент из массива
  var getRandomUniqueEl = function (array) {
    var index = getElFromRange(0, array.length - 1);
    var randomResult = array[index];
    array.splice(index, 1);
    return randomResult;
  };

  // взять случайный элемент из массива
  var getRandomEl = function (array) {
    return array[Math.floor((Math.random() * array.length))];
  };

  // генерация объекта со случайными данными
  var getAd = function () {
    var ad = {
      author: {
        avatar: AVATAR.path + getRandomUniqueEl(AVATAR.imgNumbers) + AVATAR.extention
      },
      offer: {
        type: getRandomEl(TYPES)
      },
      location: {
        x: getElFromRange(LOCATION.minX, LOCATION.maxX),
        y: getElFromRange(LOCATION.minY, LOCATION.maxY)
      }
    }
    return ad;
  };

  // генерация массива с 8 метками
  var generateAds = function () {
    for (var i = 0; i < numberOfAds; i++) {
      ads[i] = getAd();
    }
    return ads;
  }
  generateAds();

  // клонирование шаблона пина, заполнение его случайными данными
  var renderPin = function (ad) {
    var pinWidth = 50;
    var pinHeight = 70;
    var pinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
    var pinEl = pinTemplate.cloneNode(true);
    var pinImg = pinEl.querySelector('img');

    pinEl.style.left = (ad.location.x - pinWidth / 2) + 'px';
    pinEl.style.top = (ad.location.y - pinHeight) + 'px';
    pinImg.src = ad.author.avatar;
    pinImg.alt = ad.offer.type;

    return pinEl;
  }

  // показ пинов
  var activateEl = function () {
    var adForm = document.querySelector('.ad-form');
    window.util.map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
  };

  // отрисовка 8 пинов с заполненными случайными данными
  // var renderPinList = function () {
  //   var fragment = document.createDocumentFragment();
  //   for (var i = 0; i < numberOfAds; i++) {
  //     fragment.appendChild(renderPin(ads[i]));
  //   }
  //   window.util.pinList.appendChild(fragment);
  //   return window.util.pinList;
  // };

  var successHandler = function (pins) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < pins.length; i++) {
      fragment.appendChild(renderPin(pins[i]));
    }
    window.util.pinList.appendChild(fragment);
  };

  var errorHandler = function () {
    var errorTemplate = document.querySelector('#error').content.querySelector('.error');
    var errorEl = errorTemplate.cloneNode(true);
    var main = document.querySelector('main');
    main.appendChild(errorEl);
  };

  var activate = function () {
    activateEl();
    window.default.disableElements(false);
    window.backend.load(successHandler, errorHandler);
  }

  window.activate = {
    activate: activate
  }

})();
