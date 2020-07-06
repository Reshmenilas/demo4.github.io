$(document).ready(function(){
  // sticky menu jquery
  $(window).scroll( function () {
    var nav = document.querySelector(".main_nav");
    nav.classList.toggle("sticky", window.scrollY > 50)
    
  });
  // mobile menu 
  $("#flip").click(function(){
    $(".main_menu").fadeIn(1000);
  }); 
  $(".closebtn").click(function(){
    $(".main_menu").fadeOut(1000);
  }); 

   // progress bar js 
   
   $(function(){
	  "use strict";
  var myWindow=$(window);
  myWindow.on('scroll',function(){
  $(".prog_skills span").each(function(){
   var bottom_of_object=$(this).offset().top+$(this).outerHeight();
   var bottom_of_window=$(window).scrollTop()+$(window).height();
   var myVal=$(this).attr('data-value');
   if(bottom_of_window>bottom_of_object){
     $(this).css({width:myVal});
	 }
	 
	 });
	 
	 });
  });

// MIXITUP 
var mixer = mixitup('.grid');
// MAGNIFIC POPUP
 $('.pop_up').magnificPopup({
    
  type: 'image',
  gallery: {
     enabled: true
  },
  
  });

    // OWL CAROUSEL
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })





})