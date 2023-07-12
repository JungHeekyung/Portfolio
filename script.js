$('#potion').on('click', () => {
  $('#gray').fadeOut({ display: 'none' });
});

$('#clock').on('click', () => {
  $('#desk_01').css({ opacity: '0' }),
    $('#desk_02').css({ opacity: '0' }),
    $('#desk_paper').css({ opacity: '0' }),
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
  console.log(pos);
  if (pos > 65) {
    $('header').addClass('header_shadow');
  } else {
    $('header').removeClass('header_shadow');
  }
});

 
 
/*  $('.project_btn').on('click', () => {
  $('.project_wrapper').animate({scrollTop : offset.top}, 400);
}); */

$(document).ready(function(){
  $(".project_btn").on("click",function(event){
    // 이동 버튼을 클릭시 pre 태그로 스크롤의 위치가 이동되도록 한다.

    // 1. pre태그의 위치를 가지고 있는 객체를 얻어온다. => offset 객체
    var offset = $(".project_wrapper").offset();

    // offset은 절대 위치를 가져온다. offset.top을 통해 상단의 좌표를 가져온다.
    // position은 부모를 기준으로한 상대위치를 가져온다.
    $("html body").animate({scrollTop:offset.top},2000);

  });
}); // end of ready(