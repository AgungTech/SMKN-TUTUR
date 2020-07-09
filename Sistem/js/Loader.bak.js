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

	OBJEK.style.visibility = 'hidden';

	if( OBJEK == document.querySelector('.LOADER') ) {

		clearInterval(ANIMASI);
		LOADER_CANVAS = document.querySelector('.LOADER_CANVAS');
		var CANVAS = LOADER_CANVAS.getContext("2d");
		CANVAS.fillStyle = "#555";
		CANVAS.fillRect(0,0,LOADER_CANVAS.width,LOADER_CANVAS.height);
	}

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

var ANIMASI = null;

function LOADER_ANIMASI(LOADER_CANVAS) {

	var C = LOADER_CANVAS.getContext("2d"),
		UKURAN = LOADER_CANVAS.height,
		UKURAN_KOTAK = 10, 
		MAX_UKURAN_KOTAK = 40,
		JML_KOTAK = 40,
		TENGAH = UKURAN / 2,
		DUA_PI = Math.PI * 2,
		STEP = DUA_PI / JML_KOTAK,
		X, Y, TETA,
		RADIUS = 80,
		KOTAK = [];
		WARNA = "rgba(0, 120, 255, 0.5)";
		BG = "rgba(80, 80, 80, 0.2)";

	var Cell = function(X, Y) {
		this.SX = X;
		this.SY = Y;
		this.X = X;
		this.Y = Y;
		this.DX = X;
		this.DY = Y;
		this.UKURAN = UKURAN_KOTAK;
		this.POSISI = this.UKURAN;
		this.WARNA = WARNA;
	}

	Cell.prototype.draw = function() {

		this.X += (this.DX - this.X) / 4;
		this.Y += (this.DY - this.Y) / 4;
		this.UKURAN += (this.POSISI - this.UKURAN) / 10;

		var LETAK = Math.abs(this.X - this.DX) < 0.1 && Math.abs(this.Y - this.DY) < 0.1;
			
		if (Math.random() < 0.0025 && LETAK){
			this.DX = this.DY = TENGAH;
			this.POSISI = MAX_UKURAN_KOTAK;
		}

		if (Math.random() < 0.005 && LETAK) {
			this.DX = this.SX;
			this.DY = this.SY; 
			this.POSISI = UKURAN_KOTAK;
		}

		var OFFSET = this.UKURAN / 2;
		C.fillStyle = this.WARNA;
		C.fillRect(this.X-OFFSET, this.Y-OFFSET, this.UKURAN, this.UKURAN);

	};
       
	for (var i = 0; i < JML_KOTAK; i++) {

		TETA = i * STEP;
		X = parseInt(TENGAH + RADIUS * Math.cos(TETA));
		Y = parseInt(TENGAH + RADIUS * Math.sin(TETA));
		KOTAK[i] = new Cell(X, Y);
	}

	ANIMASI = setInterval( function() {

		C.fillStyle = BG;
		C.fillRect(0,0,UKURAN,UKURAN);

		for (var i = 0; i < KOTAK.length; i++) {
			KOTAK[i].draw(); 
		}
	}, 30);
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
		var CANVAS = document.createElement('canvas');
		CANVAS.setAttribute('class', 'LOADER_CANVAS');
		CANVAS.setAttribute('width', '100%');
		CANVAS.setAttribute('height', '100%');
		LOADER_BOX.appendChild(CANVAS);

		LOADER_BOX.style.opacity = '1';

		LOADER_CANVAS = document.querySelector(".LOADER_CANVAS");
		//TOOLTIP(LOADER_CANVAS, 'Memroses Data', '70px');
		LOADER_ANIMASI(LOADER_CANVAS);

	} else {

		LOADER_BOX.style.width   = '20%';
		LOADER_BOX.style.height  = '20%';
		LOADER_BOX.style.left    = '40%';
		LOADER_BOX.style.top     = '40%';

		if(OBJEK!==DOKUMEN) {
			OBJEK.appendChild(LOADER_BOX);
			LOADER_ANIMASI(LOADER_CANVAS);
			TAMPIL(LOADER_BOX);
			//TOOLTIP(LOADER_CANVAS, TOOLTIP_, UKURAN);
		} else {
			DOKUMEN.appendChild(LOADER_BOX);
			LOADER_ANIMASI(LOADER_CANVAS);
			TAMPIL(LOADER_BOX);
			//TOOLTIP(LOADER_CANVAS, TOOLTIP_, UKURAN);
		}
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