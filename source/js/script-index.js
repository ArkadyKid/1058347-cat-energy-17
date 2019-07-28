'use strict';

(function () {
  var navJsClass = 'nav__menu--js--close';
  var navMenuOpenClass = 'nav__menu--js--open';
  var toggleMenuCloseClass = 'nav__toggle--close';
  var toggleCloseIconClass = 'nav__toggle-icon--close';

  var navMenuElement = document.querySelector('.nav__menu');
  var toggleMenuElement = document.querySelector('.nav__toggle');
  var toggleIconElement = document.querySelector('.nav__toggle-icon');

  navMenuElement.classList.add(navJsClass);
  toggleMenuElement.classList.add(toggleMenuCloseClass);
  toggleIconElement.classList.add(toggleCloseIconClass);

  toggleMenuElement.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (navMenuElement.classList.contains(navJsClass)) {
      navMenuElement.classList.remove(navJsClass);
      navMenuElement.classList.add(navMenuOpenClass);
      toggleMenuElement.classList.remove(toggleMenuCloseClass);
      toggleIconElement.classList.remove(toggleCloseIconClass);
    } else {
      navMenuElement.classList.add(navJsClass);
      navMenuElement.classList.remove(navMenuOpenClass);
      toggleMenuElement.classList.add(toggleMenuCloseClass);
      toggleIconElement.classList.add(toggleCloseIconClass);
    }
  });

})();
