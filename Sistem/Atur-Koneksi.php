<?php
function ATUR_DB() {
	
	include 'Silent.php';
	include 'Dukungan.php';
	include 'Atur-DB.php';

	$ATUR_HOST = $_GET['HOST'];
	$ATUR_USER = $_GET['USER'];
	$ATUR_PASS = $_GET['PASS'];
	$ATUR_DB   = 'multimedia';
	$MODE      = $_GET['MODE'];

	$DB_ISI = <<<DB
<?php
\$NAMA_HOST = "{$ATUR_HOST}";
\$NAMA_USER = "{$ATUR_USER}";
\$PASS_USER = "{$ATUR_PASS}";
\$NAMA_DB   = "{$ATUR_DB}";
?>
DB;

	if($MODE == 'TIDAK') {

		$KONEKSI = new MYSQLI( $ATUR_HOST, $ATUR_USER, $ATUR_PASS);

		if($KONEKSI->connect_error) {

			ECHO <<<DB
<p>Pengaturan salah, tidak bisa menyambung ke database</p>
DB;
		} else {

			$KONEKSI->close();
			$FILE_DB = "Atur-DB.php";
			$TULIS = fopen($FILE_DB, 'w') or die($DB_ISI);
			fwrite($TULIS, $DB_ISI);
			fclose($TULIS);

			$KONEKSI = new MYSQLI( $ATUR_HOST, $ATUR_USER, $ATUR_PASS, $ATUR_DB);

			if($KONEKSI->connect_error) {

				ECHO <<<DB
<p>Pengaturan berhasil di simpan</p><br>
<div class='TOMBOL' onclick="ATUR_KONEKSI('DATABASE', '{$KET}')">BUAT DATABASE</div>
DB;

			} else {
				
				$KONEKSI->close();
				ECHO <<<DB
<p>Pengaturan berhasil di simpan, dan Database 'multimedia' telah diakses.</p><br>
<div class='TOMBOL' onclick="ATUR_KONEKSI('SUKSES', 0)">SELESAI</div>
DB;
			}
		}

	} else if($MODE == 'YA') {


		$FILE_SQL = file_get_contents('Buat-DB.sql');
		$KONEKSI = new MYSQLI( $ATUR_HOST, $ATUR_USER, $ATUR_PASS);
		

		if($KONEKSI->query("CREATE DATABASE multimedia"))) {

			$KONEKSI->close();

			$KONEKSI = new MYSQLI( $ATUR_HOST, $ATUR_USER, $ATUR_PASS, $ATUR_DB);
			$KONEKSI->multi_query($FILE_SQL);

			$KONEKSI->close();
			
			$KONEKSI = new MYSQLI( $ATUR_HOST, $ATUR_USER, $ATUR_PASS);

			ECHO <<<DB
<p>Database Berhasil di Buat</p><br>
<div class='TOMBOL' onclick="ATUR_KONEKSI('SUKSES', 0)">SELESAI</div>

<p>KETERANGAN</p>
DB;
		} else {

			$KONEKSI->close();

			ECHO <<<DB
<p>Database gagal dibuat</p><br>
<div class='TOMBOL' onclick="ATUR_KONEKSI('MATI', '{$KET}')">ATUR KONEKSI</div>
ATAU:
<div class='TOMBOL' onclick="ATUR_KONEKSI('UNDUH', 0)">UNDUH FILE</div>

<p>KETERANGAN:</p>
Kemungkinan User yang Anda gunakan tidak diperbolehkan membuat Database, atau mungkin database sudah ada tetapi User yang Anda gunakan tidak bisa mengaksesnya.<br>
<p>Coba atur ulang User & Password Anda atau unduh file 'Buat-DB.sql' pada tombol 'UNDUH FILE' lalu <i>'import'</i> ke 'phpmyadmin' pada server Anda.</p>
DB;
		}
	}
}
ATUR_DB();
?>