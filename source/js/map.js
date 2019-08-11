"use strict";

(function () {
  function init() {
    var coords = (window.matchMedia("(max-width: 1023px)").matches) ? [59.9390901, 30.323255] : [59.939091, 30.3209138];
    var myMap = new ymaps.Map("map", {
      center: coords,
      zoom: 18
    });

    var pinSize = (window.matchMedia("(max-width: 767px)").matches) ? [55, 53] : [124, 106];
    var offsetSize = (window.matchMedia("(max-width: 767px)").matches) ? [-30, -45] : [-72, -102];
    var myPlacemark = new ymaps.Placemark([59.938993, 30.323309], {}, {
      iconLayout: "default#image",
      iconImageHref: "./img/map-pin.png",
      iconImageSize: pinSize,
      iconImageOffset: offsetSize
    });

    myMap.behaviors
      .disable(["scrollZoom"]);

    myMap.geoObjects
      .add(myPlacemark)
  }

  ymaps.ready(init);
})();
