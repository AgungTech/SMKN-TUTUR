<?php

function KONEKSI() {

	include 'Konsol.php';
	include 'Dukungan.php';
	include 'Atur-DB.php';

	$KONEKSI = new MYSQLI( $NAMA_HOST, $NAMA_USER, $PASS_USER);

	if ($KONEKSI->connect_error) {

		$ECHO = <<<JS
ATUR_KONEKSI('USER', '{$KET}' );
KONSOL( "Koneksi Gagal, coba periksa pengaturan User & Password Anda." );
JS;
		ECHO $ECHO;
	} else {

		$KONEKSI->close();

		$KONEKSI_DB = new MYSQLI( $NAMA_HOST, $NAMA_USER, $PASS_USER, $NAMA_DB );

		if ( $KONEKSI_DB->connect_error ) {

			$ECHO = <<<JS
ATUR_KONEKSI('DATABASE', '{$KET}' );
KONSOL( "Tidak bisa menemukan Database 'multimedia', atau mungkin User yang Anda gunakan tidak bisa mengaksesnya.");
JS;
		ECHO $ECHO;
		} else {

			$KONEKSI_DB->close();

			$ECHO = <<<JS
BERANDA();
JS;
		ECHO $ECHO;
		}
	}
}
KONEKSI();
?>
