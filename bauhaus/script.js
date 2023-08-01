// 눈동자

/* const mainMovingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $('.circle_outside').css({left:270+x/20, top:70+y/20,right:50+x/50,bottom:50+y/50});
  $('.circle_inside').css({left:250+x/5, top:70+y/5,right:200+x/1,bottom:200+y/5});

  requestAnimationFrame(mainMovingImg);
};
$('main').on('mousemove', mainMovingImg);
 */

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


/* ############ HOME ############ */
// function home()
{
    /* ############ EYE MOVE ############ */
/*     const eye = document.querySelector('.pupilla');
    const occhio = document.querySelector('.cont_eye');

    const eye_f = document.querySelector('#footer .pupilla');
    const occhio_f = document.querySelector('#footer .cont_eye');

    window.addEventListener('mousemove', (event) => {
    const x = -(window.innerWidth / 2 - event.pageX) / 8;
    const y = -(window.innerHeight / 2 - event.pageY) / 8;
    eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
    eye_f.style.transform = `translateY(${y}px) translateX(${x}px)`;

    const x2 = -(window.innerWidth / 2 - event.pageX) / 8;
    const y2 = -(window.innerHeight / 2 - event.pageY) / 8; 
    occhio.style.transform = `translateY(${y2}px) translateX(${x2}px)`;
    occhio_f.style.transform = `translateY(${y2}px) translateX(${x2}px)`;         
    });  */
    /* ############ END EYE MOVE ############ */
}


// Less is more 스크롤이벤트

gsap.set('.scissor',{y: 200});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".scissor", {
  scrollTrigger: {
    trigger:".scissor", 
    scrub: 1
},
 y: -200, duration: 1  })


 gsap.set('.ismore',{rotate: "0deg", y:0});
 gsap.registerPlugin(ScrollTrigger);
 gsap.to(".ismore", {
   scrollTrigger: {
    start: "top center",
     trigger:".ismore", 
    
 },
  rotate: "10deg", y:100, duration: 1  })
 


  // b 스크롤이벤트

  gsap.set('.b_polygon01',{rotate: "0deg", y:100});
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".b_polygon01", {
    scrollTrigger: {
    trigger:".b_polygon01", 
    scrub: 0.5
  },
   rotate: "360deg",y:-200, duration: 1  })


   gsap.set('.b_polygon02',{y:100});
   gsap.registerPlugin(ScrollTrigger);
   gsap.to(".b_polygon02", {
     scrollTrigger: {
     trigger:".b_polygon02", 
     scrub: 2
   },
    y:0, duration: 2  })


    gsap.set('.b_polygon03',{ y:150});
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".b_polygon03", {
      scrollTrigger: {
      trigger:".b_polygon03", 
      scrub: 1
    },
    rotate: "300deg", y:-200, duration: 3  })


     gsap.set('.b_pic1',{rotate: "0deg", y:50});
     gsap.registerPlugin(ScrollTrigger);
     gsap.to(".b_pic1", {
       scrollTrigger: {
       trigger:".b_pic1", 
       scrub: 2
     },
      y:-50, duration: 2  })


      gsap.set('.b_pic2',{rotate: "0deg", x:50});
     gsap.registerPlugin(ScrollTrigger);
     gsap.to(".b_pic2", {
       scrollTrigger: {
       trigger:".b_pic2", 
       scrub: 3
     },
      x:-150, duration: 5  })



    // craft 스크롤이벤트

    gsap.set('.craft_pic01',{rotate: "0deg", y:100});
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".craft_pic01", {
      scrollTrigger: {
      trigger:".craft_pic01", 
      scrub: 2
    },
    rotate: "25deg",y:-100, duration: 1  })


    gsap.set('.craft_pic02',{rotate: "0deg", y:50});
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".craft_pic02", {
      scrollTrigger: {
      trigger:".craft_pic02", 
      scrub: 2
    },
    rotate: "-10deg",y:-50, duration: 2  })


        // brand 스크롤이벤트

        gsap.set('.brand_list',{x: 0});
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".brand_list", {
          scrollTrigger: {
          trigger:".brand_list", 
          scrub: 5
        },
        x:-500 , duration: 5  })


      // history 스크롤이벤트

      gsap.set('.h_pic01',{y:150});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".h_pic01", {
      scrollTrigger: {
      trigger:".h_pic01", 
      scrub: 1
      },
      y:-150, duration: 1  })
     
      gsap.set('.h_polygon01',{y:100});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".h_polygon01", {
      scrollTrigger: {
      trigger:".h_polygon01", 
      scrub: 1
      },
      y:-50, duration: 2  })      

      gsap.set('.subtitle_w',{y:100});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".subtitle_w", {
      scrollTrigger: {
      trigger:".subtitle_w", 
      scrub: 1
      },
      y:-100, duration: 2  }) 

      gsap.set('.history_link_1',{y:170});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".history_link_1", {
      scrollTrigger: {
      trigger:".history_link_1", 
      scrub: 1
      },
      y:-180, duration: 1  })
      


      gsap.set('.h_pic02',{y:200});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".h_pic02", {
      scrollTrigger: {
      trigger:".h_pic02", 
      scrub: 1
      },
      y:-200, duration: 1  })
     
      gsap.set('.h_polygon02',{y:150});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".h_polygon02", {
      scrollTrigger: {
      trigger:".h_polygon02", 
      scrub: 1
      },
      y:-30, duration: 2  })      

      gsap.set('.h_polygon03',{y:50});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".h_polygon03", {
      scrollTrigger: {
      trigger:".h_polygon03", 
      scrub: 1
      },
      y:-50, duration: 2  })      

      gsap.set('.subtitle_d',{y:100});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".subtitle_d", {
      scrollTrigger: {
      trigger:".subtitle_d", 
      scrub: 1
      },
      y:-130, duration: 2  }) 

      gsap.set('.history_link_2',{y:170});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".history_link_2", {
      scrollTrigger: {
      trigger:".history_link_2", 
      scrub: 1
      },
      y:-50, duration: 1  })
      

      gsap.set('.h_pic03',{y:200});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".h_pic03", {
      scrollTrigger: {
      trigger:".h_pic03", 
      scrub: 1
      },
      y:-200, duration: 1  })
     
      gsap.set('.h_polygon04',{y:150});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".h_polygon04", {
      scrollTrigger: {
      trigger:".h_polygon04", 
      scrub: 1
      },
      y:-70, duration: 2  })      

      gsap.set('.subtitle_b',{y:100});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".subtitle_b", {
      scrollTrigger: {
      trigger:".subtitle_b", 
      scrub: 1
      },
      y:-220, duration: 2  }) 

      gsap.set('.history_link_3',{y:200});
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".history_link_3", {
      scrollTrigger: {
      trigger:".history_link_3", 
      scrub: 1
      },
      y:-250, duration: 1  })


      // history 스크롤이벤트
