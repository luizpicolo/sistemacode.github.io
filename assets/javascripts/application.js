// application

$(function(){
  // link
  _link.back(
    $('.link--back')
  );

  _link.current(
    'link--current'
  );

  _link.prevent(
    $('.link--prevent')
  );

  // nav
  _nav.open(
    $('html'),
    $('.nav'),
    $('.nav__link'),
    $('.nav__btn'),
    'nav--opened'
  );
});
