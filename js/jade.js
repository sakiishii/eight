$(function(){
	$(window).scroll(function (){
		$('.js-fade,.js-fadeleft,.js-faderight').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});
	});
});