/* 
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".product1", {
      scrollTrigger: {
      pin: true,
      strart: "top top",
      trigger:".product1", 
      scrub: 1
      },
      y:-1000, duration: 1  })
 */

    var $sections = document.querySelectorAll(".others");
    var tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".others",
    pin: true,
    start: "top top",
    end: "+=3000"
  }
  });
  tl.set('.product1',{yPercent:150});
  tl.to(".product1", {
    scrollTrigger: {
    trigger:".product1", 
    scrub: 10
    },
    yPercent:-180, duration: 10
  });

  tl.set('.product2',{yPercent:170});
  tl.to(".product2", {
    scrollTrigger: {
      trigger:".product2",
      scrub: 15
      },
      yPercent:-250, duration: 10
  });

  tl.set(".product3",{yPercent:200});
  tl.to(".product3", {
    scrollTrigger: {
      trigger:".product3", 
      scrub: 15
      },
      yPercent:-390, duration: 10
  });

  tl.set(".product4",{yPercent:100});
  tl.to(".product4", {
    scrollTrigger: {
      trigger:".product4", 
      scrub: 15
      },
      yPercent:-420, duration: 10
  });

  tl.set(".product5",{yPercent:200});
  tl.to(".product5", {
    scrollTrigger: {
      trigger:".product5", 
      scrub: 15
      },
      yPercent:-450, rotate:"10deg", duration: 20
  });

  tl.set(".product6",{yPercent:100});
  tl.to(".product6", {
    scrollTrigger: {
      trigger:".product6", 
      scrub: 15
      },
      yPercent:-250, duration: 10
  });

  tl.set(".product7",{yPercent:100});
  tl.to(".product7", {
    scrollTrigger: {
      trigger:".product7", 
      scrub: 15
      },
      yPercent:-270, duration: 10
  });


/*   $(window).on('scroll',function(){
      $(".posters_2").css('bottom',$(window).scrollTop()*-1);
    }); */

    gsap.set('.posters_1',{yPercent:0});
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".posters_1", {
      scrollTrigger: {
      start: "center center",
      end: "bottom center",
      trigger:".posters_1", 
      scrub: 2,
      pin: ".posters_wrapper",
    },
    yPercent:-100, duration: 1  })

    gsap.set(".others", { position: "fixed" }); // "others"를 고정된 위치로 설정합니다.

    gsap.set('.posters_2', { yPercent: 0 });
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".posters_2", {
      scrollTrigger: {
        trigger: ".posters_2",
        start: "center center",
        scrub: 2,
        pin: ".posters_wrapper",
      },
      yPercent: 100,
      duration: 1,
      onComplete: () => {
        gsap.set(".others", { visibility: "visible" }); // 애니메이션이 끝나면 "others"를 다시 보이도록 설정합니다.
      },
      onReverseComplete: () => {
        gsap.set(".others", { visibility: "hidden" }); // 애니메이션 역방향으로 돌아올 때 "others"를 숨기도록 설정합니다.
      },
    });    
    
      

        gsap.set('.posters_3',{yPercent:0});
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".posters_3", {
      scrollTrigger: {
      trigger:".posters_3", 
      start: "center center",
      end: "bottom center",
      scrub: 2,
      pin: ".posters_wrapper",
    },
    yPercent:-100, duration: 1  })