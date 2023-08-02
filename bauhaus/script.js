// 눈동자

/* const mainMovingImg = (evt) => {
  let x = evt.clientX;
  let y = evt.clientY;

  $('.circle_outside').css({left:500+x/20, top:100+y/20,right:-100+x/20,bottom:-100+y/20});
  $('.circle_inside').css({left:500+x/5, top:100+y/5,right:-100+x/5,bottom:-100+y/5});

  requestAnimationFrame(mainMovingImg);
};
$('main').on('mousemove', mainMovingImg);
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
 gsap.to(".ismore", {
   scrollTrigger: {
    start: "top center",
    trigger:".ismore", 
 },
  rotate: "10deg", y:100, duration: 1  })
 


  // b 스크롤이벤트

  gsap.set('.b_polygon01',{rotate: "0deg", y:100});
  gsap.to(".b_polygon01", {
    scrollTrigger: {
    trigger:".b_polygon01", 
    scrub: 0.5
  },
   rotate: "360deg",y:-200, duration: 1  })


   gsap.set('.b_polygon02',{y:100});
   gsap.to(".b_polygon02", {
     scrollTrigger: {
     trigger:".b_polygon02", 
     scrub: 2
   },
    y:0, duration: 2  })


    gsap.set('.b_polygon03',{ y:150});
    gsap.to(".b_polygon03", {
      scrollTrigger: {
      trigger:".b_polygon03", 
      scrub: 1
    },
    rotate: "300deg", y:-200, duration: 3  })


     gsap.set('.b_pic1',{rotate: "0deg", y:50});
     gsap.to(".b_pic1", {
       scrollTrigger: {
       trigger:".b_pic1", 
       scrub: 2
     },
      y:-50, duration: 2  })


      gsap.set('.b_pic2',{rotate: "0deg", x:50});
     gsap.to(".b_pic2", {
       scrollTrigger: {
       trigger:".b_pic2", 
       scrub: 3
     },
      x:-150, duration: 5  })



    // craft 스크롤이벤트

    gsap.set('.craft_pic01',{rotate: "0deg", y:100});
    gsap.to(".craft_pic01", {
      scrollTrigger: {
      trigger:".craft_pic01", 
      scrub: 2
    },
    rotate: "10deg",y:-100, duration: 1  })


    gsap.set('.craft_pic02',{rotate: "0deg", y:50});
    gsap.to(".craft_pic02", {
      scrollTrigger: {
      trigger:".craft_pic02", 
      scrub: 2
    },
    rotate: "-5deg",y:-50, duration: 2  })


        // brand 스크롤이벤트

        gsap.set('.brand_list',{x: 0});
        gsap.to(".brand_list", {
          scrollTrigger: {
          trigger:".brand_list", 
          scrub: 5
        },
        x:-500 , duration: 5  })


      // history 스크롤이벤트

      gsap.set('.h_pic01',{y:150});
      gsap.to(".h_pic01", {
      scrollTrigger: {
      trigger:".h_pic01", 
      scrub: 1
      },
      y:-150, duration: 1  })
     
      gsap.set('.h_polygon01',{y:100});
      gsap.to(".h_polygon01", {
      scrollTrigger: {
      trigger:".h_polygon01", 
      scrub: 1
      },
      y:-50, duration: 2  })      

      gsap.set('.subtitle_w',{y:100});
      gsap.to(".subtitle_w", {
      scrollTrigger: {
      trigger:".subtitle_w", 
      scrub: 1
      },
      y:-100, duration: 2  }) 

      gsap.set('.history_link_1',{y:170});
      gsap.to(".history_link_1", {
      scrollTrigger: {
      trigger:".history_link_1", 
      scrub: 1
      },
      y:-180, duration: 1  })
      


      gsap.set('.h_pic02',{y:200});
      gsap.to(".h_pic02", {
      scrollTrigger: {
      trigger:".h_pic02", 
      scrub: 1
      },
      y:-200, duration: 1  })
     
      gsap.set('.h_polygon02',{y:150});
      gsap.to(".h_polygon02", {
      scrollTrigger: {
      trigger:".h_polygon02", 
      scrub: 1
      },
      y:-30, duration: 2  })      

      gsap.set('.h_polygon03',{y:50});
      gsap.to(".h_polygon03", {
      scrollTrigger: {
      trigger:".h_polygon03", 
      scrub: 1
      },
      y:-50, duration: 2  })      

      gsap.set('.subtitle_d',{y:100});
      gsap.to(".subtitle_d", {
      scrollTrigger: {
      trigger:".subtitle_d", 
      scrub: 1
      },
      y:-130, duration: 2  }) 

      gsap.set('.history_link_2',{y:170});
      gsap.to(".history_link_2", {
      scrollTrigger: {
      trigger:".history_link_2", 
      scrub: 1
      },
      y:-50, duration: 1  })
      

      gsap.set('.h_pic03',{y:200});
      gsap.to(".h_pic03", {
      scrollTrigger: {
      trigger:".h_pic03", 
      scrub: 1
      },
      y:-200, duration: 1  })
     
      gsap.set('.h_polygon04',{y:150});
      gsap.to(".h_polygon04", {
      scrollTrigger: {
      trigger:".h_polygon04", 
      scrub: 1
      },
      y:-70, duration: 2  })      

      gsap.set('.subtitle_b',{y:100});
      gsap.to(".subtitle_b", {
      scrollTrigger: {
      trigger:".subtitle_b", 
      scrub: 1
      },
      y:-220, duration: 2  }) 

      gsap.set('.history_link_3',{y:200});
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




/*   $(window).on('scroll',function(){
      $(".posters_2").css('bottom',$(window).scrollTop()*-1);
    });

 */
