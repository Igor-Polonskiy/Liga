jQuery(function($){

$('.nav_collapse').click(function(){
  $(".nav_down").slideToggle(300);
}); 
$('header').focusout(function(){
  setTimeout(function() {
    $('.nav_down').slideUp(300);
  }, 150);
})
})