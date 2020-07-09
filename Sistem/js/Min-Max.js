MX = function( OBJEK, MODE ) {

	var KIRI, ATAS, MX_BOX, DIV, LEBAR, TINGGI, LETAK = 0;
	var POSISI = OBJEK.style.position;
	var Z_INDEK = OBJEK.style.zIndex;
	var MX_MODE = 'NORMAL';
	var MX_JUDUL = OBJEK.querySelector('.JUDUL').firstChild.querySelector('.TEKS_JUDUL');
	var XX = OBJEK.clientWidth;
	var YY = OBJEK.clientHeight;
	var ASAL = OBJEK.parentElement;

	window.addEventListener("resize", BERUBAH);

	function BERUBAH() {

		LEBAR = XX;
		TINGGI = YY;

		if(MODE == 'NYALA') {

			if(!OBJEK.querySelector('#MX')) {

				DIV = document.createElement( 'div' );
				DIV.setAttribute( 'id', 'MX' );
				DIV.setAttribute( 'class', 'TOMBOL_PILIH' );
				OBJEK.appendChild( DIV );

				MX_BOX = OBJEK.querySelector('#MX');
				IKON(MX_BOX, "");
				TOOLTIP(MX_BOX, 'Maksimalkan', '80px');

			}
		}

		if( ASAL == KONTEN ) {

			if( window.innerWidth < LEBAR || window.innerHeight < TINGGI ) {

				if( KONTEN.clientHeight >= window.innerHeight ) {
					LEBAR = window.innerWidth - 17;
				} else {
					LEBAR = window.innerWidth;
				}
				if( POSISI=='fixed' ) {
					TINGGI = window.innerHeight;
				}
				KIRI = 0;
				ATAS = 0;

			} else {

				if( POSISI=='fixed' ) {

					KIRI = (window.innerWidth-LEBAR)/2;
					ATAS = (window.innerHeight-TINGGI)/2;
				}
			}

		} else {

			if( window.innerWidth < LEBAR || window.innerHeight < TINGGI ) {

				if( OBJEK.clientHeight >= ASAL.clientHeight ) {

					LEBAR = window.innerWidth - 17;

				} else {
					LEBAR = window.innerWidth;
				}

				if( POSISI == 'fixed' ) {
					TINGGI = ASAL.clientHeight;
				}

				KIRI = 0;
				ATAS = 0;

			} else {
				
				if( POSISI=='fixed' ) {

					KIRI = (ASAL.clientWidth-LEBAR)/2;
					ATAS = (ASAL.clientHeight-TINGGI)/2;

				} else {

					KIRI = OBJEK.style.left;
					ATAS = OBJEK.style.top;

				}
			}
		}

		function MX_NORMAL() {

			anime({
				targets    : OBJEK,
				width      : LEBAR,
				height     : TINGGI,
				left       : KIRI,
				top        : ATAS,
				opacity    : {value: 1, duration: 300},
				duration   : 200,
				easing     : 'easeOutQuart'
			});
		}

		function MX_FULL() {

			if(ASAL == KONTEN) {

				if( KONTEN.clientHeight >= window.innerHeight ) {

					anime({
						targets    : OBJEK,
						width      : window.innerWidth - 17,
						height     : window.innerHeight,
						left       : 0,
						top        : 0,
						opacity    : {value: 1, duration: 200},
						duration   : 200,
						easing     : 'easeOutQuart'
					});

				} else {

					anime({
						targets    : OBJEK,
						width      : window.innerWidth,
						height     : window.innerHeight,
						left       : 0,
						top        : 0,
						opacity    : {value: 1, duration: 1},
						duration   : 200,
						easing     : 'easeOutQuart'
					});
				}
			} else {

				if( OBJEK.clientHeight >= ASAL.clientHeight ) {

					anime({
						targets    : OBJEK,
						width      : ASAL.clientWidth - 17,
						height     : ASAL.clientHeight,
						left       : 0,
						top        : 0,
						opacity    : {value: 1, duration: 200},
						duration   : 200,
						easing     : 'easeOutQuart'
					});

				} else {

					anime({
						targets    : OBJEK,
						width      : ASAL.clientWidth,
						height     : ASAL.clientHeight,
						left       : 0,
						top        : 0,
						opacity    : {value: 1, duration: 200},
						duration   : 200,
						easing     : 'easeOutQuart'
					});
				}
			}
		}

		if(LETAK==0) {

			LETAK = 1;

			MX_NORMAL();

		} else {

			if(MX_MODE === 'NORMAL') {

				MX_NORMAL();

			} else if(MX_MODE === 'FULL') {

				MX_FULL();
			}

			MX_JUDUL_X = MX_JUDUL.clientWidth;
		}

		if(MODE == 'NYALA') {

			MX_BOX.onclick = function() {
								
				if(MX_MODE === 'NORMAL'){

					MX_MODE = 'FULL';
					MX_FULL();
					IKON(MX_BOX, "");
					TOOLTIP(MX_BOX, 'Normalkan', '70px');

					if(POSISI !== 'fixed' && ASAL == KONTEN) {
						OBJEK.style.zIndex = '150';
						OBJEK.style.position = 'fixed';	
					}
					if(MX_JUDUL) {
						MX_JUDUL.style.width = '100%';
					}

				} else if(MX_MODE === 'FULL') {

					MX_MODE = 'NORMAL';
					MX_NORMAL();
					IKON(MX_BOX, "")
					TOOLTIP(MX_BOX, 'Maksimalkan', '80px');

					OBJEK.style.zIndex = Z_INDEK;

					if(POSISI !== 'fixed') {
						OBJEK.style.position = POSISI;
					}
					if(MX_JUDUL) {
						MX_JUDUL.style.width = 'auto';
					}
				}
			}
		}
	}

	BERUBAH();
}
