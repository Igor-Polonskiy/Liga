jQuery(function($){

	let totalhight = 0
$(".main_content").children().each(function(){
    totalhight = totalhight + $(this).outerHeight(true);
    console.log(totalhight);
});
console.log(totalhight);
$(".main_content").height(totalhight);

$('.nav_collapse_1').click(function(){
  $(".nav_down_1").slideToggle(300);
  $(".nav_collapse_1").toggleClass('blue_text');
  $(".nav_collapse_1 .fa-angle-down").toggleClass('no_display');
  $(".nav_collapse_1 .fa-angle-up").toggleClass('no_display');
  $('.nav_down_2').slideUp(0);
  $('.nav_down_3').slideUp(0);
  $(".nav_collapse_2").removeClass('blue_text');
  $(".nav_collapse_2 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_2 .fa-angle-up").addClass('no_display');
  $(".nav_collapse_3").removeClass('blue_text');
  $(".nav_collapse_3 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_3 .fa-angle-up").addClass('no_display');

  
}); 

$('.nav_collapse_2').click(function(){
	
  $(".nav_down_2").slideToggle(300);
 $(".nav_collapse_2").toggleClass('blue_text');
  $(".nav_collapse_2 .fa-angle-down").toggleClass('no_display');
  $(".nav_collapse_2 .fa-angle-up").toggleClass('no_display');
   $('.nav_down_1').slideUp(0);
  $('.nav_down_3').slideUp(0);
  $(".nav_collapse_1").removeClass('blue_text');
  $(".nav_collapse_1 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_1 .fa-angle-up").addClass('no_display');
  $(".nav_collapse_3").removeClass('blue_text');
  $(".nav_collapse_3 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_3 .fa-angle-up").addClass('no_display');

}); 
$('.nav_collapse_3').click(function(){
	
  $(".nav_down_3").slideToggle(300);
  $(".nav_collapse_3").toggleClass('blue_text');
  $(".nav_collapse_3 .fa-angle-down").toggleClass('no_display');
  $(".nav_collapse_3 .fa-angle-up").toggleClass('no_display');
   $('.nav_down_2').slideUp(0);
  $('.nav_down_1').slideUp(0);
  $(".nav_collapse_1").removeClass('blue_text');
  $(".nav_collapse_1 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_1 .fa-angle-up").addClass('no_display');
  $(".nav_collapse_2").removeClass('blue_text');
  $(".nav_collapse_2 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_2 .fa-angle-up").addClass('no_display');

}); 
$(document).on('click', function(e) {
  if (!$(e.target).closest("header").length) {
    $('.nav_down').hide();
    $(".nav_collapse_1").removeClass('blue_text');
  $(".nav_collapse_1 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_1 .fa-angle-up").addClass('no_display');
  $(".nav_collapse_2").removeClass('blue_text');
  $(".nav_collapse_2 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_2 .fa-angle-up").addClass('no_display');
  $(".nav_collapse_3").removeClass('blue_text');
  $(".nav_collapse_3 .fa-angle-down").removeClass('no_display');
  $(".nav_collapse_3 .fa-angle-up").addClass('no_display');

  }
  e.stopPropagation();
});
  
})
$(window).scroll(function(){
  var docscroll=$(document).scrollTop();
  if(docscroll>$('header').height()){
  	$('header').addClass('fixed');
    $('.navbar').addClass('no_display');
    $('.heder_hide').addClass('no_display');
    $('.fixed_menu').slideDown(300);
  }else{
    $('header').removeClass('fixed');
    $('.navbar').removeClass('no_display');
    $('.heder_hide').removeClass('no_display');
    $('.fixed_menu').slideUp(0);

  }
});


