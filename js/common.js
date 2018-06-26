$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$('.contacts__title').click(function(){
	if($('.contacts__popup').css('display') == 'none') {
		$('.contacts__title').css({'color':'#e85f61','border-color':'#e85f61'});
		$('.contacts__popup').css({'display':'block'});
	}
	else if($('.contacts__popup').css('display') == 'block') {
		$('.contacts__popup').css({'display':'none'});
		// $('.contacts').css({'color':'#33bfe2','border-color':'#33bfe2'})
	}
});


	$('.contacts__title').hover(
		function(){
			$(this).css({'color':'#e85f61','border-color':'#e85f61','cursor':'pointer'});
		},
		function(){
			if($('.contacts__popup').css('display') === 'none') {
				$(this).css({'color':'#33bfe2','border-color':'#33bfe2'});
			}
			else if($('.contacts__popup').css('display') === 'block') {
				$(this).css({'color':'#e85f61','border-color':'#e85f61','cursor':'pointer'});
			}	
		}
	);

$(document).ready(
    function() {
       $(".about__inform").niceScroll({cursorcolor:"#d8d8d8"});
       $(".about__inform").niceScroll({cursorwidth:"5px"});
    }
);


var a;

$('.career-elems__item:nth-child(0)').click(function(){
	a = '0';
	$('.career-elems__img img').attr({'src':'img/stars.png'});
	click_career(a);
});

$('.career-elems__item:nth-child(1)').click(function(){
 	a = '1';
 	$('.career-elems__img img').attr({'src':'img/stars.png'});
 	click_career(a);
});

$('.career-elems__item:nth-child(2)').click(function(){
 	a = '2';
 	$('.career-elems__img img').attr({'src':'img/university-1.png'});
 	click_career(a);
});

$('.career-elems__item:nth-child(3)').click(function(){
	a = '3';
	$('.career-elems__img img').attr({'src':'img/dny.png'});
 	click_career(a);
});

$('.career-elems__item:nth-child(4)').click(function(){
	a = '4';
	$('.career-elems__img img').attr({'src':'img/stars.png'});
 	click_career(a);
});

function click_career() {
	$('.career-elems__item').removeClass('career-elems__item_active');
	$('.career-elems__item:nth-child(' + a +')').addClass('career-elems__item_active');
}

// var browser = navigator.userAgent;
// if(browser.indexOf('Trident') == -1) {
// 	$(window).load(function(){
// 		$('.work-item').each(function(index){
// 			var ths = $(this);
// 			setInterval(function(){
// 				ths.animated('fadeInDown');
// 			}, 300*index)
// 		});

// 		$('.career-row').each(function(index1){
// 			var ths1 = $(this);
// 			setInterval(function(){
// 				ths1.animated('fadeInRight');
// 			}, 300*index1)
// 		});

// 		$('nav').animated('fadeInLeft');
// 		$('.logo').animated('bounceInLeft');
// 		$('.contacts').animated('bounceInRight');
// 		$('.main-img').animated('bounceInUp');
// 		$('.sect-2 .img-wrapper').animated('bounceInUp');
// 		$('h1').animated('fadeInRight');
// 		$('.inform').animated('fadeInRight');
// 		$('.button-download').animated('fadeInRight');
// 		$('card').animated('zoomIn');
// 		});

// 		$(document).scroll(function(){
// 			$('footer').animated('fadeIn');
// 		});
// }
// else if(browser.indexOf('Trident') !== -1) {
// 	$('nav').css({'opacity':'1'});
// 	$('.career-row').css({'opacity':'1'});
// 	$('.work-item').css({'opacity':'1'});
// 	// alert('ie');
// }


