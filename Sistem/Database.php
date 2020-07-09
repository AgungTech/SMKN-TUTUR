<?php
include 'Silent.php';
include 'Atur-DB.php';

$HASIL = $_GET['HASIL'];
$ORDER = $_GET['ORDER'];
$LIMIT = $_GET['LIMIT'];
$MODE = $_GET['MODE'];
$PILIH = $_GET['PILIH'];
$OPSI = $_GET['OPSI'];

$KONEKSI = new mysqli( $NAMA_HOST, $NAMA_USER, $PASS_USER, $NAMA_DB );

$DB = array(
	'PA' => array('tbl_transaksi','id_peminjaman','nama_siswa','nama_barang','tgl_pinjam','tgl_kembali','kode_keperluan','keadaan','detail'),
	'DS' => array('tbl_siswa','nisn','nama_siswa','jenis_kelamin','tmpt_lahir','tgl_lahir','alamat','kelas','prg_keahlian'),
	'DB' => array('tbl_barang','kode_barang','no_registrasi','tgl_registrasi','tgl_beli','merk','tipe','jenis','kelengkapan','jumlah'),
	'DP' => array('tbl_user','id_user','nama_user','kunci','level'),
	'DK' => array('tbl_keperluan','kode_keperluan','nama_keperluan')
);
function DB($DATA, $X) {
	global $HASIL, $ORDER, $LIMIT, $KONEKSI;
	if ($HASIL === '*') {
		if($X == 0) {
			$Z = $KONEKSI->query("SELECT * FROM $DATA[0] ORDER BY $ORDER LIMIT $LIMIT");
		} else {
			$Z = $KONEKSI->query("SELECT $DATA[1] FROM $DATA[0]")->num_rows;
		}
	} else {
		$Y = '';
		foreach ($DATA as $i) {
			if ($i == $DATA[0]) {
				$Y .= "SELECT * FROM $i";
			} elseif ($i == $DATA[1]) {
				$Y .= " WHERE $i LIKE '%$HASIL%'";
			} else {
				$Y .= " OR $i LIKE '%$HASIL%'";
			}
		}
		if ($X == 0) {
			$Z = $KONEKSI->query("$Y ORDER BY $ORDER LIMIT $LIMIT");
		} else {
			$Z = $KONEKSI->query($Y)->num_rows;
		}
	}
	return($Z);
}

