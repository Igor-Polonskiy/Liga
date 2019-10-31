jQuery(function($){

$('.nav_collapse_1').click(function(){
  $(".nav_down_1").slideToggle(300);
  $('.nav_down_2').slideUp(300);
  $('.nav_down_3').slideUp(300);
  
  
  console.log("yes");
}); 
$('.nav_collapse_2').click(function(){
  $(".nav_down_2").slideToggle(300);
   $('.nav_down_1').slideUp(300);
  $('.nav_down_3').slideUp(300);

  console.log("yes");
}); 
$('.nav_collapse_3').click(function(){
  $(".nav_down_3").slideToggle(300);
   $('.nav_down_2').slideUp(300);
  $('.nav_down_1').slideUp(300);
  console.log("yes");
}); 
$('.nav_down').focusout(function(){
  
  	console.log("nen")
    $('.nav_down').slideUp(300);
  
})
})