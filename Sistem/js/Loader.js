function MULAI() {

	var DIV = document.createElement('div');
	DIV.setAttribute('class', 'BODY');
	document.body.appendChild(DIV);

	var BODY = document.querySelector('.BODY');

	var KONTEN = document.createElement('div');
	KONTEN.setAttribute('class', 'KONTEN');
	BODY.appendChild(KONTEN);
}
MULAI();

var DOKUMEN = document.querySelector('body');
var KONTEN  = document.querySelector('.KONTEN');

var ANIMASI = null;
var LOADER_CANVAS = null;

function CEK_OBJEK( OBJEK ) {
	
	if( OBJEK !== undefined || typeof OBJEK !== 'object' ) {

		if( OBJEK.style.visibility === 'hidden' || OBJEK.style.opacity === '0' || OBJEK.style.display === 'none' ) {

			return 'HILANG';

		} else {

			return 'TAMPIL';
		}
	} else {

		console.log( 'Cek objek gagal, objek tidak ada / bukan objek' );
	}
}

function OBJEK_HILANG( OBJEK ) {

	if( OBJEK == document.querySelector('.LOADER') ) {
		ANIMASI.pause();
	}
	OBJEK.style.visibility = 'hidden';

}
function HILANG( OBJEK ) {

	if( OBJEK !== undefined || typeof OBJEK !== 'object' ) {

		OBJEK.style.opacity = '0';
		window.setTimeout( OBJEK_HILANG(OBJEK), 200 );


	} else {

		console.log( 'Transisi gagal, objek tidak ada / bukan objek' );
	}
}
function TAMPIL( OBJEK ) {

	if( OBJEK !== undefined || typeof OBJEK !== 'object' ) {

		OBJEK.style.visibility = 'visible';
		OBJEK.style.opacity = '1';

	} else {

		console.log( 'Transisi gagal, objek tidak ada / bukan objek' );
	}
}

function TOGGLE( OBJEK ) {

	if( OBJEK !== undefined || typeof OBJEK !== 'object' ) {

		if( CEK_OBJEK(OBJEK) === 'HILANG' ) {

			TAMPIL( OBJEK );

		} else {

			HILANG( OBJEK );
		}

	} else {

		console.log( 'Transisi gagal, objek tidak ada / bukan objek' );
	}
}

function LOADER( OBJEK, UKURAN, TOOLTIP_ ) {

	var LOADER_BOX = document.querySelector('.LOADER'),
	LOADER_CANVAS = document.querySelector(".LOADER_CANVAS");

	if( !LOADER_BOX ) {

		var LOADER_DIV = document.createElement('div');
		LOADER_DIV.setAttribute('class', 'LOADER');
		LOADER_DIV.style.position='absolute';
		LOADER_DIV.style.width='20%';
		LOADER_DIV.style.height='20%'
		;LOADER_DIV.style.left='40%';
		LOADER_DIV.style.top='40%';
		LOADER_DIV.style.textAlign='center';
		LOADER_DIV.style.zIndex='199';
		document.body.appendChild(LOADER_DIV);

		LOADER_BOX = document.querySelector('.LOADER');
		var CANVAS = document.createElement('div');
		CANVAS.setAttribute('class', 'LOADER_CANVAS');
		CANVAS.setAttribute('width', '100%');
		CANVAS.setAttribute('height', '100%');
		LOADER_BOX.appendChild(CANVAS);

		LOADER_BOX.style.opacity = '1';

		LOADER_CANVAS = document.querySelector(".LOADER_CANVAS");
		//TOOLTIP(LOADER_CANVAS, 'Memroses Data', '70px');
		$.get('Sistem/html/Logo.php', function(data, status) {
			LOADER_CANVAS.innerHTML = data;
			ANIMASI = anime({

				targets	: LOADER_CANVAS.childNodes[0],
				delay		: 0,
				scale		: .8,
				opacity	: .5,
				duration	: 500,
				easing	: 'easeInOutQuad',
				direction	: 'alternate',
				loop		: true
			});
		})

	} else {

		LOADER_BOX.style.width   = '20%';
		LOADER_BOX.style.height  = '20%';
		LOADER_BOX.style.left    = '40%';
		LOADER_BOX.style.top     = '40%';

		if(OBJEK!==DOKUMEN) {
			OBJEK.appendChild(LOADER_BOX);
		} else {
			DOKUMEN.appendChild(LOADER_BOX);
		}
		TAMPIL(LOADER_BOX);
		ANIMASI.play();
	}
}
LOADER( DOKUMEN, 100, 'Memroses Data' );
function LOADER_HILANG() {
	var LOADER_BOX = document.querySelector('.LOADER');
	HILANG(LOADER_BOX);
	TAMPIL(KONTEN);
}
function CSS() {
	var KUNCI=9999,
	SATU=Math.floor((Math.random()*KUNCI)+1111),
	DUA=Math.pow(SATU,3),
	TIGA=Math.round(Math.random()*(DUA.toString().length-4)),
	EMPAT=DUA.toString();var HASIL=EMPAT.substr(TIGA,TIGA+4);
	$.post("Desain/Token.php",{HASIL:HASIL.toString()});
	return HASIL.toString()
};
function JS() {
	var KUNCI=9999,
	SATU=Math.floor((Math.random()*KUNCI)+1111),
	DUA=Math.pow(SATU,3),
	TIGA=Math.round(Math.random()*(DUA.toString().length-4)),
	EMPAT=DUA.toString(),
	HASIL=EMPAT.substr(TIGA,TIGA+4);
	$.post("Sistem/Token.php",{HASIL:HASIL.toString()});
	return HASIL.toString()
};
function _(i) {
	return 'data:text/plain;base64,'+i
};
function i() {
	$.get('Desain/css.php?TOKEN='+CSS(), function(a) {
		document.head.innerHTML+=a;
		$.getScript('Sistem/JavaScript.php?TOKEN='+JS(), function() {
			$.getScript('Sistem/Koneksi.php', function() {
				LOADER_HILANG()
			})
		})
	})
};