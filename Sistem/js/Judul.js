JUDUL_HALAMAN = function( LETAK, JUDUL ) {

	var KECEPATAN = 50;
	var PANJANG = JUDUL.length;

	if( LETAK < PANJANG ) {
		
		LETAK = LETAK + 1;
		MAJU = JUDUL.substr( 0, LETAK );
		document.title = "[" + MAJU + "]";
		window.setTimeout( "JUDUL_HALAMAN(" + LETAK + ",'" + JUDUL + "')", KECEPATAN );
	}
}

JUDUL_KONTEN = function( LETAK, JUDUL, TARGET ) {

	var KECEPATAN = 50;
	var PANJANG = JUDUL.length;

	if( LETAK < PANJANG ) {
		
		LETAK = LETAK + 1;
		MAJU = JUDUL.substr( 0, LETAK );
		TARGET.innerHTML = MAJU;
		window.setTimeout( "JUDUL_KONTEN(" + LETAK + ",'" + JUDUL + "'," + TARGET + ")", KECEPATAN );
	}
}
