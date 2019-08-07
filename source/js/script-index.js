"use strict";

(function () {
  var toggleMenuClass = "nav__toggle--js";
  var toggleIconClass = "nav__toggle-icon--js";
  var navMenuCloseClass = "nav__menu--close";
  var navMenuOpenClass = "nav__menu--open";
  var toggleMenuCloseClass = "nav__toggle--close";
  var toggleCloseIconClass = "nav__toggle-icon--close";

  var navMenuElement = document.querySelector(".nav__menu");
  var toggleMenuElement = document.querySelector(".nav__toggle");
  var toggleIconElement = document.querySelector(".nav__toggle-icon");


  navMenuElement.classList.add(navMenuCloseClass);
  toggleMenuElement.classList.add(toggleMenuClass);
  toggleIconElement.classList.add(toggleIconClass);

  toggleMenuElement.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (navMenuElement.classList.contains(navMenuCloseClass)) {
      navMenuElement.classList.remove(navMenuCloseClass);
      navMenuElement.classList.add(navMenuOpenClass);
      toggleMenuElement.classList.add(toggleMenuCloseClass);
      toggleIconElement.classList.add(toggleCloseIconClass);
    } else {
      navMenuElement.classList.add(navMenuCloseClass);
      navMenuElement.classList.remove(navMenuOpenClass);
      toggleMenuElement.classList.remove(toggleMenuCloseClass);
      toggleIconElement.classList.remove(toggleCloseIconClass);
    }
  });

})();
