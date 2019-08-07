"use strict";

(function () {
  function init() {
    var coords = (window.matchMedia("(max-width: 1023px)").matches) ? [59.938931, 30.323055] : [59.938951, 30.320918];
    var myMap = new ymaps.Map("map", {
      center: coords,
      zoom: 17
    });

    var pinSize = (window.matchMedia("(max-width: 767px)").matches) ? [55, 53] : [124, 106];
    var pinOffset = (window.matchMedia("(max-width: 767px)").matches) ? [-3, -14] : [-30, -62];
    var myPlacemark = new ymaps.Placemark([59.938993, 30.323009], {}, {
      iconLayout: "default#image",
      iconImageHref: "./img/map-pin.png",
      iconImageSize: pinSize,
      iconImageOffset: pinOffset
    });

    myMap.behaviors
      .disable(["scrollZoom"]);

    myMap.geoObjects
      .add(myPlacemark)
  }

  ymaps.ready(init);
})();
