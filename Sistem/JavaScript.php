<?php
require 'Silent.php';
 if( $_GET["TOKEN"] )
{
	include 'Enkripsi.php';
	include 'Kompres.php';
	include 'Token';
	$HASIL = '';
	$BERKAS = array(
		'Plugin/box-slider-scroll-3d.jquery.min',
		'Plugin/jquery.qrcode.min',
		'Plugin/jquery.qrcode.lib',
		'Plugin/jquery.qrcode.cam',
		'Tooltip',
		'Kursor',
		'Ikon',
		'Konsol',
		'Judul',
		'Min-Max',
		'Ajax',
		'Atur-Koneksi',
		'Beranda',
		'Tentang',
		'Admin'
		);
	foreach( $BERKAS as $NAMA )
	{
		$HASIL .= file_get_contents('js/'.$NAMA.'.js');
	}
	$HASIL = KOMPRES( $HASIL );
	$HASIL = ENKRIPSI( $_GET["TOKEN"], $HASIL );
	if( $TOKEN !== "" ) {
		echo DEKRIPSI( $TOKEN, $HASIL );
		$ISI = <<<DB
<?php
\$TOKEN = "";
?>
DB;
		$FILE = "Token";
		$TULIS = fopen($FILE, 'w') or die();
		fwrite($TULIS, $ISI);
		fclose($TULIS);
	} else {
		echo "<script>window.alert('Akses diblokir')</script>";
	}
}else{
	echo "<script>window.alert('Akses diblokir')</script>";
}
?>