//  포스터
    var poster = document.querySelectorAll(".posters_wrapper");
    gsap.to(".posters_wrapper", {
    scrollTrigger: {
    trigger: ".posters_wrapper",
    pin: ".posters_wrapper",
    start: "top top",
    end: "bottom bottom"
  }
  });
  gsap.set('.posters_1',{yPercent:0});
  gsap.to(".posters_1", {
    scrollTrigger: {
    start: "-10% top",
    end: "bottom bottom",
    trigger:".posters_1",
    scrub: 0.3,
  },
  yPercent:-70, duration: 1  });


  gsap.set('.posters_2',{y:-8000});
  gsap.to(".posters_2", {
    scrollTrigger: {
    // trigger:".posters_2", 
    end: "bottom top",
    scrub: 0.3,
  },
  y:-300, duration: 1  });

  

  gsap.set('.posters_3',{yPercent:0});
  // gsap.registerPlugin(ScrollTrigger);
  gsap.to(".posters_3", {
    scrollTrigger: {
    start: "-10% top",
    end: "bottom bottom",
    trigger:".posters_3",
    scrub: 0.3,
  },
  yPercent:-70, duration: 1  });



  var $sections = document.querySelectorAll(".others");
  var tl = gsap.timeline({
  scrollTrigger: {
  trigger: ".others",
  pin: true,
  start: "top top",
  end: "+=3000"
}
});
gsap.set('.product1',{yPercent:150});
gsap.to(".product1", {
  scrollTrigger: {
  trigger:".product1", 
  scrub: 10
  },
  yPercent:-180, duration: 10
});

gsap.set('.product2',{yPercent:170});
gsap.to(".product2", {
  scrollTrigger: {
    trigger:".product2",
    scrub: 15
    },
    yPercent:-250, duration: 10
});

gsap.set(".product3",{yPercent:200});
gsap.to(".product3", {
  scrollTrigger: {
    trigger:".product3", 
    scrub: 15
    },
    yPercent:-390, duration: 10
});

gsap.set(".product4",{yPercent:100});
gsap.to(".product4", {
  scrollTrigger: {
    trigger:".product4", 
    scrub: 15
    },
    yPercent:-420, duration: 10
});

gsap.set(".product5",{yPercent:200});
gsap.to(".product5", {
  scrollTrigger: {
    trigger:".product5", 
    scrub: 15
    },
    yPercent:-450, rotate:"10deg", duration: 20
});

gsap.set(".product6",{yPercent:100});
gsap.to(".product6", {
  scrollTrigger: {
    trigger:".product6", 
    scrub: 15
    },
    yPercent:-250, duration: 10
});

gsap.set(".product7",{yPercent:100});
gsap.to(".product7", {
  scrollTrigger: {
    trigger:".product7", 
    scrub: 15
    },
    yPercent:-270, duration: 10
});



// 이벤트 리스너 함수 정의
const handleBeforeUnload = () => {
  const postersWrapper = document.querySelector('.posters_wrapper');
  if (postersWrapper) {
    postersWrapper.style.overflow = 'hidden';
  }
};

// beforeunload 이벤트에 리스너 등록
window.addEventListener('beforeunload', handleBeforeUnload);



$(document).ready(function() {
  const spans = document.querySelectorAll(".title h1 span");

  // 각 단어들을 순차적으로 나타내는 함수
  const showWordsSequentially = (index) => {
    if (index < spans.length) {
      spans[index].style.animation = "showWord 1s forwards";
      index++;
      setTimeout(() => showWordsSequentially(index), 500); // 다음 단어가 나타나기까지의 시간 설정
    }
  };

  showWordsSequentially(0); // 첫 번째 단어부터 시작하여 순차적으로 나타냄
});


gsap.set(".txt_color1",{opacity:0.2});
gsap.to(".txt_color1", {
  scrollTrigger: {
    trigger:".txt_color1", 
    start: "top center",
    },
    opacity:0.9
});

gsap.set(".txt_color2",{opacity:0.2});
gsap.to(".txt_color2", {
  scrollTrigger: {
    trigger:".txt_color2", 
    start: "top center",
    },
    opacity:0.9
});
gsap.set(".txt_color3",{opacity:0.2});
gsap.to(".txt_color3", {
  scrollTrigger: {
    trigger:".txt_color3", 
    start: "top center",
    },
    opacity:0.9
});
gsap.set(".txt_color4",{opacity:0.2});
gsap.to(".txt_color4", {
  scrollTrigger: {
    trigger:".txt_color4", 
    start: "top center",
    },
    opacity:0.9
});
gsap.set(".txt_color5",{opacity:0.2});
gsap.to(".txt_color5", {
  scrollTrigger: {
    trigger:".txt_color5", 
    start: "top center",
    },
    opacity:0.9
});