$('#potion').on('click', () => {
  $('#gray').fadeOut({ display: 'none' });
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
