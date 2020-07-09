<?php
include 'Silent.php';
include 'Atur-DB.php';

$MODE = $_GET['MODE'];
$HASIL = $_GET['HASIL'];
if ($HASIL === '*') {
	echo "Tampilkan Semua Data";
} elseif ($HASIL !== '' && $HASIL !== '*') {

	$KONEKSI = new mysqli( $NAMA_HOST, $NAMA_USER, $PASS_USER, $NAMA_DB );
	$X = '';

	if($MODE === 'Peminjaman_Alat') {
		$KD_KP = '';
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT nama_siswa FROM tbl_transaksi WHERE nama_siswa LIKE '%$HASIL%' LIMIT 1")) as $nama_siswa['nama_siswa']) {
			$X .= $nama_siswa['nama_siswa'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT nama_barang FROM tbl_transaksi WHERE nama_barang LIKE '%$HASIL%' LIMIT 1")) as $nama_barang['nama_barang']) {
			$X .= $nama_barang['nama_barang'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT kode_keperluan FROM tbl_keperluan WHERE nama_keperluan LIKE '%$HASIL%' LIMIT 1")) as $kode_keperluan['kode_keperluan']) {
			$KD_KP .= $kode_keperluan['kode_keperluan'].'|';
		}
		$KD_KP = explode('|',$KD_KP);
		$KD_KP_ = '';
		for($i = 0; $i < count($KD_KP)-1; $i++) {
			foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT kode_keperluan FROM tbl_transaksi WHERE kode_keperluan LIKE '%$KD_KP[$i]%' LIMIT 1")) as $kode_keperluan['kode_keperluan']) {
				$KD_KP_ .= $kode_keperluan['kode_keperluan'].'|';
			}
		}
		$KD_KP_ = explode('|',$KD_KP_);
		for($i = 0; $i < count($KD_KP_)-1; $i++) {
			foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT nama_keperluan FROM tbl_keperluan WHERE kode_keperluan LIKE '%$KD_KP_[$i]%'")) as $nama_keperluan['nama_keperluan']) {
				$X .= $nama_keperluan['nama_keperluan'].'|';
			}
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT tgl_pinjam FROM tbl_transaksi WHERE tgl_pinjam LIKE '%$HASIL%' LIMIT 1")) as $tgl_pinjam['tgl_pinjam']) {
			$X .= $tgl_pinjam['tgl_pinjam'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT tgl_kembali FROM tbl_transaksi WHERE tgl_kembali LIKE '%$HASIL%' LIMIT 1")) as $tgl_kembali['tgl_kembali']) {
			$X .= $tgl_kembali['tgl_kembali'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT id_peminjaman FROM tbl_transaksi WHERE id_peminjaman LIKE '%$HASIL%' LIMIT 1")) as $id_peminjaman['id_peminjaman']) {
			$X .= $id_peminjaman['id_peminjaman'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT keadaan FROM tbl_transaksi WHERE keadaan LIKE '%$HASIL%' LIMIT 1")) as $keadaan['keadaan']) {
			$X .= $keadaan['keadaan'].'|';
		}
	} else if($MODE === 'Daftar_Siswa') {
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT nisn FROM tbl_siswa WHERE nisn LIKE '%$HASIL%' LIMIT 1")) as $nisn['nisn']) {
			$X .= $nisn['nisn'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT nama_siswa FROM tbl_siswa WHERE nama_siswa LIKE '%$HASIL%' LIMIT 1")) as $nama_siswa['nama_siswa']) {
			$X .= $nama_siswa['nama_siswa'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT jenis_kelamin FROM tbl_siswa WHERE jenis_kelamin LIKE '%$HASIL%' LIMIT 1")) as $jenis_kelamin['jenis_kelamin']) {
			$X .= $jenis_kelamin['jenis_kelamin'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT tmpt_lahir FROM tbl_siswa WHERE tmpt_lahir LIKE '%$HASIL%' LIMIT 1")) as $tmpt_lahir['tmpt_lahir']) {
			$X .= $tmpt_lahir['tmpt_lahir'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT tgl_lahir FROM tbl_siswa WHERE tgl_lahir LIKE '%$HASIL%' LIMIT 1")) as $tgl_lahir['tgl_lahir']) {
			$X .= $tgl_lahir['tgl_lahir'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT alamat FROM tbl_siswa WHERE alamat LIKE '%$HASIL%' LIMIT 1")) as $alamat['alamat']) {
			$X .= $alamat['alamat'].'|';
		}
	} else if($MODE === 'Daftar_Barang') {
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT kode_barang FROM tbl_barang WHERE kode_barang LIKE '%$HASIL%' LIMIT 1")) as $kode_barang['kode_barang']) {
			$X .= $kode_barang['kode_barang'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT no_registrasi FROM tbl_barang WHERE no_registrasi LIKE '%$HASIL%' LIMIT 1")) as $no_registrasi['no_registrasi']) {
			$X .= $no_registrasi['no_registrasi'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT tgl_registrasi FROM tbl_barang WHERE tgl_registrasi LIKE '%$HASIL%' LIMIT 1")) as $tgl_registrasi['tgl_registrasi']) {
			$X .= $tgl_registrasi['tgl_registrasi'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT tgl_beli FROM tbl_barang WHERE tgl_beli LIKE '%$HASIL%' LIMIT 1")) as $tgl_beli['tgl_beli']) {
			$X .= $tgl_beli['tgl_beli'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT merk FROM tbl_barang WHERE merk LIKE '%$HASIL%' LIMIT 1")) as $merk['merk']) {
			$X .= $merk['merk'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT tipe FROM tbl_barang WHERE tipe LIKE '%$HASIL%' LIMIT 1")) as $tipe['tipe']) {
			$X .= $tipe['tipe'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT jenis FROM tbl_barang WHERE jenis LIKE '%$HASIL%' LIMIT 1")) as $jenis['jenis']) {
			$X .= $jenis['jenis'].'|';
		}
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT kelengkapan FROM tbl_barang WHERE kelengkapan LIKE '%$HASIL%' LIMIT 1")) as $kelengkapan['kelengkapan']) {
			$X .= $kelengkapan['kelengkapan'].'|';
		}
	} else if($MODE === 'Daftar_Pengguna') {
		foreach(mysqli_fetch_assoc($KONEKSI->query("SELECT nama_user FROM tbl_user WHERE nama_user LIKE '%$HASIL%' LIMIT 1")) as $nama_user['nama_user']) {
			$X .= $nama_user['nama_user'].'|';
		}
	} else {
		echo 'Akses diblokir';
	}
	$KONEKSI->close();
	if ($X === '') {
		echo 'Data Tidak Ditemukan';
	} else {
		$X = str_replace( ';', '</br>', "$X" );
		$X = bin2hex($X);
		$X = hex2bin($X);
		$X = str_replace( ' ', '&#x00a0;', "$X" );

		$X = explode('|', $X);
		for ($i=0; $i < count($X)-1; $i++) {
			echo '<div style="position:relative; width:192px; margin:0; padding:0 4px; border-top:2px #08F solid;">'.$X[$i].'</div>';
		}
	}
}
?>