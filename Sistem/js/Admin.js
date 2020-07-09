INFO = function( ID ) {

	KONTEN.innerHTML = '';
	JUDUL_HALAMAN(0,"ADMIN > INFO");

	var KEPALA 	= KONTEN.querySelector('.KEPALA'),
	MENU_UTAMA 	= KONTEN.querySelector('.MENU_UTAMA'),
	ISI 			= KONTEN.querySelector('#ISI'),
	ISI_INFO 		= KONTEN.querySelector('.ISI_INFO'),
	FOOTER 		= KONTEN.querySelector('.FOOTER'),
	GRADIEN 		= 'background:-webkit-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:-o-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:-moz-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:linear-gradient(rgb(0,112,177),rgb(28,181,235));';

	if(!KEPALA) {

		var KEPALA_BOX = document.createElement('div');
		KEPALA_BOX.setAttribute('class', 'KEPALA');
		KONTEN.appendChild(KEPALA_BOX);
		KEPALA = KONTEN.querySelector('.KEPALA');
		$.get('Sistem/html/Kepala.php', function(DATA, STATUS) {
			KEPALA.innerHTML = DATA;
			var LOGO = KEPALA.querySelector('#LOGO');
			$.get('Sistem/html/Logo.php', function(DATA_, ST_) {
				LOGO.innerHTML = DATA_;
			})
		})
	}

	if(!MENU_UTAMA) {

		var MENU_BOX = document.createElement('div');
		MENU_BOX.setAttribute('class', 'MENU_UTAMA');
		KONTEN.appendChild(MENU_BOX);

		MENU_UTAMA = KONTEN.querySelector('.MENU_UTAMA');

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'MENU_INFO' );
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR AKTIF' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_INFO = KONTEN.querySelector('#MENU_INFO');

		IKON(MENU_INFO, "INFO");

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'MENU_INVENTARIS' );
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_INVENTARIS = KONTEN.querySelector('#MENU_INVENTARIS');

		IKON(MENU_INVENTARIS, "INVENTARIS");

		$.get('Sistem/html/Menu-Inventaris.php', function(DATA, STATUS) {

			MENU_INVENTARIS.innerHTML += DATA;

			$("#MENU_INVENTARIS").mouseenter(function(){
			  $(".DAFTAR_INVENTARIS").slideDown("fast");
			});

			$("#MENU_INVENTARIS").mouseleave(function(){
			  $(".DAFTAR_INVENTARIS").slideUp("fast");
			});

			var Peminjaman_Alat 	= MENU_INVENTARIS.querySelector('#Peminjaman_Alat'),
			Daftar_Siswa 		= MENU_INVENTARIS.querySelector('#Daftar_Siswa'),
			Daftar_Barang 		= MENU_INVENTARIS.querySelector('#Daftar_Barang'),
			Daftar_Pengguna 	= MENU_INVENTARIS.querySelector('#Daftar_Pengguna');

			Peminjaman_Alat.onclick = function() {

				JUDUL_HALAMAN(0,"ADMIN > Peminjaman Alat");
				INVENTARIS( ID, "Peminjaman_Alat" );
			}
			Daftar_Siswa.onclick = function() {
				JUDUL_HALAMAN(0,"ADMIN > Daftar Siswa");
				INVENTARIS( ID, "Daftar_Siswa" );
			}
			Daftar_Barang.onclick = function() {
				JUDUL_HALAMAN(0,"ADMIN > Daftar Barang");
				INVENTARIS( ID, "Daftar_Barang" );
			}
			Daftar_Pengguna.onclick = function() {
				JUDUL_HALAMAN(0,"ADMIN > Daftar Pengguna");
				INVENTARIS( ID, "Daftar_Pengguna" );
			}

		});

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'KELUAR' );
		MENU_UTAMA.appendChild( JUDUL );

		KELUAR = KONTEN.querySelector('#KELUAR');

		IKON(KELUAR, "KELUAR");

		KELUAR.onclick = function () {
			BERANDA();
		}
	}
	if(!ISI) {

		var ISI_BOX = document.createElement('div');
		ISI_BOX.setAttribute('id', 'ISI');
		KONTEN.appendChild(ISI_BOX);
	}

	ISI = KONTEN.querySelector('#ISI');

	if(!ISI_INFO) {

		var BERITA_BOX = document.createElement('div');
		BERITA_BOX.setAttribute('class', 'ISI_INFO');
		ISI.appendChild(BERITA_BOX);
		
		ISI_INFO = KONTEN.querySelector('.ISI_INFO');
		
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'JUDUL_INFO' );
		JUDUL.setAttribute( 'class', 'JUDUL_ISI' );
		ISI_INFO.appendChild( JUDUL );

		IKON(JUDUL, "INFO");

	}
	
	if(!FOOTER) {

		var FOOTER_BOX = document.createElement('div');
		FOOTER_BOX.setAttribute('class', 'FOOTER');
		ISI.appendChild(FOOTER_BOX);

		$('.FOOTER').load('Sistem/html/Footer.php');		
	}
}

