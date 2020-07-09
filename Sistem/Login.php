<?php
function LOGIN() {

	include 'Atur-DB.php';
	
	$USER = $_GET['USER'];
	$PASS = $_GET['PASS'];

	$KONEKSI = new MYSQLI( $NAMA_HOST, $NAMA_USER, $PASS_USER, $NAMA_DB );

	if($KONEKSI->connect_error) {

		ECHO <<<DB
<p>Pengaturan salah, tidak bisa menyambung ke database</p>
DB;
	} else {

		$PILIH = "SELECT * FROM tbl_user WHERE nama_user = '".$USER."' and kunci = '".$PASS."'";

		$HASIL = mysqli_query($KONEKSI, $PILIH);

		if (mysqli_num_rows($HASIL) > 0) {

			$KOLOM = mysqli_fetch_assoc($HASIL);

			if($KOLOM["level"] == 'admin') {

				echo <<<HTML
INFO("{$KOLOM['id_user']}");
HTML;
			} else if($KOLOM["level"] == 'siswa') {

				echo <<<HTML
GALERI("{$KOLOM['id_user']}");
HTML;
			}

		} else {

				echo "KETERANGAN.innerHTML = '<p>Nama / Password Anda salah</p>'";
			}

		mysqli_close($KONEKSI);

	}
}
LOGIN();
?>