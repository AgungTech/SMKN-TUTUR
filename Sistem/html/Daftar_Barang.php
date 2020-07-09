<?php
require 'Kompres.php';
$DATA = <<<HTML
<div id="NAV_INVENTARIS">
	<p class="JUDUL_ISI">Navigasi</p>
	<div class="JUDUL_TOMBOL">Cari Data</div>
	<input id="CARI_DATA" class="INPUTAN" type="text" placeholder="..."/>
	<input id="LIHAT_DATA" class="TOMBOL ATAS" type="button" value="Lihat" aktif/>
	<input id="TAMBAH_DATA" class="TOMBOL TENGAH" type="button" value="Tambah"/>
	<input id="UBAH_DATA" class="TOMBOL TENGAH" type="button" value="Ubah"/>
	<input id="IMPOR_DATA" class="TOMBOL TENGAH" type="button" value="Impor"/>
	<input id="EKSPOR_DATA" class="TOMBOL TENGAH" type="button" value="Ekspor"/>
	<input id="CETAK_DATA" class="TOMBOL TENGAH" type="button" value="Cetak"/>
	<input id="HAPUS_DATA" class="TOMBOL BAWAH" type="button" value="Hapus"/>
	<div class="JUDUL_TOMBOL">Data Per Halaman</div>
	<div class="INPUTAN">
		<input id="BATAS_DATA" type="range" min="1" max="100" step="1" value="30" />
	</div>
	<div class="JUDUL_TOMBOL">Pilih Data</div>
	<div class="INPUTAN">
		<input id="DATA_AWAL" class="DATA" type="number" value="0" min="0" max="" />
		<div class="_">&#x2014;</div>
		<input id="DATA_AKHIR" class="DATA" type="number" value="30" min="30" max="" />
	</div>
	<div class="JUDUL_TOMBOL">Halaman</div>
	<div id="HALAMAN" class="INPUTAN">
		<div class="NOMOR" fokus>1</div>
	</div>
</div>
<div id="ISI_INVENTARIS">
	<p id="JUDUL_ISI" class="JUDUL_ISI">Barang</p>
	<div class="TABEL_INVENTARIS" style="display:none">
		<table class="TB_DATA">
			<thead class="TB_NAMA">
				<tr>
					<th i='1'><p>&#xE739;</p></th>
					<th mati><p>No.</p></th>
					<th asc='0' i='2'><div>&#xE96D;</div><p>Kode Barang</p></th>
					<th i='3'><p>No. Registrasi</p></th>
					<th i='4'><p>Tgl. Registrasi</p></th>
					<th i='5'><p>Tgl. Beli</p></th>
					<th i='6'><p>Merk</p></th>
					<th i='7'><p>Tipe</p></th>
					<th i='8'><p>Jenis</p></th>
					<th i='9'><p>Jumlah</p></th>
					<th i='10'><p>Kelengkapan</p></th>
				</tr>
			</thead>
			<tbody class="TB_ISI">
			</tbody>
		</table>
	</div>
	<div class="FORM_INVENTARIS">
		<form class="FORM_INPUT KIRI">
			<div class="FORM_ATAS">Gambar</div>
			<div id="GAMBAR_BARANG" class="FORM_BAWAH">
				<img class="GAMBAR" src="Desain/Gambar/none.png"/>
			</div>
			<div class="FORM_ATAS">Kode QR</div>
			<div id="QR_BARANG" class="FORM_BAWAH">
				<img class="GAMBAR" src="Desain/Gambar/none.png"/>
			</div>
		</form>
		<form class="FORM_INPUT KANAN">
			<div class="FORM_ATAS">No. Registrasi</div>
			<input id="NO_REG" class="FORM_BAWAH" type="text" placeholder="..."/>
			<div class="FORM_ATAS">Tanggal Registrasi</div>
			<input id="TGL_REG" class="FORM_BAWAH" type="text" placeholder="..."/>
			<div class="FORM_ATAS">Tanggal Beli</div>
			<input id="TGL_BELI" class="FORM_BAWAH" type="text" placeholder="..."/>
			<div class="FORM_ATAS">Merk</div>
			<input id="MERK" class="FORM_BAWAH" type="text" placeholder="..."/>
			<div class="FORM_ATAS">Tipe</div>
			<input id="TIPE" class="FORM_BAWAH" type="text" placeholder="..."/>
			<div class="FORM_ATAS">Jenis</div>
			<input id="JENIS" class="FORM_BAWAH" type="text" placeholder="..."/>
			<div class="FORM_ATAS">Jumlah</div>
			<input id="JUMLAH" class="FORM_BAWAH" type="text" placeholder="..."/>
			<div class="FORM_ATAS">Kelengkapan</div>
			<input id="KELENGKAPAN" class="FORM_BAWAH" type="text" placeholder="..." style="height: 30px"/>
			<input id="SUBMIT" class="TOMBOL" type="button" value="Simpan"/>
			<input id="RESET" class="TOMBOL" type="reset" value="Reset"/>
			<input id="BATAL" class="TOMBOL" type="button" value="Batal"/>
		</form>
	</div>
</div>
HTML;
echo KOMPRES( $DATA );
?>