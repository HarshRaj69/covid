}else{
    $('.scroll-top').hide();
  }

  // scroll spy 

  $('section').each(function(){

    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let id = $(this).attr('id');
    let height = $(this).height();

    if(top > offset && top < offset + height){
      $('.navbar a').removeClass('active');
      $('.navbar').find(`[href="#${id}"]`).addClass('active');
    }

  });

});

// smooth scrolling 

$('a[href*="#"]').on('click',function(e){

  $('html, body').animate({

    scrollTop : $($(this).attr('href')).offset().top,

  },
    500,
    'linear'
  );

});

});