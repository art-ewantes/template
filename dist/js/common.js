$(document).ready(function() {


	$("#toggle_mnu").click(function(){
		$(this).toggleClass("on");
		$("#menu").slideToggle();
		return false;
	});
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:25,
	    // itemsDesktop : [1000,5],
	    autoplayTimeout: 4000,
	    autoplaySpeed:1400,
	    pagination:true,
	    nav:true,
	    navText: ['<img src="../img/prev.png"/>','<img src="../img/next.png"/>'],
	    dots:false,
	    dotsSpeed: 100,
	    responsive:{
	        0:{
	            items:1,
	            nav: false,
	        },
	        600:{
	            items:1,
	            autoplay: true,
	        },
	        700:{
	            items:3,
	            autoplay: true,
	            nav: false,
	        },
	        900:{
	            items:3,
	            autoplay: true,
	        },
	        1100:{
	        	items: 5,
	        	autoplay: true,
	        }
	    }
	});
	$("input, select, textarea").jqBootstrapValidation();
	// $('.all_comments').click(function() {
 //          $('.row_comments').css("min-height", "600px");
 //      });
	 var div = $('.row_comments');

 	$('.all_comments').click(function() {
           div.toggleClass('max');
      });
 	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});
	$("#menu ul a").mPageScroll2id();
	var jump=function(e){
	if (e){
	   e.preventDefault();
	   var target = $(this).attr("href");
	}else{
	   var target = location.hash;
	}

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top
   },1000,function()
   {
       location.hash = target;
   });

	}

	$('html, body').hide();

	$(document).ready(function()
	{
	    $('a[href^=#]').bind("click", jump);

	    if (location.hash){
	        setTimeout(function(){
	            $('html, body').scrollTop(0).show();
	            jump();
	        }, 0);
	    }else{
	        $('html, body').show();
	    }
	});
// 	$('html,body').animate({
// 	  scrollTop: $(window.location.hash).offset().top
// });



});



