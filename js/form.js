'use strict';
(function () {

  // изменение минимально допустимой цены и плейсхолдера цены в зависимости от типа жилья
  var changePrice = function () {
    var type = document.getElementById('type');
    var price = document.getElementById('price');

    type.onchange = function () {
      var i = this.selectedIndex;
      var MIN_PRICE_PER_NIGHT = [0, 1000, 5000, 10000];
      price.placeholder = MIN_PRICE_PER_NIGHT[i];
      price.min = MIN_PRICE_PER_NIGHT[i];
    };
  };

  changePrice();

  // изменение времени чекина и чекаута
  var changeTime = function () {
    var timein = document.getElementById('timein');
    var timeout = document.getElementById('timeout');

    timein.onchange = function () {
      timeout.selectedIndex = this.selectedIndex;
    };

    timeout.onchange = function () {
      timein.selectedIndex = this.selectedIndex;
    };
  };

  changeTime();

})();
