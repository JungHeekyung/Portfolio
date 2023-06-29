$('#potion').on('click', () => {
  $('#gray').fadeOut({ display: 'none' });
});

$('#clock').on('click', () => {
  $('#desk_01').css({ opacity: '0' }),
    $('#desk_02').css({ opacity: '0' }),
    $('#laptop_error').css({ display: 'none' }),
    $('#stand_light').css({ display: 'none' }),
    $('#stand_on').css({ display: 'none' }),
    $('#sofa_cotton').css({ display: 'none' }),
    $('#art').css({ transform: 'rotate(0deg)' + 'translateX(0px)' }),
    $('#gray').fadeIn({ display: 'block' });
});
$('#art').on('mouseover', (e) => {
  $(e.target).css({ transform: 'rotate(5deg)' + 'translateX(-10px)' });
  // $(e.target).css('transform', 'translateX(-8px)');
});

$('#desk_01').on('mouseover', (e) => {
  $(e.target).css({ opacity: '1' });
});
$('#desk_02').on('mouseover', (e) => {
  $(e.target).css({ opacity: '1' });
  $('#desk_paper').css({ opacity: '1' });
});
$('#laptop').on('mouseover', () => {
  $('#laptop_error').css({ display: 'block' });
});
$('#stand').on('mouseover', () => {
  $('#stand_on').css({ display: 'block' });
  $('#stand_light').css({ display: 'block' });
});
$('#sofa').on('mouseover', () => {
  $('#sofa_cotton').css({ display: 'block' });
});

let scroll = 0;
$(window).on('scroll', (e) => {
  let pos = $(e.target).scrollTop();
  if (pos > 65) {
    $('header').addClass('header_shadow');
  } else {
    $('header').removeClass('header_shadow');
  }
});
