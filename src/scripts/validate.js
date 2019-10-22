(function () {

  const form = document.querySelector('.contacts-form');
  const btn = document.querySelector('.contacts-form__btn');
  const popup = document.querySelector('.popup');

  const init = function () {
    _setUpListners();
  };

  const _setUpListners = function () {
    btn.addEventListener('click', _validateForm);
    popup.addEventListener('click', _closePopup);
  };

  const _validateForm = function (e) {
    e.preventDefault();

    let isValid = true;
    const elems = form.elements;

    for (let i = 0; i < elems.length; i++) {
      if (elems[i].tagName !== 'BUTTON') {
        if (!_validateField(elems[i])) isValid = false;
      }
    }
    if (isValid) {
      console.info('AJAX');
      form.reset();
      popup.style.display = 'flex';
    }
  }

  const _validateField = function (field) {
    let spanError = field.nextElementSibling.nextElementSibling;

    if (!field.checkValidity()) {
      field.classList.add('error');
      spanError.innerText = field.validationMessage;
      spanError.style.opacity = '1';
      return false;
    } else {
      field.classList.remove('error');
      spanError.innerText = '';
      spanError.style.opacity = '0';
      return true;
    }
  }

  const _closePopup = function (e) {
    if (e.target.tagName === 'BUTTON') popup.style.display = 'none';
  }


  return init();
})();