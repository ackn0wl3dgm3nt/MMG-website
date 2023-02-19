@@include('_webp.js')

function come(elem) {
	var docViewTop = $(window).scrollTop(),
		docViewBottom = docViewTop + $(window).height(),
		elemTop = $(elem).offset().top,
		elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('.slow-scroll').on('click', function() {
	let href = $(this).attr('href') || $(this).attr('data-href');
	let offset = $('.header').height() + 40;

	$('html, body').animate({
		scrollTop: $(href).offset().top - offset
	}, 800);
	setTimeout(function() {
		$('.sidebar').removeClass('sidebar_active');
		$('.header__burg').removeClass('header__burg_active');
	}, 900);
});

// $(document).on('scroll', function() {
// 	if ( $(window).scrollTop() >= 200 )
// 		$('header').addClass('header_fixed');
// 	else
// 		$('header').removeClass('header_fixed');
// });

$(document).ready(function() {
	$('.slider').slick({
		arrows: false,
		dots: true,
	});

	$('.header__burg').on('click', function() {
		$(this).toggleClass('header__burg_active');
		$('.sidebar').toggleClass('sidebar_active');
	});

	$(document).on('scroll', function() {
		
		if ( come('#intro') ) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#intro"]').addClass('header__item_active');
		} else if (come('#products')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#products"]').addClass('header__item_active');
		} else if (come('#news')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#news"]').addClass('header__item_active');
		} else if (come('#download')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#download"]').addClass('header__item_active');
		} else if (come('#contact')) {
			$('.header__item').removeClass('header__item_active');
			$('.header__item[href="#contact"]').addClass('header__item_active');
		}
	})
});