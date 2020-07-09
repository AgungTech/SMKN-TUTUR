TENTANG = function() {

	KONTEN.innerHTML = '';

	JUDUL_HALAMAN(0,"TENTANG");
	var KEPALA = KONTEN.querySelector('.KEPALA');
	var MENU_UTAMA = KONTEN.querySelector('.MENU_UTAMA');
	var ISI = KONTEN.querySelector('#ISI');
	var ISI_TENTANG = KONTEN.querySelector('.ISI_TENTANG');
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
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_BERANDA = KONTEN.querySelector('#MENU_BERANDA');

		IKON(MENU_BERANDA, "BERANDA");

		MENU_BERANDA.onclick = function () {
			BERANDA();
		}

		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'MENU_TENTANG' );
		JUDUL.setAttribute( 'class', 'MENU MENU_DATAR AKTIF' );
		MENU_UTAMA.appendChild( JUDUL );

		MENU_TENTANG = KONTEN.querySelector('#MENU_TENTANG');

		IKON(MENU_TENTANG, "TENTANG");

	}
	if(!ISI) {

		var ISI_BOX = document.createElement('div');
		ISI_BOX.setAttribute('id', 'ISI');
		KONTEN.appendChild(ISI_BOX);
	}

	ISI = KONTEN.querySelector('#ISI');

	if(!ISI_TENTANG) {

		var BERITA_BOX = document.createElement('div');
		BERITA_BOX.setAttribute('class', 'ISI_TENTANG');
		ISI.appendChild(BERITA_BOX);
		
		ISI_TENTANG = KONTEN.querySelector('.ISI_TENTANG');
		
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'JUDUL_TENTANG' );
		JUDUL.setAttribute( 'class', 'JUDUL_ISI' );
		ISI_TENTANG.appendChild( JUDUL );

		IKON(JUDUL, "TENTANG");
		AJAX_DATA('Sistem/html/Tentang.php', ISI_TENTANG);
	}
	
	if(!FOOTER) {

		var FOOTER_BOX = document.createElement('div');
		FOOTER_BOX.setAttribute('class', 'FOOTER');
		ISI.appendChild(FOOTER_BOX);

		$('.FOOTER').load('Sistem/html/Footer.php');		
	}
}
