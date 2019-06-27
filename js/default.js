'use strict';

(function () {

  // неактивное состояние формы
  var disableElements = function (param) {
    var adresInput = document.querySelector("#address");
    var adFormFieldsets = document.querySelector('.ad-form').getElementsByTagName('fieldset');
    var mapFiltersSelectInputs = document.querySelector('.map__filters').getElementsByTagName('select');
    var mapFiltersFieldsets = document.querySelector('.map__filters').getElementsByTagName('fieldset');

    // изначальное значение поля "адрес"
    adresInput.value = parseInt(window.util.mainMapPin.style.left, 10) + ', ' + parseInt(window.util.mainMapPin.style.top, 10);

    var disableFields = function (arr) {
      for( var i = 0; i < arr.length; i++ ){
        arr[i].disabled = param;
      }
    }

    disableFields(adFormFieldsets);
    disableFields(mapFiltersSelectInputs);
    disableFields(mapFiltersFieldsets);
  };

  disableElements(true);

  window.default = {
    disableElements: disableElements
  };

})();
