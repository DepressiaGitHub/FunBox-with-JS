'use strict';

(function () {
  document.querySelectorAll('.card').forEach(function (el) {
    el.addEventListener('change', function() {
      el.classList.toggle('card--active');
      el.classList.add('no-hover');
    });

    el.addEventListener('mouseout', function() {
      el.classList.remove('no-hover');
    });
  });

  var cardList = document.querySelectorAll('.card');
  var cardInputList = document.querySelectorAll('.food__input-checkbox');

  for (var i = 0; i < cardInputList.length; i++) {
    if (cardInputList[i].checked) {
      cardList[i].classList.add('card--active');
    } else if (cardInputList[i].disabled) {
      cardList[i].classList.add('card--disabled');
    }
  }
})();
