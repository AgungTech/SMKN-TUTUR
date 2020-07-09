<?PHP

/**************************************************************************************************
|	Perintah untuk menampung semua pesan server & di proses di Konsol.js.
|**************************************************************************************************/

SET_ERROR_HANDLER( "KESALAHAN", E_ALL );

function KESALAHAN( $KODE, $PESAN, $FILE, $BARIS, $SPESIFIK ) {

	// Perbaiki kesalahan string di JavaScript
	$PESAN = str_replace( "'", "", "$PESAN" );
	$PESAN = str_replace( "\\", "/", "$PESAN" );
	$PESAN = str_replace( "\"", "", "$PESAN" );
	$PESAN = str_replace( "Access denied for", "Akses gagal untuk", "$PESAN" );
	$PESAN = str_replace( "Unknown", "Tidak di ketahui", "$PESAN" );
	$PESAN = str_replace( "to ", "untuk ", "$PESAN" );
	$PESAN = str_replace( "using", "menggunakan", "$PESAN" );
	$PESAN = str_replace( "YES", "YA", "$PESAN" );

/**************************************************************************************************
|	Pesan dari server akan di tampilkan di jendela PEMBERITAHUAN.
|**************************************************************************************************/

	// Peringatan (E_WARNING)
	if( $KODE == "2" ) {

		ECHO <<<JS
KONSOL( 'Peringatan (E_WARNING) di baris $BARIS : {$PESAN}' );
JS;
	}

	// Pesan (E_NOTICE)
	if( $KODE == "8" ) {

		ECHO <<<JS
KONSOL( 'Pesan di (E_NOTICE) baris $BARIS : {$PESAN}' );
JS;
	}

	// Kerusakan oleh user (E_USER_ERROR)
	if( $KODE == "256" ) {

		ECHO <<<JS
KONSOL( 'Kerusakan Server (E_USER_ERROR) di baris $BARIS : {$PESAN}' );
JS;
	}

	// Peringatan oleh user (E_USER_WARNING)
	if( $KODE == "512" ) {

		ECHO <<<JS
KONSOL( 'Peringatan Server (E_USER_WARNING) di baris $BARIS : {$PESAN}' );
JS;
	}

	// Pesan oleh user (E_USER_NOTICE)
	if( $KODE == "1024" ) {

		ECHO <<<JS
KONSOL( 'Pesan Server (E_USER_NOTICE) di baris $BARIS : {$PESAN}' );
JS;
	}

	// Kerusakan tidak diketahui (E_RECOVERABLE_ERROR)
	if( $KODE == "4096" ) {

		ECHO <<<JS
KONSOL( 'Kerusakan lain (E_RECOVERABLE_ERROR) di baris $BARIS : {$PESAN}' );
JS;
	}
}
?>