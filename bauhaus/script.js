// 눈동자

const mainMovingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $('.circle_outside').css({left:-50 - x /60, top:70 - y / 30});
  $('.circle_inside').css({left:50% + x, top:50% + y});

  requestAnimationFrame(mainMovingImg);
};
$('main').on('mousemove', mainMovingImg);


// 타이틀 움직임

/* const footerMovingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $('.s3-title').css({left:-50 - x /60, top:70 - y / 30});
  $('.date1').css({left:0 - x /30, top:0 - y / 70});
  $('.date2').css({left:2 - x /50, top:-5 - y / 50});

  requestAnimationFrame(footerMovingImg);
};
$('.footer-wrapper').on('mousemove', footerMovingImg);
 */