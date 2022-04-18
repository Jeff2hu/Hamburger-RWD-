$(document).ready(function () {
  $(".m-menubtn").click(function(e){
    e.preventDefault();
    $(".container").toggleClass('menu-show')
  })

  $(window).scroll(function(e){
    if($(window).scrollTop() >100){
      $(".top").css("opacity","100")
    }else{
      $(".top").css("opacity","0")
    };
  });

  $(".top").click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    },1000);
  })
});