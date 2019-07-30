'use strict';

(function () {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 18
    });

    var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../source/img/map-pin.png',
      iconImageSize: [126, 106],
      iconImageOffset: [-3, -42]
    });

    myMap.geoObjects
      .add(myPlacemark)
  }
})();