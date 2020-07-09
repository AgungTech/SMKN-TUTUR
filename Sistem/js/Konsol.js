KONSOL = function( TEKS ) {

	var KONSOL_BOX = document.querySelector( '.KONSOL' );
	var KONSOL_ISI = document.querySelector( '.KONSOL_ISI' );

	if( !KONSOL_BOX ) {

		var KONSOL_DIV = document.createElement( 'div' );
		KONSOL_DIV.setAttribute( 'class', 'KONSOL DIALOG_BOX' );
		KONSOL_DIV.style.opacity = '.8';
		KONTEN.appendChild( KONSOL_DIV );

		var KONSOL_BOX = document.querySelector( '.KONSOL' );

		KONSOL_BOX.onmouseover = function () {
			KONSOL_DIV.style.opacity = '1';
		}
		KONSOL_BOX.onmouseout = function () {
			KONSOL_DIV.style.opacity = '.8';
		}

		var KONSOL_JUDUL = document.createElement( 'div' );
		KONSOL_JUDUL.setAttribute( 'class', 'KONSOL_JUDUL JUDUL' );
		IKON_JUDUL(KONSOL_JUDUL, "&#xE814|PEMBERITAHUAN");
		KONSOL_BOX.appendChild( KONSOL_JUDUL );

		var KONSOL_X = document.createElement( 'div' );
		KONSOL_X.setAttribute( 'class', 'KONSOL_X TOMBOL_BATAL' );
		KONSOL_BOX.appendChild( KONSOL_X );
		IKON(KONSOL_X, "&#xE10A");

		var KONSOL_C = document.createElement( 'div' );
		KONSOL_C.setAttribute( 'class', 'KONSOL_C TOMBOL_PILIH' );
		KONSOL_BOX.appendChild( KONSOL_C );
		IKON(KONSOL_C, "&#xE117");

		var DIV_LK = document.createElement( 'div' );
		DIV_LK.setAttribute( 'class', 'KONSOL_ISI_LK ISI NANO' );
		KONSOL_BOX.appendChild( DIV_LK );

		var ISI_LK = document.querySelector( '.KONSOL_ISI_LK' );

		var DIV_DK = document.createElement( 'div' );
		DIV_DK.setAttribute( 'class', 'KONSOL_ISI NANO_KONTEN' );
		ISI_LK.appendChild( DIV_DK );

		var KONSOL_ISI = document.querySelector( '.KONSOL_ISI' );
		KONSOL_ISI.innerHTML += '<div>' + TEKS + '</div>';

		var KONSOL_X = document.querySelector( '.KONSOL_X' );
		KONSOL_X.onclick = function () {
			
			HILANG( KONSOL_BOX );
		}

		KONSOL_C = document.querySelector( '.KONSOL_C' );
		KONSOL_C.onclick = function () {
			
			KONSOL_ISI.innerHTML = '';
		}

		KURSOR( KONSOL_X, 'Link_.cur', 'Link.cur' );
		KURSOR( KONSOL_C, 'Link_.cur', 'Link.cur' );

		TOOLTIP( KONSOL_X, 'Tutup', '40px' );
		TOOLTIP( KONSOL_C, 'Bersihkan', '60px' );

	} else {

		$('.NANO').nanoScroller();
		var ISI_TAMBAH = '<div>' + TEKS + '</div>';
		var ISI_DULU = KONSOL_ISI.innerHTML;
		KONSOL_ISI.innerHTML = ISI_TAMBAH + ISI_DULU;
	}

	if( CEK_OBJEK( KONSOL_BOX ) === 'HILANG' ) {

		TAMPIL( KONSOL_BOX );
	}
}
