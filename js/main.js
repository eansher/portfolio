//logo stuff
//big vs little
  // When the user scrolls
    $(document).scroll(function(){
    // Find out how far they've scrolled
    var distanceScrolled = $(window).scrollTop();
      // If the distanceScrolled is greater than 60
    if (distanceScrolled > 60) {
      $('.big-logo').addClass('hide');
      $('.small-logo').removeClass('hide');
      $('.fireworks').addClass('hide');
    }  else {
      $('.big-logo').removeClass('hide');
      $('.small-logo').addClass('hide');
      $('.fireworks').removeClass('hide');
    }
});

//nav
  //when the user hovers over the hamburger icon
   //the navigation slides down
    $('#hamburger').mouseenter(function(){
      $('nav').slideDown(350);
    })
    $('nav').mouseenter(function(){
      $('nav').slideDown(350);
    })
    //when the mouse leaves the nav, it disappears
    $("nav").mouseleave(function(){
      $("nav").slideUp(350);
  });

//when the user clicks "information", about window appears

//mail
  //when the user hovers over the mail icon
    //mail div slides up
  $("#mail").hover(function(){
    $("#contact").slideDown(350);
});
  //when the mouse leaves the form, it disappears
  $("footer").mouseleave(function(){
    $("#contact").slideUp(350);
});

//when the user hovers over an image the rest of the images dim

//when user clicks on "information" about shows up
$('a[class=modal]').click(function(e){
  $('#overlay').removeClass('hide');
});

//when user clicks X in modal, it closes
$('a[class=close]').click(function(e){
  $('#overlay').addClass('hide');
});

//image grows


//disable right clicks

//$(document).ready(function(){
//  $(document).bind("contextmenu",function(e){
//  e.preventDefault();
//  });
//});
