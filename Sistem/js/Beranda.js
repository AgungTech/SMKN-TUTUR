BERANDA = function() {

	KONTEN.innerHTML = '';

	JUDUL_HALAMAN(0,"BERANDA");
	var KEPALA = KONTEN.querySelector('.KEPALA');
	var MENU_UTAMA = KONTEN.querySelector('.MENU_UTAMA');
	var BANNER = KONTEN.querySelector('.BANNER');
	var ISI = KONTEN.querySelector('#ISI');
	var BERITA = KONTEN.querySelector('.BERITA');
	var MENU_NAV = KONTEN.querySelector('.MENU_NAV');
	var FOOTER = KONTEN.querySelector('.FOOTER');

	var GRADIEN = 'background:-webkit-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:-o-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:-moz-linear-gradient(rgb(0,112,177),rgb(28,181,235));background:linear-gradient(rgb(0,112,177),rgb(28,181,235));';

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
		JUDUL.setAttribute( 'id', 'MENU_BERANDA' );
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR AKTIF' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_BERANDA = KONTEN.querySelector('#MENU_BERANDA');

		IKON(MENU_BERANDA, "<div>BERANDA</div>");

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'MENU_TENTANG' );
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_TENTANG = KONTEN.querySelector('#MENU_TENTANG');

		IKON(MENU_TENTANG, "<div>TENTANG</div>");
		MENU_TENTANG.onclick = function () {
			TENTANG();
		}
	}

	if(!BANNER) {

		var BANNER_BOX = document.createElement('div');
		BANNER_BOX.setAttribute('class', 'BANNER');
		KONTEN.appendChild(BANNER_BOX);

		$('.BANNER').load('Sistem/html/Banner.php');
		$.getScript('Sistem/js/Banner.min.js');
	}

	if(!ISI) {

		var ISI_BOX = document.createElement('div');
		ISI_BOX.setAttribute('id', 'ISI');
		KONTEN.appendChild(ISI_BOX);
	}

	ISI = KONTEN.querySelector('#ISI');

	if(!BERITA) {

		var BERITA_BOX = document.createElement('div');
		BERITA_BOX.setAttribute('class', 'BERITA');
		ISI.appendChild(BERITA_BOX);
		
		BERITA = KONTEN.querySelector('.BERITA');
		
		var ISI_BERITA = document.createElement('div');
		ISI_BERITA.setAttribute('class','ISI_BERITA');
		ISI_BERITA.style.position = 'relative';
		ISI_BERITA.style.left = '0';
		ISI_BERITA.style.top = '0';
		ISI_BERITA.style.width = '100%';
		ISI_BERITA.style.height = '100%';
		BERITA.appendChild(ISI_BERITA);

		ISI_BERITA = KONTEN.querySelector('.ISI_BERITA');
		
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'JUDUL_BERITA' );
		JUDUL.setAttribute( 'class', 'JUDUL_ISI' );
		ISI_BERITA.appendChild( JUDUL );

		IKON(JUDUL, "BERITA");

	}
	if(!MENU_NAV) {

		var MENU_NAV_BOX = document.createElement('div');
		MENU_NAV_BOX.setAttribute('class', 'MENU_NAV');
		ISI.appendChild(MENU_NAV_BOX);

		MENU_NAV = KONTEN.querySelector('.MENU_NAV');
		
		var ISI_NAV = document.createElement('div');
		ISI_NAV.setAttribute('class','ISI_NAV');
		ISI_NAV.style.position = 'relative';
		ISI_NAV.style.left = '0';
		ISI_NAV.style.top = '0';
		ISI_NAV.style.width = '100%';
		ISI_NAV.style.height = '100%';
		MENU_NAV.appendChild(ISI_NAV);

		ISI_NAV = KONTEN.querySelector('.ISI_NAV');
		
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'JUDUL_NAV' );
		JUDUL.setAttribute( 'class', 'JUDUL_ISI' );
		ISI_NAV.appendChild( JUDUL );

		IKON(JUDUL, "NAVIGASI");

		ISI_NAV.innerHTML += '<p class="MASUK">Masuk</p><div class="LOGIN"><div style="'+GRADIEN+' border-top-left-radius: 5px; border-top-right-radius: 5px; display:inline-block; color:white; width:80%; padding: 3px 1px; text-align:center">Nama User</div><input id="NAMA_USER" type="text" style="width:80%; margin-bottom:10px; text-align:center"/><div style="'+GRADIEN+' border-top-left-radius: 5px; border-top-right-radius: 5px; display:inline-block; color:white; width:80%; padding: 3px 1px; text-align:center">Password</div><input id="PASS_USER" type="password" style="width:80%; margin-bottom:10px; text-align:center"/><div id="SUBMIT" class="TOMBOL">LANJUT</div><p id="KETERANGAN" style="color:#555;margin:0 0 0 0; padding:0 0; width:100%"></p></div>';

		var SUBMIT = ISI_NAV.querySelector('#SUBMIT');
		var KETERANGAN = ISI_NAV.querySelector('#KETERANGAN');

		SUBMIT.onclick = function() {

			var NAMA_USER = ISI_NAV.querySelector('#NAMA_USER').value;
			var PASS_USER = ISI_NAV.querySelector('#PASS_USER').value;

			if( NAMA_USER == '') {

				KETERANGAN.innerHTML = '<p>Nama User tidak boleh kosong</p>';
				ISI_NAV.querySelector('#NAMA_USER').focus();

			} else if(PASS_USER == '') {

				KETERANGAN.innerHTML = '<p>Password tidak boleh kosong</p>';
				ISI_NAV.querySelector('#PASS_USER').focus();
				
			} else {

				MASUK( NAMA_USER, PASS_USER);
			}
			
		}
	}

	MENU_UTAMA = KONTEN.querySelector('.MENU_UTAMA');
	BANNER = KONTEN.querySelector('.BANNER');
	ISI = KONTEN.querySelector('#ISI');
	BERITA = KONTEN.querySelector('.BERITA');
	MENU_NAV = KONTEN.querySelector('.MENU_NAV');

	function MASUK( USER, PASS ) {
		var KIRIM = 'USER='+USER+'&PASS='+PASS;
		var KETERANGAN = MENU_NAV.querySelector('#KETERANGAN');
		LOADER( DOKUMEN, 100, 'Memroses Data' );
		$.getScript('Sistem/Login.php?'+KIRIM, LOADER_HILANG() );
	}

	if(!FOOTER) {

		var FOOTER_BOX = document.createElement('div');
		FOOTER_BOX.setAttribute('class', 'FOOTER');
		ISI.appendChild(FOOTER_BOX);

		$('.FOOTER').load('Sistem/html/Footer.php');		
	}
}
