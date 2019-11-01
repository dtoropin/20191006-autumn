(function () {

  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav__list');
  const title = document.querySelector('.welcome__head');
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
      title.classList.toggle('hidden');
    }
  }


	return init();
})();