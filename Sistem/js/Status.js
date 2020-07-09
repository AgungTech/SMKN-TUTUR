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
function OBJEK_BUANG( OBJEK ) {

	var PARENT = OBJEK.parentElement;
	PARENT.removeChild(OBJEK);
	var TOOLTIP_BOX = document.querySelector( '.TOOLTIP' );
	HILANG(TOOLTIP_BOX);
}
function HILANG( OBJEK ) {

	if( OBJEK !== undefined || typeof OBJEK !== 'object' ) {

		OBJEK.style.opacity = '0';
		window.setTimeout( OBJEK_HILANG(OBJEK), 200 );

	} else {

		console.log( 'Transisi gagal, objek tidak ada / bukan objek' );
	}
}

function BUANG( OBJEK ) {

	if( OBJEK !== undefined || typeof OBJEK !== 'object' ) {

		OBJEK.style.opacity = '0';
		window.setTimeout( OBJEK_BUANG(OBJEK), 200 );

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