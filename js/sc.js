$(function(){
	$('.play').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		// 画像の余白を詰める
		variableWidth: true,
		dots: true,             //スライドしたのドット
	    arrows: true,           //左右の矢印
	    infinite: true,         //スライドのループ
	  });
	  
});