if ($HASIL !== '') {
	$NOMOR = explode(',',$LIMIT);
	$NOMOR_ATAS = $NOMOR[0];

	if ($MODE === 'Peminjaman_Alat') {
		if($OPSI === 'TAMBAH') {

		} elseif ($OPSI === 'LIHAT') {
			$TABEL = DB($DB['PA'], 0);
			$TOTAL = DB($DB['PA'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$BARIS .= '<tr><td>&#xE739;</td><td>'.++$NOMOR[0].'</td><td>'.$i['id_peminjaman'].'</td><td>'.$i['nama_siswa'].'</td><td>'.$i['nama_barang'].'</td><td>'.$i['tgl_pinjam'].'</td><td>'.$i['tgl_kembali'].'</td><td>'.$i['kode_keperluan'].'</td><td>'.$i['keadaan'].'</td><td>'.$i['detail'].'</td></tr>';
			}
		} elseif ($OPSI === 'UBAH') {

		} elseif ($OPSI === 'HAPUS') {
			$HAPUS = explode('|',$PILIH);
			$ii = '';
			for ($i = 0; $i < count($HAPUS); $i++) {
				if($HAPUS[$i] != '') {
					if ($i == 0) {
						$ii = 'kode_barang = "'.$HAPUS[$i].'"';
					} else {
						$ii .= ' OR kode_barang = "'.$HAPUS[$i].'"';
					}
				}
			}
			if($ii != '') {
				$KONEKSI->multi_query("DELETE FROM tbl_barang WHERE ".$ii);
			}
			$TABEL = DB($DB['PA'], 0);
			$TOTAL = DB($DB['PA'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$BARIS .= '<tr><td>&#xE10A;</td><td>'.++$NOMOR[0].'</td><td>'.$i['id_peminjaman'].'</td><td>'.$i['nama_siswa'].'</td><td>'.$i['nama_barang'].'</td><td>'.$i['tgl_pinjam'].'</td><td>'.$i['tgl_kembali'].'</td><td>'.$i['kode_keperluan'].'</td><td>'.$i['keadaan'].'</td><td>'.$i['detail'].'</td></tr>';
			}
		}
		$BARIS = str_replace(' ', '&#x00a0;', $BARIS);
		$BARIS = str_replace('-', '&#x2011;', $BARIS);
		echo "$NOMOR_ATAS<|>$TOTAL<|>$BARIS";

	} elseif ($MODE === 'Daftar_Siswa') {
		if($OPSI === 'TAMBAH') {

		} elseif ($OPSI === 'LIHAT') {
			$TABEL = DB($DB['DS'], 0);
			$TOTAL = DB($DB['DS'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$ALAMAT = str_replace(";", ", ", $i['alamat']);
				$BARIS .= '<tr><td>&#xE739;</td><td>'.++$NOMOR[0].'</td><td>'.$i['nisn'].'</td><td>'.$i['nama_siswa'].'</td><td>'.$i['jenis_kelamin'].'</td><td>'.$i['tmpt_lahir'].'</td><td>'.$i['tgl_lahir'].'</td><td>'.$ALAMAT.'</td><td>'.$i['kelas'].'</td><td>'.$i['prg_keahlian'].'</td></tr>';
			}
		} elseif ($OPSI === 'UBAH') {

		} elseif ($OPSI === 'HAPUS') {
			$HAPUS = explode('|',$PILIH);
			$ii = '';
			for ($i = 0; $i < count($HAPUS); $i++) {
				if($HAPUS[$i] != '') {
					if ($i == 0) {
						$ii = 'kode_barang = "'.$HAPUS[$i].'"';
					} else {
						$ii .= ' OR kode_barang = "'.$HAPUS[$i].'"';
					}
				}
			}
			if($ii != '') {
				$KONEKSI->multi_query("DELETE FROM tbl_barang WHERE ".$ii);
			}
			$TABEL = DB($DB['DS'], 0);
			$TOTAL = DB($DB['DS'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$BARIS .= '<tr><td>&#xE10A;</td><td>'.++$NOMOR[0].'</td><td>'.$i['nisn'].'</td><td>'.$i['nama_siswa'].'</td><td>'.$i['jenis_kelamin'].'</td><td>'.$i['tmpt_lahir'].'</td><td>'.$i['tgl_lahir'].'</td><td>'.$i['alamat'].'</td><td>'.$i['kelas'].'</td><td>'.$i['prg_keahlian'].'</td></tr>';
			}
		}
		$BARIS = str_replace(' ', '&#x00a0;', $BARIS);
		$BARIS = str_replace('-', '&#x2011;', $BARIS);
		echo "$NOMOR_ATAS<|>$TOTAL<|>$BARIS";
	} elseif ($MODE === 'Daftar_Barang') {
		if($OPSI === 'TAMBAH') {

		} elseif ($OPSI === 'LIHAT') {
			$TABEL = DB($DB['DB'], 0);
			$TOTAL = DB($DB['DB'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$BARIS .= '<tr><td>&#xE739;</td><td>'.++$NOMOR[0].'</td><td>'.$i['kode_barang'].'</td><td>'.$i['no_registrasi'].'</td><td>'.$i['tgl_registrasi'].'</td><td>'.$i['tgl_beli'].'</td><td>'.$i['merk'].'</td><td>'.$i['tipe'].'</td><td>'.$i['jenis'].'</td><td>'.$i['jumlah'].'</td><td>'.$i['kelengkapan'].'</td></tr>';
			}
		} elseif ($OPSI === 'UBAH') {

		} elseif ($OPSI === 'HAPUS') {
			$HAPUS = explode('|',$PILIH);
			$ii = '';
			for ($i = 0; $i < count($HAPUS); $i++) {
				if($HAPUS[$i] != '') {
					if ($i == 0) {
						$ii = 'kode_barang = "'.$HAPUS[$i].'"';
					} else {
						$ii .= ' OR kode_barang = "'.$HAPUS[$i].'"';
					}
				}
			}
			if($ii != '') {
				$KONEKSI->multi_query("DELETE FROM tbl_barang WHERE ".$ii);
			}
			$TABEL = DB($DB['DB'], 0);
			$TOTAL = DB($DB['DB'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$BARIS .= '<tr><td>&#xE10A;</td><td>'.++$NOMOR[0].'</td><td>'.$i['kode_barang'].'</td><td>'.$i['no_registrasi'].'</td><td>'.$i['tgl_registrasi'].'</td><td>'.$i['tgl_beli'].'</td><td>'.$i['merk'].'</td><td>'.$i['tipe'].'</td><td>'.$i['jenis'].'</td><td>'.$i['jumlah'].'</td><td>'.$i['kelengkapan'].'</td></tr>';
			}
		}
		$BARIS = str_replace(' ', '&#x00a0;', $BARIS);
		$BARIS = str_replace('-', '&#x2011;', $BARIS);
		echo "$NOMOR_ATAS<|>$TOTAL<|>$BARIS";
	} elseif ($MODE === 'Daftar_Pengguna') {
		if($OPSI === 'TAMBAH') {

		} elseif ($OPSI === 'LIHAT') {
			$TABEL = DB($DB['DP'], 0);
			$TOTAL = DB($DB['DP'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$BARIS .= '<tr><td>&#xE739;</td><td>'.++$NOMOR[0].'</td><td>'.$i['id_user'].'</td><td>'.$i['nama_user'].'</td><td>'.$i['kunci'].'</td><td>'.$i['level'].'</td></tr>';
			}
		} elseif ($OPSI === 'UBAH') {

		} elseif ($OPSI === 'HAPUS') {
			$HAPUS = explode('|',$PILIH);
			$ii = '';
			for ($i = 0; $i < count($HAPUS); $i++) {
				if($HAPUS[$i] != '') {
					if ($i == 0) {
						$ii = 'kode_barang = "'.$HAPUS[$i].'"';
					} else {
						$ii .= ' OR kode_barang = "'.$HAPUS[$i].'"';
					}
				}
			}
			if($ii != '') {
				$KONEKSI->multi_query("DELETE FROM tbl_barang WHERE ".$ii);
			}
			$TABEL = DB($DB['DP'], 0);
			$TOTAL = DB($DB['DP'], 1);
			while($i = mysqli_fetch_assoc($TABEL)) {
				$BARIS .= '<tr><td>&#xE10A;</td><td>'.++$NOMOR[0].'</td><td>'.$i['id_user'].'</td><td>'.$i['nama_user'].'</td><td>'.$i['kunci'].'</td><td>'.$i['level'].'</td></tr>';
			}
		}
		$BARIS = str_replace(' ', '&#x00a0;', $BARIS);
		$BARIS = str_replace('-', '&#x2011;', $BARIS);
		echo "$NOMOR_ATAS<|>$TOTAL<|>$BARIS";
	}
}

$KONEKSI->close();
?>