(function () {

  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav__list');
  const body = document.body;

	const init = function () {
		_setUpListners();
	};

	const _setUpListners = function () {
    hamburger.addEventListener('click', _toggleClass);
    navList.addEventListener('click', function (e) {
      if (e.target.className == 'nav__link') _toggleClass();
    });
  };
  
  const _toggleClass = function () {
    if (window.innerWidth < 768) {
      hamburger.classList.toggle('active');
      body.classList.toggle('noscroll');
    }
  }


	return init();
})();