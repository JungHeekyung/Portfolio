
$(window).on('scroll', (e) => {
  let pos = $(e.target).scrollTop();
  if (pos > 65) {
    $('header').addClass('header_shadow');
  } else {
    $('header').removeClass('header_shadow');
  }
});

$('#potion').on('click', () => {
  $('.title').addClass('active');
  $('.illust').addClass('active');
  $('.na_02').css({ display: 'block' });
});

$('#clock').on('click', () => {
  $('.title').removeClass('active');
  $('.illust').removeClass('active');
  $('.na_02').css({ display: 'none' });
});