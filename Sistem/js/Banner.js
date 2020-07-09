$(function () {

	var $images = $('.SLIDE > img');
	var imagesLeftToLoad = $images.length;

	$images.on('load', function () {

		imagesLeftToLoad -= 1;
		if (imagesLeftToLoad === 0) {
			init();
		}
	});

	var init = function () {

		var INDIKATOR = function ($c, $n, currIndex, nextIndex) {

			$INDIKATOR_WAKTU.stop().css('width', 0);
			$LONCAT.removeClass('current').eq(nextIndex).addClass('current');
		};

		var INDIKATOR_WAKTU = function () {

			$INDIKATOR_WAKTU.animate({width: '0%'}, INTERVAL);
		};

		var $BOX = $('#BOX'),
		$LONCAT = $('.LONCAT'),
		$INDIKATOR_WAKTU = $('#INDIKATOR_WAKTU'),
		INTERVAL = 5000,
		NORMAL = {
			speed: 1200,
			autoScroll: true,
			effect: 'scrollVert3d',
			timeout: INTERVAL,
			onbefore: INDIKATOR,
			onafter: INDIKATOR_WAKTU
		};

		$BOX.boxSlider(NORMAL);

		INDIKATOR_WAKTU();
		$('#LONCAT').on('click', '.LONCAT', function (ev) {

			$BOX.boxSlider('showSlide', $(this).data('slideindex'));
			ev.preventDefault();
		});
	};
});