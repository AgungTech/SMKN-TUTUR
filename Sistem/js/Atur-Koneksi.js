var HOST_ASAL = 'localhost', USER_ASAL = '', PASS_ASAL = '';

ATUR_KONEKSI = function( PESAN, DATA ) {
	
	LOADER_HILANG();
	
	var PAPAN_KONEKSI = KONTEN.querySelector('.PAPAN_KONEKSI');

	if(!PAPAN_KONEKSI) {

		/*Dialog Koneksi*/
		var KONEKSI_BOX = document.createElement('div');
		KONEKSI_BOX.setAttribute('class','PAPAN_KONEKSI DIALOG_BOX');
		KONEKSI_BOX.style.position = 'fixed';
		KONEKSI_BOX.style.left = (window.innerWidth-600)/2;
		KONEKSI_BOX.style.top = (window.innerWidth-600)/2;
		KONTEN.appendChild(KONEKSI_BOX);
		PAPAN_KONEKSI = KONTEN.querySelector('.PAPAN_KONEKSI');
		
		/*Judul*/
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'id', 'JUDUL_KONEKSI' );
		JUDUL.setAttribute( 'class', 'JUDUL' );
		PAPAN_KONEKSI.appendChild( JUDUL );

		IKON_JUDUL(JUDUL, "&#xE17A|PENGATURAN KONEKSI");

		/*Tombol Zoom*/
		MX( PAPAN_KONEKSI, 'NYALA' );

		/*Isi*/
		var ISI_LUAR = document.createElement( 'div' );
		ISI_LUAR.setAttribute( 'class', 'ISI_LK ISI NANO' );

		PAPAN_KONEKSI.appendChild( ISI_LUAR );

		var ISI_LK = PAPAN_KONEKSI.querySelector('.ISI_LK');

		var ISI_DALAM = document.createElement( 'div' );
		ISI_DALAM.setAttribute( 'class', 'ISI_DK NANO_KONTEN' );
		ISI_LK.appendChild( ISI_DALAM );
	}


	var ISI_DK = PAPAN_KONEKSI.querySelector('.ISI_DK');

	ISI_DK.innerHTML = '';

	if(PESAN == 'DATABASE') {

		JUDUL_HALAMAN(0,"PENGATURAN");

		var ISI_TEKS = '<table id="ISI"><tr><td id="ISI_KONTEN"><div id="KET_KONEKSI" class="DIALOG_BOX"></div><div id="SET_KONEKSI" class="DIALOG_BOX"></div></td></tr></table>';
		ISI_DK.innerHTML = ISI_TEKS;

		var KET_KONEKSI = PAPAN_KONEKSI.querySelector('#KET_KONEKSI');
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'class', 'JUDUL' );
		IKON_JUDUL(JUDUL, "&#xE7E7|Keterangan");
		KET_KONEKSI.appendChild( JUDUL );

		var TUTUP = document.createElement( 'div' );
		TUTUP.setAttribute( 'class', 'KET_KONEKSI TOMBOL_BATAL' );
		KET_KONEKSI.appendChild( TUTUP );
		IKON(TUTUP, "&#xE106");

		var KET_TUTUP = PAPAN_KONEKSI.querySelector('.KET_KONEKSI');

		TOOLTIP(KET_TUTUP, 'Tutup', '50px');

		KET_TUTUP.onclick = function () {
			BUANG(KET_KONEKSI);
		}

		var ISI = document.createElement( 'div' );
		ISI.setAttribute( 'class', 'ISI' );
		ISI.style.textAlign = 'center';
		ISI.innerHTML += DATA+"<br><p><strong>Tidak bisa menemukan Database 'multimedia', atau mungkin User yang Anda gunakan tidak bisa mengaksesnya.</strong></p>";
		KET_KONEKSI.appendChild( ISI );

		var SET_KONEKSI = PAPAN_KONEKSI.querySelector('#SET_KONEKSI');
		SET_KONEKSI.innerHTML = "<p>Coba buat Database baru dengan nama 'multimedia'.</p>";

		var OK = document.createElement( 'div' );
		OK.setAttribute( 'class', 'OK_KONEKSI TOMBOL' );
		OK.textContent = 'LANJUTKAN';
		SET_KONEKSI.appendChild( OK );

		OK.onclick = function() {

			var ISI_TB = PAPAN_KONEKSI.querySelector('#ISI_KONTEN');
			var KET = ISI_TB.querySelector('.KET_');
			
			if(!KET) {

				var DIV = document.createElement('div');
				DIV.setAttribute('class', 'KET_ DIALOG_BOX');
				ISI_TB.appendChild(DIV);
			}

			KET = ISI_TB.querySelector('.KET_');

			LOADER(ISI_DK, '100px','Memroses Database');
			KIRIM_DB(0, 0, 0, 'YA');
		}

	} else if(PESAN == 'SUKSES') {

		KONTEN.removeChild(PAPAN_KONEKSI);
		JUDUL_HALAMAN(0,"BERADA");
		BERANDA();

	} else if(PESAN == 'UNDUH') {

		JUDUL_HALAMAN(0,"PENGATURAN");

		window.location.assign("Sistem/Buat-DB.sql");
		var ISI_DK = PAPAN_KONEKSI.querySelector('.ISI_DK');
		ISI_DK.innerHTML = '<table id="ISI"><tr><td id="ISI_KONTEN"><div id="OK_DB"><p>Muat Ulang Halaman jika Database sudah di buat.</div></td></tr></table>';
		
	} else {

		JUDUL_HALAMAN(0,"PENGATURAN");

		var ISI_TEKS = '<table id="ISI"><tr><td id="ISI_KONTEN"><div id="KET_KONEKSI" class="ANIMASI DIALOG_BOX"></div><div id="HOST_DB" class="DIALOG_BOX"></div><div id="USER_DB" class="DIALOG_BOX"></div><div id="PASS_DB" class="DIALOG_BOX"></div><div id="OK_DB"></div></td></tr></table>';
		ISI_DK.innerHTML = ISI_TEKS;

		var KET_KONEKSI = PAPAN_KONEKSI.querySelector('#KET_KONEKSI');
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'class', 'JUDUL' );
		IKON_JUDUL(JUDUL, "&#xE7E7|Keterangan");
		KET_KONEKSI.appendChild( JUDUL );

		var TUTUP = document.createElement( 'div' );
		TUTUP.setAttribute( 'class', 'KET_KONEKSI TOMBOL_BATAL' );
		KET_KONEKSI.appendChild( TUTUP );
		IKON(TUTUP, "&#xE106");

		var KET_TUTUP = PAPAN_KONEKSI.querySelector('.KET_KONEKSI');

		TOOLTIP(KET_TUTUP, 'Tutup', '50px');

		KET_TUTUP.onclick = function () {
			BUANG(KET_KONEKSI);
		}

		var ISI = document.createElement( 'div' );
		ISI.setAttribute( 'class', 'ISI' );
		ISI.style.textAlign = 'center';
		ISI.innerHTML += DATA+"<br><p><strong>Tolong masukkan Nama Host, Nama User dan Password dengan benar!</strong><p>";
		KET_KONEKSI.appendChild( ISI );

		var HOST_DB = PAPAN_KONEKSI.querySelector('#HOST_DB');
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'class', 'JUDUL' );
		IKON_JUDUL_TENGAH(JUDUL, "&#xE125|Nama Host <i>(standar=localhost)</i>");
		HOST_DB.appendChild( JUDUL );
		HOST_DB.innerHTML += "<input id='HOST_TEKS' class='INPUT' type='text' value='"+HOST_ASAL+"'>";

		var USER_DB = PAPAN_KONEKSI.querySelector('#USER_DB');
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'class', 'JUDUL' );
		IKON_JUDUL_TENGAH(JUDUL, "&#xE13D|Nama User");
		USER_DB.appendChild( JUDUL );
		USER_DB.innerHTML += "<input id='USER_TEKS' class='INPUT' type='text' value='"+USER_ASAL+"'>";

		var PASS_DB = PAPAN_KONEKSI.querySelector('#PASS_DB');
		var JUDUL = document.createElement( 'div' );
		JUDUL.setAttribute( 'class', 'JUDUL' );
		IKON_JUDUL_TENGAH(JUDUL, "&#xE192|Password");
		PASS_DB.appendChild( JUDUL );
		PASS_DB.innerHTML += "<input id='PASS_TEKS' class='INPUT' type='text' value='"+PASS_ASAL+"'>";

		var OK_DB = PAPAN_KONEKSI.querySelector('#OK_DB');

		var OK = document.createElement( 'div' );
		OK.setAttribute( 'id', 'OK_KON' );
		OK.setAttribute( 'class', 'TOMBOL' );
		OK.textContent = 'LANJUTKAN';
		OK_DB.appendChild( OK );

		var HOST_IN, USER_IN,PASS_IN, ISI_TB, KET;

		var OK_KONEKSI = PAPAN_KONEKSI.querySelector('#OK_KON');

		OK_KONEKSI.onclick = function() {
			
			HOST_ASAL = HOST_IN = HOST_DB.querySelector('#HOST_TEKS').value;
			USER_ASAL = USER_IN = USER_DB.querySelector('#USER_TEKS').value;
			PASS_ASAL = PASS_IN = PASS_DB.querySelector('#PASS_TEKS').value;

			ISI_TB = PAPAN_KONEKSI.querySelector('#ISI_KONTEN');
			KET = ISI_TB.querySelector('.KET_');

			if(!KET) {

				var DIV = document.createElement('div');
				DIV.setAttribute('class', 'KET_ DIALOG_BOX');
				ISI_TB.appendChild(DIV);
			}

			KET = ISI_TB.querySelector('.KET_');

			if(HOST_IN !== '') {

				KET.innerHTML = '';
				LOADER(ISI_DK, '100px','Memroses pengaturan');
				KIRIM_DB(HOST_IN, USER_IN, PASS_IN, 'TIDAK');

			} else {

				KET.innerHTML = '<p>Nama Host belum di isi!</p>';
			}
		}
	}
}

KIRIM_DB = function( HOST, USER, PASS, MODE ) {

	var PAPAN_KONEKSI = KONTEN.querySelector('.PAPAN_KONEKSI');
	var OK_KONEKSI = PAPAN_KONEKSI.querySelector('#OK_KON');
	var KET = PAPAN_KONEKSI.querySelector('.KET_');
	var AJAX_REQ;

	var KIRIM = 'HOST='+HOST+'&USER='+USER+'&PASS='+PASS+'&MODE='+MODE;

	if (window.XMLHttpRequest) {

		/*IE7+, Firefox, Chrome, Opera, Safari*/
		AJAX_REQ = new XMLHttpRequest();

	} else {

		/*IE6, IE5*/
		AJAX_REQ = new ActiveXObject("Microsoft.XMLHTTP");
	}

	AJAX_REQ.onreadystatechange = function() {

		if (AJAX_REQ.readyState == 4 && AJAX_REQ.status == 200) {

			LOADER_HILANG();
			KET.innerHTML = AJAX_REQ.responseText;

		} else {

		}
	}

	AJAX_REQ.open("GET","Sistem/Atur-Koneksi.php?"+KIRIM,true);
	AJAX_REQ.send();
}
