(function () {

  const form = document.querySelector('.contacts-form');
  const btn = document.querySelector('.contacts-form__btn');
  const popup = document.querySelector('.popup');
  const popupBlock = document.querySelector('.popup__block');
  const popupServMes = document.querySelector('.popup-server__mes');
  const popupServMesText = document.querySelector('.popup-server__text');
  const body = document.querySelector('body');
  const url = '/';

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
      const data = new FormData(form);
      
      _ajax(url, data).then(function (xhr) {
        if (xhr.status != 200) {
          _showPopup(false, 'error', 'Сообщение не отправлено');
          console.error(xhr.status + ': ' + xhr.statusText);
        } else if (xhr.status > 500) {
          _showPopup(false, 'warn', 'Сервер перегружен');
          console.warn(xhr.status + ': ' + xhr.statusText);
        } else {
          _showPopup(true, 'ok', 'Сообщение отправлено');
          form.reset();
          console.info(xhr.responseText);
        }
      });
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
    if (e.target.tagName === 'BUTTON') {
      body.classList.remove('noscroll');
      popup.style.display = 'none';
      popupBlock.style.display = 'none';
      popupServMes.className = 'popup-server__mes';
    }
  }

  const _showPopup = function (isBlock, type, text) {
    popup.style.display = 'flex';
    body.classList.add('noscroll');

    if (isBlock) popupBlock.style.display = 'block';
    popupServMes.classList.add(type);
    popupServMesText.innerText = text;
  }

  const _ajax = function (url, data) {
    const promise = new Promise(function (resolve) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.send(data);
      xhr.addEventListener('load', function () {
        resolve(xhr);
      });
    });
    return promise;
  }


  return init();
})();