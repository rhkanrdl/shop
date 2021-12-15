
$(document).ready(function(){



	var windowh = $(window).height();
	var windowW = $(window).width();
	

	$(window).on("resize", function(){

	 windowh = $(window).height();
	 windowW = $(window).width();


	 mainImageView()

	});




    var swiper1 = new Swiper(".top-slider", {
        autoplay: {
            delay: 4000,
        },
        speed: 500,
        spaceBetween: 40,
        slidesPerView: 10,
		// centeredslide: true,
		loop:true,
        slidesPerView: "auto",
		
        
        scrollbar: {
			el: ".swiper-scrollbar",

		  },
		  pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		  },
		  navigation: {
			nextEl: '.swiper1-button-next',
			prevEl: '.swiper1-button-prev',
		  },
		  breakpoints: {
			5000: {
				spaceBetween: 40,
				slidesPerView:'auto'
			},
			1200: {
			  slidesPerView: 1,
			  spaceBetween: 50,
			},
		  },
    });


    var swiper2 = new Swiper(".gallery-slider", {
        autoplay: {
            delay: 4000,
        },
        speed: 500,
        spaceBetween: 0,
        slidesPerView: 1,
		// centeredslide: true,
		loop:true,
        slidesPerView: "auto",
		
		  navigation: {
			nextEl: '.swiper2-button-next',
			prevEl: '.swiper2-button-prev',
		  },
    });


    var swiper3 = new Swiper(".hot-slider", {
        autoplay: {
            delay: 4000,
        },
        speed: 500,
        spaceBetween: 0,
        slidesPerView: 1,
		// centeredslide: true,
		loop:true,
        slidesPerView: "auto",
		
		  navigation: {
			nextEl: '.swiper3-button-next',
			prevEl: '.swiper3-button-prev',
		  },
    });


	$('.gallery-slider .swiper-slide').each(function() {
		$(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
	});




});
