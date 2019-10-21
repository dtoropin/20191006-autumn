const parallax = (function () {

  const layer2 = document.querySelector('.first__layer--2');
  const layer3 = document.querySelector('.first__layer--3');
  const layer4 = document.querySelector('.first__layer--4');

  const init = function (wScroll) {
    _move(layer4, wScroll, 95);
    _move(layer2, wScroll, 87);
    _move(layer3, wScroll, 65);
  };

  const _move = function (block, wScroll, offset) {
    let strafe = wScroll / -offset + '%';
    let transformStr = 'translate3d(0, ' + strafe + ', 0)';
    let style = block.style;
    style.transform = transformStr;
  }


  return {
    init: init
  }

})();

window.onscroll = function () {
  wScroll = window.pageYOffset;
  parallax.init(wScroll);
}