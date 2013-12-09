$(document).ready(function() {
  $('.tip').tipr();
  $("#jbtn").click(function(e) {
  	e.preventDefault();
    $(".about.none").fadeIn();
    $(this).fadeOut("fast")
    $(".toppadd").slideUp();
  });

  $(document).ready(function() {

    $('.slideshow img:gt(index)').fadeOut();
      setInterval(function(){
        $('.slideshow :first-child').fadeIn()
          .next('img').fadeOut()
          .end().appendTo('.slideshow');},
        2000);

    $('.slideshow2 img:gt(index)').fadeOut();
      setInterval(function(){
        $('.slideshow2 :first-child').fadeIn()
          .next('img').fadeOut()
          .end().appendTo('.slideshow2');},
        2500)

    $('.slideshow3 img:gt(index)').fadeOut();
      setInterval(function(){
        $('.slideshow3 :first-child').fadeIn()
          .next('img').fadeOut()
          .end().appendTo('.slideshow3');},
        3500)

    $('.slideshow4 img:gt(index)').fadeOut();
      setInterval(function(){
        $('.slideshow4 :first-child').fadeIn()
          .next('img').fadeOut()
          .end().appendTo('.slideshow4');},
        3000)
  });

  $('.resumetoggle').click(function() {
    $('.resume').toggle();
  });
});
