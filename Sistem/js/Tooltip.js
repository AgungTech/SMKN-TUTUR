
TOOLTIP = function( OBJEK, NAMA, LEBAR ) {

	var TOOLTIP_BOX    = document.querySelector( '.TOOLTIP' );
	var TOOLTIP_KONTEN = document.querySelector( '.TOOLTIP_KONTEN' );

	GANTI_TOOLTIP = function( NAMA, LEBAR ) {

		if( !TOOLTIP_BOX ) {

			var TOOLTIP_DIV = document.createElement( 'div' );
			TOOLTIP_DIV.setAttribute( 'class', 'TOOLTIP' );
			TOOLTIP_DIV.setAttribute( 'disabled', 0 );
			document.body.appendChild( TOOLTIP_DIV );
			
			TOOLTIP_BOX  = document.querySelector( '.TOOLTIP' );
			var TOOLTIP_DIV2 = document.createElement( 'div' );
			TOOLTIP_DIV2.setAttribute( 'class', 'TOOLTIP_KONTEN' );
			TOOLTIP_BOX.appendChild( TOOLTIP_DIV2 );

			TOOLTIP_KONTEN = document.querySelector( '.TOOLTIP_KONTEN' );
			TOOLTIP_KONTEN.innerHTML   = NAMA;
			TOOLTIP_KONTEN.style.width = LEBAR;

			function TOOLTIP_PINDAH(e) {

				var X  = e.clientX;
				var Y  = e.clientY;
				var LEBAR  = window.innerWidth;
				var TINGGI = window.innerHeight;

				var TOOLTIP_BOX    = document.querySelector( '.TOOLTIP' );
				var TOOLTIP_KONTEN = document.querySelector( '.TOOLTIP_KONTEN' );

				var TEKS           = TOOLTIP_KONTEN.innerHTML;
				var TENGAH         = parseInt(TOOLTIP_KONTEN.style.width)/2;

				var PERSEN_BODY    = $('.BODY').scrollTop();

				function ANIMASI(X2,Y2) {

					if( CEK_OBJEK(TOOLTIP_BOX) === 'TAMPIL' ) {

						TOOLTIP_BOX.style.transitionDelay=".00001s";
						TOOLTIP_BOX.style.transitionDuration=".2s";
						TOOLTIP_BOX.style.transitionTimingFunction="cubic-bezier(0.25,0.1,0.25,1)";
						TOOLTIP_BOX.style.transform = "translate("+(X+X2)+"px,"+(Y+Y2)+"px)";
					}
				}

				function POSISI(ATAS, KANAN, BAWAH, KIRI) {

					if( CEK_OBJEK(TOOLTIP_BOX) === 'TAMPIL' ) {

						TOOLTIP_KONTEN.style.top    = ATAS;
						TOOLTIP_KONTEN.style.right  = KANAN;
						TOOLTIP_KONTEN.style.bottom = BAWAH;
						TOOLTIP_KONTEN.style.left   = KIRI;
					}
				}

				if( X > (LEBAR-15) ) {

					if ( KONTEN.clientHeight >= window.innerHeight ) {

						var PERSEN = Math.round( ( (Y+PERSEN_BODY) / KONTEN.clientHeight ) *100 ) + '% >';

						GANTI_TOOLTIP( PERSEN, '50px' );
						/*TAMPIL(TOOLTIP_BOX);*/

					} else {

						/*var PERSEN = Math.round( ( (Y) / window.innerHeight ) *100 ) + '% >';*/

					}
							
				} else {

					if( TEKS.substring(1,4) == '% &' || TEKS.substring(2,5) == '% &' || TEKS.substring(3,6) == '% &' ) {

						HILANG(TOOLTIP_BOX);
					}
				}

				if( X < (LEBAR*.15) && Y > (TINGGI*.15) ) {

					POSISI('auto','auto','0','0');
					ANIMASI(20,-30);

				} else if( X < (LEBAR*.15) && Y <= (TINGGI*.15) ) {

					POSISI('0','auto','auto','0');
					ANIMASI(20,30);

				} else if( X >= (LEBAR*.15) && X <= (LEBAR*.85) && Y <= (TINGGI*.15) ) {

					POSISI('0','0','auto','auto');
					ANIMASI(TENGAH,30);

				} else if( X > (LEBAR*.85) && Y <= (TINGGI*.15) ) {

					POSISI('0','0','auto','auto');
					ANIMASI(-20,30);

				} else if( X > (LEBAR*.85) && Y > (TINGGI*.15) ) {

					POSISI('auto','0','0','auto');
					ANIMASI(-20,-30);
				} else {

					POSISI('auto','0','0','auto');
					ANIMASI(TENGAH,-30);
				}
			}

			DOKUMEN.addEventListener( "mouseup", TOOLTIP_PINDAH );
			DOKUMEN.addEventListener( "mousemove", TOOLTIP_PINDAH );
			DOKUMEN.addEventListener( "keydown", TOOLTIP_PINDAH );
			
			HILANG(TOOLTIP_BOX);
		}
	}

	GANTI_TOOLTIP( NAMA, LEBAR );

	function MOUSE_MASUK() {
		TOOLTIP_KONTEN.innerHTML= NAMA;
		TOOLTIP_KONTEN.style.width = LEBAR;
		TAMPIL(TOOLTIP_BOX);
	}

	function MOUSE_KELUAR() {
		HILANG(TOOLTIP_BOX);
	}

	OBJEK.addEventListener( "mouseover", MOUSE_MASUK );
	OBJEK.addEventListener( "mouseout", MOUSE_KELUAR );
}

OBJEK_BUANG = function( OBJEK ) {

	var PARENT = OBJEK.parentElement;
	PARENT.removeChild(OBJEK);
	var TOOLTIP_BOX = document.querySelector( '.TOOLTIP' );
	HILANG(TOOLTIP_BOX);
}
BUANG = function( OBJEK ) {

	if( OBJEK !== undefined || typeof OBJEK !== 'object' ) {

		OBJEK.style.opacity = '0';
		window.setTimeout( OBJEK_BUANG(OBJEK), 200 );

	} else {

		console.log( 'Transisi gagal, objek tidak ada / bukan objek' );
	}
}