INVENTARIS = function( ID, MODE ) {

	KONTEN.innerHTML = '';

	var KEPALA = KONTEN.querySelector('.KEPALA'),
	MENU_UTAMA = KONTEN.querySelector('.MENU_UTAMA'),
	ISI = KONTEN.querySelector('#ISI'),
	ISI_INVENTARIS = KONTEN.querySelector('.ISI_INVENTARIS'),
	FOOTER = KONTEN.querySelector('.FOOTER'),
	GRADIEN = 'background:-webkit-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:-o-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:-moz-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:linear-gradient(rgb(0,112,177),rgb(28,181,235));';

	if(!KEPALA) {

		var KEPALA_BOX = document.createElement('div');
		KEPALA_BOX.setAttribute('class', 'KEPALA');
		KONTEN.appendChild(KEPALA_BOX);
		KEPALA = KONTEN.querySelector('.KEPALA');
		$.get('Sistem/html/Kepala.php', function(DATA, STATUS) {
			KEPALA.innerHTML = DATA;
			var LOGO = KEPALA.querySelector('#LOGO');
			$.get('Sistem/html/Logo.php', function(DATA_, ST_) {
				LOGO.innerHTML = DATA_;
			})
		})
	}

	if(!MENU_UTAMA) {

		var MENU_BOX = document.createElement('div');
		MENU_BOX.setAttribute('class', 'MENU_UTAMA');
		KONTEN.appendChild(MENU_BOX);

		MENU_UTAMA = KONTEN.querySelector('.MENU_UTAMA');

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'MENU_INFO' );
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_INFO = KONTEN.querySelector('#MENU_INFO');

		IKON(MENU_INFO, "INFO");

		MENU_INFO.onclick = function () {
			INFO( ID );
		}

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'MENU_INVENTARIS' );
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR AKTIF' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_INVENTARIS = KONTEN.querySelector('#MENU_INVENTARIS');

		IKON(MENU_INVENTARIS, "INVENTARIS");

		$.get('Sistem/html/Menu-Inventaris.php', function(DATA, STATUS) {

			MENU_INVENTARIS.innerHTML += DATA;

			$("#MENU_INVENTARIS").mouseenter(function(){
			  $(".DAFTAR_INVENTARIS").slideDown("fast");
			});

			$("#MENU_INVENTARIS").mouseleave(function(){
			  $(".DAFTAR_INVENTARIS").slideUp("fast");
			});

			var Peminjaman_Alat = MENU_INVENTARIS.querySelector('#Peminjaman_Alat'),
			Daftar_Siswa = MENU_INVENTARIS.querySelector('#Daftar_Siswa'),
			Daftar_Barang = MENU_INVENTARIS.querySelector('#Daftar_Barang'),
			Daftar_Pengguna = MENU_INVENTARIS.querySelector('#Daftar_Pengguna');

			Peminjaman_Alat.onclick = function() {

				JUDUL_HALAMAN(0,"ADMIN > Peminjaman Alat");
				INVENTARIS( ID, "Peminjaman_Alat" );
			}
			Daftar_Siswa.onclick = function() {
				JUDUL_HALAMAN(0,"ADMIN > Daftar Siswa");
				INVENTARIS( ID, "Daftar_Siswa" );
			}
			Daftar_Barang.onclick = function() {
				JUDUL_HALAMAN(0,"ADMIN > Daftar Barang");
				INVENTARIS( ID, "Daftar_Barang" );
			}
			Daftar_Pengguna.onclick = function() {
				JUDUL_HALAMAN(0,"ADMIN > Daftar Pengguna");
				INVENTARIS( ID, "Daftar_Pengguna" );
			}

		});

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'KELUAR' );
		MENU_UTAMA.appendChild( JUDUL );

		KELUAR = KONTEN.querySelector('#KELUAR');

		IKON(KELUAR, "KELUAR");

		KELUAR.onclick = function () {
			BERANDA();
		}

	}
	if(!ISI) {

		var ISI_BOX = document.createElement('div');
		ISI_BOX.setAttribute('id', 'ISI');
		KONTEN.appendChild(ISI_BOX);
	}

	ISI = KONTEN.querySelector('#ISI');

	if(!ISI_INVENTARIS) {

		var INVENTARIS_BOX = document.createElement('div');
		INVENTARIS_BOX.setAttribute('class', 'ISI_INVENTARIS');
		ISI.appendChild(INVENTARIS_BOX);
		
		ISI_INVENTARIS = KONTEN.querySelector('.ISI_INVENTARIS');
		
		if(MODE === 'Peminjaman_Alat') {
			$(ISI_INVENTARIS).load('Sistem/html/Peminjaman_Alat.php', function() {
				KELOLA(MODE);
			});
		}else if(MODE === 'Daftar_Siswa') {
			$(ISI_INVENTARIS).load('Sistem/html/Daftar_Siswa.php', function() {
				KELOLA(MODE);
			});
		}else if(MODE === 'Daftar_Barang') {
			$(ISI_INVENTARIS).load('Sistem/html/Daftar_Barang.php', function() {
				KELOLA(MODE);
			});
		}else if(MODE === 'Daftar_Pengguna') {
			$(ISI_INVENTARIS).load('Sistem/html/Daftar_Pengguna.php', function() {
				KELOLA(MODE);
			});
		}
		function KELOLA(MODE) {
			var NAV_INVENTARIS	= ISI_INVENTARIS.querySelector('#NAV_INVENTARIS'),
			ISI_INVENTARIS_	= ISI_INVENTARIS.querySelector('#ISI_INVENTARIS'),
			CARI_DATA		= NAV_INVENTARIS.querySelector('#CARI_DATA'),
			LIHAT_DATA		= NAV_INVENTARIS.querySelector('#LIHAT_DATA'),
			TAMBAH_DATA		= NAV_INVENTARIS.querySelector('#TAMBAH_DATA'),
			UBAH_DATA		= NAV_INVENTARIS.querySelector('#UBAH_DATA'),
			IMPOR_DATA		= NAV_INVENTARIS.querySelector('#IMPOR_DATA'),
			EKSPOR_DATA		= NAV_INVENTARIS.querySelector('#EKSPOR_DATA'),
			CETAK_DATA		= NAV_INVENTARIS.querySelector('#CETAK_DATA'),
			HAPUS_DATA		= NAV_INVENTARIS.querySelector('#HAPUS_DATA'),
			BATAS_DATA		= NAV_INVENTARIS.querySelector('#BATAS_DATA'),
			DATA_AWAL		= NAV_INVENTARIS.querySelector('#DATA_AWAL'),
			DATA_AKHIR		= NAV_INVENTARIS.querySelector('#DATA_AKHIR'),
			HALAMAN			= NAV_INVENTARIS.querySelector('#HALAMAN'),
			JUDUL_ISI		= ISI_INVENTARIS_.querySelector('#JUDUL_ISI'),
			TABEL			= ISI_INVENTARIS_.querySelector('.TABEL_INVENTARIS'),
			TB_NAMA			= ISI_INVENTARIS_.querySelector('.TABEL_INVENTARIS > .TB_DATA > .TB_NAMA > tr'),
			TB_ISI			= ISI_INVENTARIS_.querySelector('.TABEL_INVENTARIS > .TB_DATA > .TB_ISI'),
			FORM			= ISI_INVENTARIS_.querySelector('.FORM_INVENTARIS'),
			PERTAMA			= 0,
			HASIL			= '*',
			KONFIRMASI		= 'YA',
			NO_HAL			= 'AKTIF',
			PILIH			= '',
			OPSI				= '',
			ORDER			= '',
			BATAS			= 30,
			AWAL			= 0,
			AKHIR			= 0,
			LIMIT			= AWAL+',30';
			TOOLTIP(CARI_DATA, '', '200px');
			/*belum tersedia*/
			IMPOR_DATA.style.display = 'none';
			EKSPOR_DATA.style.display = 'none';

			CARI_DATA.onmouseover = function() {
				AJAX_DATA_GANTI('Sistem/Cari.php?MODE='+MODE+'&HASIL='+this.value,document.querySelector( '.TOOLTIP_KONTEN' ));
			}
			CARI_DATA.onkeyup = function(e) {
				var TOOLTIP_KONTEN = document.querySelector( '.TOOLTIP_KONTEN' );
				if(e.key == 'Enter' && TOOLTIP_KONTEN.innerHTML !== '' && HASIL !== this.value) {
					if (TOOLTIP_KONTEN.innerHTML !== 'Data Tidak Ditemukan') {
						NO_HAL = 'AKTIF';
						AWAL = 0;
						BATAS = BATAS_DATA.value;
						LIMIT = AWAL+','+BATAS;
						HASIL = this.value;
						GET_DATA();
					}
				} else {
					AJAX_DATA_GANTI('Sistem/Cari.php?MODE='+MODE+'&HASIL='+this.value,document.querySelector( '.TOOLTIP_KONTEN' ));
				}
			}
			function TOMBOL_AKTIF(OBJEK) {
				LIHAT_DATA.removeAttribute('aktif', 0);
				TAMBAH_DATA.removeAttribute('aktif', 0);
				UBAH_DATA.removeAttribute('aktif', 0);
				IMPOR_DATA.removeAttribute('aktif', 0);
				EKSPOR_DATA.removeAttribute('aktif', 0);
				CETAK_DATA.removeAttribute('aktif', 0);
				HAPUS_DATA.removeAttribute('aktif', 0);
				OBJEK.setAttribute('aktif', 0);
			}
			function TOMBOL_DATA() {
				LIHAT_DATA.onclick = function() {
					if (OPSI !== 'LIHAT') {
						OPSI = 'LIHAT';
						TOMBOL_AKTIF(this);
						GET_DATA();
					}
				}
				TAMBAH_DATA.onclick = function() {
					if (OPSI !== 'TAMBAH') {
						OPSI = 'TAMBAH';
						TOMBOL_AKTIF(this);
						GET_DATA();
					}
				}
				UBAH_DATA.onclick = function() {
					if (OPSI !== 'UBAH') {
						OPSI = 'UBAH';
						TOMBOL_AKTIF(this);
						GET_DATA();
					}
				}
				IMPOR_DATA.onclick = function() {
					if (OPSI !== 'IMPOR') {
						OPSI = 'IMPOR';
						TOMBOL_AKTIF(this);
						GET_DATA();
					}
				}
				EKSPOR_DATA.onclick = function() {
					if (OPSI !== 'EKSPOR') {
						OPSI = 'EKSPOR';
						TOMBOL_AKTIF(this);
						GET_DATA();
					}
				}
				CETAK_DATA.onclick = function() {
					if (OPSI !== 'CETAK') {
						OPSI = 'CETAK';
						TOMBOL_AKTIF(this);
						GET_DATA();
					}
				}
				HAPUS_DATA.onclick = function() {
					if (OPSI !== 'HAPUS') {
						OPSI = 'HAPUS';
						TOMBOL_AKTIF(this);
						GET_DATA();
					}
				}
			}
			TOOLTIP(BATAS_DATA, '', '30px');
			BATAS_DATA.onmouseover = function() {
				var TOOLTIP_KONTEN	= document.querySelector( '.TOOLTIP_KONTEN' );
				TOOLTIP_KONTEN.innerHTML = this.value;
			}
			BATAS_DATA.onchange = function() {
				NO_HAL = 'AKTIF';
				var TOOLTIP_KONTEN	= document.querySelector( '.TOOLTIP_KONTEN' );
				TOOLTIP_KONTEN.innerHTML = this.value;
				AWAL = 0;
				BATAS = this.value;
				LIMIT = AWAL +','+BATAS;
				GET_DATA();
			}
			TOOLTIP(DATA_AWAL, '', '50px');
			DATA_AWAL.onmouseover = function() {
				var TOOLTIP_KONTEN	= document.querySelector( '.TOOLTIP_KONTEN' );
				TOOLTIP_KONTEN.innerHTML = '>=&#x00A0;0<br/><=&#x00A0;'+DATA_AKHIR.value;
			}
			DATA_AWAL.onchange = function() {
				NO_HAL = 'MATI';
				AWAL = this.value;
				BATAS = DATA_AKHIR.value-AWAL;
				LIMIT = AWAL +','+BATAS;
				GET_DATA();
				this.setAttribute('disabled', 0);
			}
			TOOLTIP(DATA_AKHIR, '', '50px');
			DATA_AKHIR.onmouseover = function() {
				var TOOLTIP_KONTEN	= document.querySelector( '.TOOLTIP_KONTEN' );
				TOOLTIP_KONTEN.innerHTML = '>=&#x00A0;'+DATA_AWAL.value+'<br/><=&#x00A0;'+AKHIR;
			}
			DATA_AKHIR.onchange = function() {
				NO_HAL = 'MATI';
				BATAS = this.value-AWAL;
				LIMIT = AWAL +','+BATAS;
				GET_DATA();
				this.setAttribute('disabled', 0);
			}
			function PILIH_DATA() {
				DATA_AWAL.value = AWAL;
				DATA_AKHIR.value = parseInt(BATAS)+parseInt(AWAL);
				if (DATA_AKHIR.value > parseInt(AKHIR)) {
					DATA_AKHIR.value = AKHIR;
				}
				if (DATA_AWAL.value > DATA_AKHIR.value-1) {
					DATA_AWAL.value = DATA_AKHIR.value;
				}
				DATA_AWAL.max = DATA_AKHIR.value;
				DATA_AKHIR.min = DATA_AWAL.value;
				DATA_AKHIR.max = AKHIR;
				DATA_AWAL.removeAttribute('disabled');
				DATA_AKHIR.removeAttribute('disabled');
			}
			function QR_SANNER() {
				var decoder = $('#qr-canvas'),
					pl = $('#play'),
					si = $('#scanned-img'),
					sQ = $('#scanned-QR'),
					sv = $('#save'),
					sp = $('#stop'),
					spAll = $('#stopAll'),
					zo = document.body.querySelector('#zoom'),
					zov = $('#zoom-value'),
					br = document.body.querySelector('#brightness'),
					brv = $('#brightness-value'),
					co = document.body.querySelector('#contrast'),
					cov = $('#contrast-value'),
					tr = document.body.querySelector('#threshold'),
					trv = $('#threshold-value'),
					sh = document.body.querySelector('#sharpness'),
					shv = $('#sharpness-value'),
					gr = document.body.querySelector('#grayscale'),
					grv = $('#grayscale-value');
				pl.click(function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") {
						decoder.WebCodeCam({
							videoSource: {
								id: $('select#cameraId').val(),
								maxWidth: 640,
								maxHeight: 480
							},
							autoBrightnessValue: 100,
							resultFunction: function(text, imgSrc) {
								si.attr('src', imgSrc);
								sQ.text(text);
								decoder.data().plugin_WebCodeCam.cameraStop();
							},
							getUserMediaError: function() {
								alert('Sorry, the browser you are using doesn\'t support getUserMedia');
							},
							cameraError: function(error) {
								var p, message = 'Error detected with the following parameters:\n';
								for (p in error) {
									message += p + ': ' + error[p] + '\n';
								}
								alert(message);
							}
						});
						sQ.text('Scanning ...');
						sv.removeClass('disabled');
						sp.click(function(event) {
							sv.addClass('disabled');
							sQ.text('Stopped');
							decoder.data().plugin_WebCodeCam.cameraStop();
						});
						spAll.click(function(event) {
							sv.addClass('disabled');
							sQ.text('Stopped');
							decoder.data().plugin_WebCodeCam.cameraStopAll();
						});
					} else {
						sv.removeClass('disabled');
						sQ.text('Scanning ...');
						decoder.data().plugin_WebCodeCam.cameraPlay();
					}
				});
				sv.click(function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") return;
					var src = decoder.data().plugin_WebCodeCam.getLastImageSrc();
					si.attr('src', src);
				});
				zo.onchange = function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") return;
					var value = this.value / 10;
					zov.text(zov.text().split(':')[0] + ': ' + value);
					decoder.data().plugin_WebCodeCam.options.zoom = parseFloat(value);
				}
				br.onchange = function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") return;
					var value = this.value;
					brv.text(brv.text().split(':')[0] + ': ' + value.toString());
					decoder.data().plugin_WebCodeCam.options.brightness = parseFloat(value);
				}
				co.onchange = function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") return;
					var value = this.value;
					cov.text(cov.text().split(':')[0] + ': ' + value.toString());
					decoder.data().plugin_WebCodeCam.options.contrast = parseFloat(value);
				}
				tr.onchange = function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") return;
					var value = this.value;
					trv.text(trv.text().split(':')[0] + ': ' + value.toString());
					decoder.data().plugin_WebCodeCam.options.threshold = parseFloat(value);
				}
				sh.onchange = function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") return;
					var value = this.checked;
					if (value) {
						shv.text(shv.text().split(':')[0] + ': on');
						decoder.data().plugin_WebCodeCam.options.sharpness = [0, -1, 0, -1, 5, -1, 0, -1, 0];
					} else {
						shv.text(shv.text().split(':')[0] + ': off');
						decoder.data().plugin_WebCodeCam.options.sharpness = [];
					}
				}
				gr.onchange = function() {
					if (typeof decoder.data().plugin_WebCodeCam == "undefined") return;
					var value = this.checked;
					if (value) {
						grv.text(grv.text().split(':')[0] + ': on');
						decoder.data().plugin_WebCodeCam.options.grayScale = true;
					} else {
						grv.text(grv.text().split(':')[0] + ': off');
						decoder.data().plugin_WebCodeCam.options.grayScale = false;
					}
				}
				var getZomm = setInterval(function() {
					var a;
					try {
						a = decoder.data().plugin_WebCodeCam.optimalZoom();
					} catch (e) {
						a = 0;
					}
					if (a != 0) {
						zo.value = a*10;
						clearInterval(getZomm);
					}
				}, 500);
			}
			function FORM_DATA(ARRAY) {
				if (MODE === 'Peminjaman_Alat') {
					var GAMBAR = FORM.querySelector('#GAMBAR_BARANG'),
					NO_REG = FORM.querySelector('#NO_REG'),
					TGL_REG = FORM.querySelector('#TGL_REG'),
					TGL_BELI = FORM.querySelector('#TGL_BELI'),
					MERK = FORM.querySelector('#MERK'),
					TIPE = FORM.querySelector('#TIPE'),
					JENIS = FORM.querySelector('#JENIS'),
					JUMLAH = FORM.querySelector('#JUMLAH'),
					KELENGKAPAN = FORM.querySelector('#KELENGKAPAN'),
					SUBMIT = FORM.querySelector('#SUBMIT'),
					RESET = FORM.querySelector('#RESET'),
					BATAL = FORM.querySelector('#BATAL');

					if (OPSI == 'TAMBAH') {
						JUDUL_ISI.innerHTML = 'Peminjaman Alat';
						QR_SANNER();
					} else if (OPSI == 'UBAH') {

					}
				} else if (MODE === 'Daftar_Siswa') {
					
					if (OPSI == 'TAMBAH') {
					
					} else if (OPSI == 'UBAH') {

					}

				} else if (MODE === 'Daftar_Barang') {

					var GAMBAR = FORM.querySelector('#GAMBAR_BARANG'),
					QR = FORM.querySelector('#QR_BARANG'),
					NO_REG = FORM.querySelector('#NO_REG'),
					TGL_REG = FORM.querySelector('#TGL_REG'),
					TGL_BELI = FORM.querySelector('#TGL_BELI'),
					MERK = FORM.querySelector('#MERK'),
					TIPE = FORM.querySelector('#TIPE'),
					JENIS = FORM.querySelector('#JENIS'),
					JUMLAH = FORM.querySelector('#JUMLAH'),
					KELENGKAPAN = FORM.querySelector('#KELENGKAPAN'),
					SUBMIT = FORM.querySelector('#SUBMIT'),
					RESET = FORM.querySelector('#RESET'),
					BATAL = FORM.querySelector('#BATAL');

					if (OPSI == 'TAMBAH') {
						JUDUL_ISI.innerHTML = 'Tambah Barang';
					
					} else if (OPSI == 'UBAH') {
						JUDUL_ISI.innerHTML = 'Ubah Barang';

					}

				} else if (MODE === 'Daftar_Pengguna') {
					
					if (OPSI == 'TAMBAH') {
					
					} else if (OPSI == 'UBAH') {

					}

				}
			}
			function GET_DATA() {
				if (OPSI === 'LIHAT') {
					$(TABEL).fadeIn('fast');
					$(FORM).fadeOut('fast');
					DATABASE();
				}if (OPSI === 'TAMBAH') {
					$(FORM).fadeIn('fast');
					$(TABEL).fadeOut('fast');
					FORM_DATA();
				} else if (OPSI === 'UBAH') {
					if (PILIH != '') {
						$(FORM).fadeIn('fast');
						$(TABEL).fadeOut('fast');
					} else {
						$(TABEL).fadeIn('fast');
						$(FORM).fadeOut('fast');
						DATABASE();
					}
				} else if (OPSI === 'HAPUS') {
					$(TABEL).fadeIn('fast');
					$(FORM).fadeOut('fast');
					if (PILIH !== '' && KONFIRMASI == 'YA') {

						var SETUJU = confirm('Hapus data yang ditandai ?');
						if(SETUJU == false) {
							PILIH = '';
							DATABASE();
						} else {
							DATABASE();
						}
					} else {
						DATABASE();
					}
				}
				function DATABASE() {
					$.get('Sistem/Database.php?MODE='+MODE+'&HASIL='+HASIL+'&OPSI='+OPSI+'&PILIH='+PILIH+'&ORDER='+ORDER+'&LIMIT='+LIMIT, function(DATA, STATUS) {
						PILIH = '';
						DATA = DATA.split('<|>');
						TB_ISI.innerHTML = DATA[2];
						AWAL = DATA[0];
						AKHIR = DATA[1];
						TB_ISI_KOMPLIT();
						PILIH_DATA();
						TOMBOL_DATA();
						FORM_DATA();
					})
				}
			}
			if (MODE === 'Peminjaman_Alat') {
				OPSI = 'TAMBAH';
				TOMBOL_AKTIF(TAMBAH_DATA);
				ORDER = 'tgl_pinjam ASC';
				GET_DATA();
			} else if (MODE === 'Daftar_Siswa') {
				OPSI = 'LIHAT';
				TOMBOL_AKTIF(LIHAT_DATA);
				JUDUL_ISI.innerHTML = 'Tabel Siswa';
				ORDER = 'nama_siswa ASC';
				GET_DATA();
			} else if (MODE === 'Daftar_Barang') {
				OPSI = 'LIHAT';
				TOMBOL_AKTIF(LIHAT_DATA);
				JUDUL_ISI.innerHTML = 'Tabel Barang';
				ORDER = 'kode_barang ASC';
				GET_DATA();
			} else if (MODE === 'Daftar_Pengguna') {
				OPSI = 'LIHAT';
				TOMBOL_AKTIF(LIHAT_DATA);
				JUDUL_ISI.innerHTML = 'Tabel Pengguna';
				ORDER = 'nama_user ASC';
				GET_DATA();
			}

			for (var i = 2; i < TB_NAMA.childNodes.length; i++) {
				if(TB_NAMA.childNodes[i].getAttribute('asc', 0) !== null) {
					TOOLTIP(TB_NAMA.childNodes[i], 'Urutkan Mengecil', '90px');
				} else {
					TOOLTIP(TB_NAMA.childNodes[i], 'Urutkan Membesar', '90px');
				}
				TB_NAMA.childNodes[i].onclick = function() {

					if (OPSI === 'LIHAT') {
						if(TB_NAMA.childNodes[0].getAttribute('centang', 0)) {
							TB_NAMA.childNodes[0].removeAttribute('centang', 0);
							TB_NAMA.childNodes[0].innerHTML = '<p>&#xE739;</p>';
							TOOLTIP(TB_NAMA.childNodes[0], 'Tandai Semua', '90px');
						}
					} else if (OPSI === 'UBAH') {
						TB_NAMA.childNodes[0].innerHTML = '<p>&#xE739;</p>';
						TOOLTIP(TB_NAMA.childNodes[0], 'Tandai Semua', '90px');
					} else if (OPSI === 'HAPUS') {
						TB_NAMA.childNodes[0].innerHTML = '<p>&#xE739;</p>';
						TOOLTIP(TB_NAMA.childNodes[0], 'Tandai Semua', '90px');
					}

					if(this.getAttribute('asc', 0) !== null) {
						ASC_DES_DATA(this.getAttribute('i'), 'DES');
					} else {
						ASC_DES_DATA(this.getAttribute('i'), 'ASC');
					}
				}
			}

			function TB_ISI_KOMPLIT() {
				var TOOLTIP_KONTEN	= document.querySelector( '.TOOLTIP_KONTEN' );
				HALAMAN.innerHTML = '';
				if (NO_HAL === 'AKTIF') {
					var NOMOR = 1;
					for (var i = 0; i < parseInt(AKHIR); i+=parseInt(BATAS)) {
						if (parseInt(AWAL) == i) {
							HALAMAN.innerHTML += '<div class="NOMOR" fokus="0">'+NOMOR+'</div>';
						} else {
							HALAMAN.innerHTML += '<div class="NOMOR">'+NOMOR+'</div>';
						}
						NOMOR++;
					}
					for (var i = 0; i < HALAMAN.childNodes.length; i++) {
						if (HALAMAN.childNodes[i].getAttribute('fokus', 0) !== null) {
							HALAMAN.childNodes[i].onclick = function() {}
						} else {
							HALAMAN.childNodes[i].onclick = function() {
								AWAL = (parseInt(this.innerHTML)-1)*parseInt(BATAS);
								LIMIT = AWAL+','+BATAS;
								GET_DATA();
							}
						}
					}
				}
				if(OPSI === 'LIHAT') {
					PILIH = '';
					KONFIRMASI = 'YA';
					TB_NAMA.childNodes[0].innerHTML = '<p>&#xE739;</p>';
					TOOLTIP(TB_NAMA.childNodes[0], 'Tandai Semua', '90px');	
					TB_NAMA.childNodes[0].onclick = function() {
						PILIH = '';
						if(this.getAttribute('centang', 0) !== null) {
							this.removeAttribute('centang', 0);
							this.innerHTML = '<p>&#xE739;</p>';
							TOOLTIP(this, 'Tandai Semua', '90px');

							for (var i = 0; i < TB_ISI.childNodes.length; i++) {
								TOOLTIP(TB_ISI.childNodes[i].childNodes[0], 'Tandai', '80px');
								TB_ISI.childNodes[i].childNodes[0].parentNode.removeAttribute('centang', 0);
								TB_ISI.childNodes[i].childNodes[0].innerHTML = '&#xE739;';
							}
						} else {
							this.setAttribute('centang', 0);
							this.innerHTML = '<p>&#xE73A;</p>';
							TOOLTIP(this, 'Hapus Semua Tanda', '90px');
							for (var i = 0; i < TB_ISI.childNodes.length; i++) {
								TOOLTIP(TB_ISI.childNodes[i].childNodes[0], 'Hapus Tanda', '80px');
								TB_ISI.childNodes[i].childNodes[0].parentNode.setAttribute('centang', 0);
								TB_ISI.childNodes[i].childNodes[0].innerHTML = '&#xE73A;';
								PILIH += TB_ISI.childNodes[i].childNodes[2].innerHTML + '|';
							}
						}
					}
					for (var i = 0; i < TB_ISI.childNodes.length; i++) {

						TOOLTIP(TB_ISI.childNodes[i].childNodes[0], 'Tandai', '80px');

						TB_ISI.childNodes[i].childNodes[0].onclick = function() {

							if(this.parentNode.getAttribute('centang', 0) !== null) {

								TOOLTIP_KONTEN.innerHTML = 'Tandai';
								this.parentNode.removeAttribute('centang', 0);
								this.innerHTML = '&#xE739;';

								if(TB_NAMA.childNodes[0].getAttribute('centang', 0)) {
									TB_NAMA.childNodes[0].removeAttribute('centang', 0);
									TB_NAMA.childNodes[0].innerHTML = '<p>&#xE739;</p>';
									TOOLTIP(TB_NAMA.childNodes[0], 'Tandai Semua', '90px');
								}
								PILIH = PILIH.replace(this.nextSibling.nextSibling.innerHTML+'|', '');
							}else{
								TOOLTIP_KONTEN.innerHTML = 'Hapus Tanda';
								this.parentNode.setAttribute('centang', 0);
								this.innerHTML = '&#xE73A;';
								PILIH += this.nextSibling.nextSibling.innerHTML+'|';
							}
							console.log(PILIH)
						}
					}
				} else if (OPSI === 'HAPUS') {
					PILIH = '';
					TB_NAMA.childNodes[0].innerHTML = '<p>&#xE10A;</p>';
					TOOLTIP(TB_NAMA.childNodes[0], 'Hapus Semua', '90px');
					TB_NAMA.childNodes[0].onclick = function() {
						PILIH = '';
						KONFIRMASI = 'YA';
						for (var i = 0; i < TB_ISI.childNodes.length; i++) {
							PILIH += TB_ISI.childNodes[i].childNodes[2].innerHTML + '|';
						}
						GET_DATA()
					}
					for (var i = 0; i < TB_ISI.childNodes.length; i++) {

						TOOLTIP(TB_ISI.childNodes[i].childNodes[0], 'Hapus', '80px');

						TB_ISI.childNodes[i].childNodes[0].onclick = function() {
							KONFIRMASI = 'TIDAK';
							PILIH = this.nextSibling.nextSibling.innerHTML;
							GET_DATA()
						}
					}
				}
			}
			function ASC_DES_DATA(_, URUT) {
				if (URUT === 'ASC') {
					if (MODE === 'Peminjaman_Alat') {
						
					} else if (MODE === 'Daftar_Siswa') {
						
					} else if (MODE === 'Daftar_Barang') {
						if (_ == 2) {
							ORDER = 'kode_barang ASC';
						} else if (_ == 3) {
							ORDER = 'no_registrasi ASC';
						} else if (_ == 4) {
							ORDER = 'tgl_registrasi ASC';
						} else if (_ == 5) {
							ORDER = 'tgl_beli ASC';
						} else if (_ == 6) {
							ORDER = 'merk ASC';
						} else if (_ == 7) {
							ORDER = 'tipe ASC';
						} else if (_ == 8) {
							ORDER = 'jenis ASC';
						} else if (_ == 9) {
							ORDER = 'jumlah ASC';
						} else if (_ == 10) {
							ORDER = 'kelengkapan ASC';
						}
					} else if (MODE === 'Daftar_Pengguna') {
						
					}
				} else if(URUT === 'DES') {
					if (MODE === 'Peminjaman_Alat') {
						
					} else if (MODE === 'Daftar_Siswa') {
						
					} else if (MODE === 'Daftar_Barang') {
						if (_ == 2) {
							ORDER = 'kode_barang DESC';
						} else if (_ == 3) {
							ORDER = 'no_registrasi DESC';
						} else if (_ == 4) {
							ORDER = 'tgl_registrasi DESC';
						} else if (_ == 5) {
							ORDER = 'tgl_beli DESC';
						} else if (_ == 6) {
							ORDER = 'merk DESC';
						} else if (_ == 7) {
							ORDER = 'tipe DESC';
						} else if (_ == 8) {
							ORDER = 'jenis DESC';
						} else if (_ == 9) {
							ORDER = 'jumlah DESC';
						} else if (_ == 10) {
							ORDER = 'kelengkapan DESC';
						}
					} else if (MODE === 'Daftar_Pengguna') {
						
					}
				}
				$.get('Sistem/Database.php?MODE='+MODE+'&HASIL='+HASIL+'&OPSI='+OPSI+'&PILIH=&ORDER='+ORDER+'&LIMIT='+LIMIT, function(DATA, STATUS) {
					DATA = DATA.split('<|>');
					TB_ISI.innerHTML = DATA[2];
					ASC_DES(_);
					TB_ISI_KOMPLIT();
				})
			}
			function ASC_DES(_) {
				var iii = parseInt(_),
				THAT = TB_NAMA.childNodes[iii],
				ASC = TB_NAMA.childNodes[iii].getAttribute('asc', 0),
				DES = TB_NAMA.childNodes[iii].getAttribute('des', 0);
				for (var i = 2; i < TB_NAMA.childNodes.length; i++) {
					var THIS = TB_NAMA.childNodes[i];
					if(THIS.getAttribute('asc', 0) !== null) {
						THIS.removeChild(THIS.childNodes[0]);
						THIS.removeAttribute('asc', 0);
					} else if(THIS.getAttribute('des', 0) !== null) {
						THIS.removeChild(THIS.childNodes[1]);
						THIS.removeAttribute('des', 0);
					}
				}
				for (var i = 0; i < TB_ISI.childNodes.length; i++) {
					for (var ii = 2; ii < TB_ISI.childNodes[i].childNodes.length; ii++) {
						var THIS = TB_ISI.childNodes[i].childNodes[ii];
						if(THIS.getAttribute('asc', 0) !== null) {
							THIS.removeAttribute('asc', 0);
						}
					}
					TB_ISI.childNodes[i].childNodes[iii].setAttribute('asc', 0);
				}

				if(ASC) {
					THAT.innerHTML = THAT.innerHTML + '<div>&#xE96E;</div>';
					THAT.setAttribute('des', 0);
					TOOLTIP(THAT, 'Urutkan Membesar', '90px');
				} else {
					THAT.innerHTML = '<div>&#xE96D;</div>' + THAT.innerHTML;
					THAT.setAttribute('asc', 0);
					TOOLTIP(THAT, 'Urutkan Mengecil', '90px');
				}
			}
		}
	}
	
	if(!FOOTER) {

		var FOOTER_BOX = document.createElement('div');
		FOOTER_BOX.setAttribute('class', 'FOOTER');
		ISI.appendChild(FOOTER_BOX);

		$('.FOOTER').load('Sistem/html/Footer.php');		
	}
}
