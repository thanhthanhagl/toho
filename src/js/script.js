jQuery(function($) {
//
// 変数を定義
//------------------------------------
	var $body = $('body'),
		$header = $('.l-header'),
		$menuButton = $('.l-menu'),
		$headerNav = $('.l-header__nav'),
		desktopMode = ($menuButton.css('display') != 'none');
		function headerHeight() {
			$headerHeight = $header.outerHeight();
		}
		headerHeight();

//
// header-menu
//------------------------------------
	//ハンバーガーボタンクリック
	$menuButton.click(function() {
		if ( $(this).hasClass('is-open') ) {
			$(this).removeClass('is-open');
			$('.l-header__item.is-hover').removeClass('is-open');
			$headerNav.css('left','-100%');
			$('body').removeClass('is-fixed');
		} else {
			$(this).addClass('is-open');
			$headerNav.css('left','0');
			$('body').addClass('is-fixed');
		}
	});

	//SPメニュー内アコーディオン
	$(".l-header__item.is-hover").click(function (e) {
		if(!desktopMode){
			if ( $(this).hasClass('is-open') ) {
				$(this).removeClass('is-open');
			} else {
				$(this).addClass('is-open');
			}
		}
	});	
//
// pagetop
//------------------------------------
var $pagetop = $('.js-pagetop');
$pagetop.click(function() {
	$('body,html').stop().animate({scrollTop: 0}, 500);
	return false;
});

//
// スムーススクロール関係js ここから
//------------------------------------
	// ページ内リンク要
	$('a[href^="#"], area[href^="#"]').not('a[href="#"], area[href="#"]').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname && this.hash.replace(/#/, '')) {
			headerHeight();
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) + ']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top - $headerHeight;
				$('body,html').stop().animate({
					scrollTop: targetOffset
				}, 500);
				return false;
			}
		}
	});
	$(window).on('resize orientationchange', function() {
		// ページ外リンクで#の位置へ飛ぶ
		if (location.hash) {
			var targetOffset = $(location.hash).offset().top - $headerHeight;
			$('body,html').stop().animate({
				scrollTop: targetOffset
			}, 0);
		}
	})
	//fade in up
	AOS.init({
		duration: 1000,
	  });
});
