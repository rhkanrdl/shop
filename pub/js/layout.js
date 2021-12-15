$(document).ready(function(){


	var windowh = $(window).height();
	var windowW = $(window).width();

	window.onpageshow = function(event) {
		if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
		}
	}


	$(window).on("resize", function(){

	 windowh = $(window).height();
	 windowW = $(window).width();

	});


	



		function subNaviView(){

			$("nav#allMenu").addClass("on");
			$('.header-search').removeAttr("style");

			if(windowW < 1200) {
				//모바일 좌측메뉴

				$('html,body').css({overflow:'hidden', height:windowh});
				$('body').bind('touchmove', function(e){e.preventDefault()});


				

			} else {
				//PC 전체메뉴

			}
		}



		function subNaviHide(){



				$("nav#allMenu").removeAttr("style");
				$("nav#allMenu").removeClass("on");


				$('html,body').removeAttr("style");
				$('body').unbind('touchmove', function(e){e.preventDefault()});




		}

		var allMenu = false;

		$('.header-right-btn .menu-view').click(function(){
			if(!allMenu){
				subNaviView();
				// $("body>div.back").addClass("on");
			}else{
				subNaviHide();
				// $("body>div.back").removeClass("on");
			}
			allMenu = !allMenu;
			return false;
		});

		$('nav#allMenu button.menu-close').click(function(){
			subNaviHide();
			allMenu = false;
			return false;
		});

		// $(window).on("resize", function(){

		// 	$('#allMenu').removeAttr('style');
		// 	$('#allMenu').removeClass("on");


		// });


		$('.search-view').click(function(){
			$('.header-search').toggle();
			// $("body>div.back").toggleClass("on");
			subNaviHide();
			allMenu = false;
		});

		$('.search-close').click(function(){
			$('.header-search').toggle();
			// $("body>div.back").toggleClass("on");
		});

		$("#allMenu h3 a").on("mouseenter", function(){
			$("#allMenu h3 + ul").removeClass("on");
			$(this).parent().parent().find("ul").addClass("on");
		});



		$("#allMenu").on("mouseleave", function(){


			
			$(this).parent().parent().find("ul").removeClass("on");


		});



		$('ul.photo-list p.image').each(function() {
			$(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
		});


		$("nav#allMenu h3+ul>li>a").on("click", function(e){

			if(windowW < 1200) {



				if ($(this).closest('li').has('ul').length) {
					$("nav#allMenu h3+ul>li>a").removeClass("active");
					$(this).addClass("active");
					$("nav#allMenu h3+ul>li>ul").removeClass("on");
					$(this).parent().find("ul").addClass("on");
					//console.log("야옹");

					e.preventDefault();

				} 
			}

		});


		// 아코디언
		var accordion_tab = $('#allMenu h3'),
		accordion_content = $('#allMenu div>ul');
		accordion_tab.on('click', function(e){
			
			//concole

				accordion_tab.removeClass('active');
					e.preventDefault();
						$(this).addClass('active');

		});


		if ($('#backtotop').length) {
			var scrollTrigger = 50, // px
				backToTop = function () {
					var scrollTop = $(window).scrollTop();
					if (scrollTop > scrollTrigger) {
						$('#backtotop').addClass('show');
					} else {
						$('#backtotop').removeClass('show');
					}
				};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
			$('#backtotop').on('click', function (e) {
				e.preventDefault();
				$('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}


		//고객문의
		$('.customer .icon6').click(function(){
			$('.mail-sand').show();
			return false;
		});
		$('.mail-sand .mail-sand-close').click(function(){
			$('.mail-sand').hide();
			return false;
		});



});
