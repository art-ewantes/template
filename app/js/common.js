$(document).ready(function() {


	$("#toggle_mnu").click(function(){
		$(this).toggleClass("on");
		$("#menu").slideToggle();
		return false;
	});
	// $('.owl-carousel').owlCarousel({
	//     loop:true,
	//     margin:10,
	//     autoplayTimeout: 400000000,
	//     autoplaySpeed:1400,
	//     pagination:true,
	//     dots:true,
	//     dotsSpeed: 100,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:1,
	//             autoplay: false,
	//         },
	//         700:{
	//             items:1,
	//             autoplay: true,
	//         }
	//     }
	// });
	$("input, select, textarea").jqBootstrapValidation();

});



