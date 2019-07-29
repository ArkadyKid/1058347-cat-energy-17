'use strict';

(function () {
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [59.938631, 30.323055],
      zoom: 18
    });
  }
})();
