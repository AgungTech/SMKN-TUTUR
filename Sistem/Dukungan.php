<?php
$KETERANGAN = '';
$KOMPLIT = '';
$KET = '';
if (version_compare(PHP_VERSION, '7.0.0') >= 0) {
	$KETERANGAN .= 'Aplikasi ini membutuhkan Versi PHP minimal: 7.0.0, Versi PHP Anda: ' . PHP_VERSION . " <strong>(Baik)</strong><br/>";
	$KOMPLIT .= '1';
} else {
	$KETERANGAN .= 'Aplikasi ini membutuhkan Versi PHP minimal: 7.0.0, Versi PHP Anda: ' . PHP_VERSION . ". <strong>(Buruk)</strong><br/>";
	$KOMPLIT .='0';
}
if (extension_loaded ('PDO' )){
	$KETERANGAN .= 'PDO telah terpasang di server Anda. <strong>(Baik)</strong><br/>';
	$KOMPLIT .= '1';
} else {
	$KETERANGAN .= 'PDO tidak terpasang di server Anda. <strong>(Buruk)</strong><br/>';
	$KOMPLIT .='0';
}
if (extension_loaded ('pdo_mysql' )){
	$KETERANGAN .= 'PDO MySQL Driver sudah aktif. <strong>(Baik)</strong><br/>';
	$KOMPLIT .= '1';
} else {
	$KETERANGAN .= 'PDO MySQL Driver tidak aktif. <strong>(Buruk)</strong><br/>';
	$KOMPLIT .='0';
}
if ($KOMPLIT=='111') {
	$KET = $KETERANGAN.'Aplikasi ini dapat bekerja dengan baik pada server Anda.';
} else {
	$KET = $KETERANGAN.'Aplikasi ini tidak dapat bekerja dengan baik, tolong penuhi kebutuhan minimal server Anda.<br>';
}
?>