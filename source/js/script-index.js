'use strict';

(function () {
  var navJsClass = 'nav__menu--js';
  var toggleMenuCloseClass = 'nav__toggle--close';
  var toggleCloseIconClass = 'nav__toggle-icon--close';

  var navMenuElement = document.querySelector('.nav__menu');
  var toggleMenuElement = document.querySelector('.nav__toggle');
  var toggleIconElement = document.querySelector('.nav__toggle-icon');

  navMenuElement.classList.add(navJsClass);

  toggleMenuElement.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (navMenuElement.classList.contains(navJsClass)) {
      navMenuElement.classList.remove(navJsClass);
      toggleMenuElement.classList.add(toggleMenuCloseClass);
      toggleIconElement.classList.add(toggleCloseIconClass);
    } else {
      navMenuElement.classList.add(navJsClass);
      toggleMenuElement.classList.remove(toggleMenuCloseClass);
      toggleIconElement.classList.remove(toggleCloseIconClass);
    }
  });

})();
