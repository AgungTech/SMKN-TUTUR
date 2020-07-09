KURSOR = function( OBJEK, TEKAN, LEPAS ) {

	function MOUSE_OVER( event ) {
		OBJEK.style.cursor = "url(Desain/css/Kursor/"+LEPAS+"), auto";
	}

	function MOUSE_DOWN( event ) {
		OBJEK.style.cursor = "url(Desain/css/Kursor/"+TEKAN+"), auto";
	}

	function MOUSE_UP( event ) {
		OBJEK.style.cursor = "url(Desain/css/Kursor/"+LEPAS+"), auto";
	}
	OBJEK.addEventListener( "mouseover", MOUSE_OVER );
	OBJEK.addEventListener( "mousedown", MOUSE_DOWN );
	OBJEK.addEventListener( "mouseup", MOUSE_UP );
}

KURSOR( DOKUMEN, 'Normal_.cur', 'Normal.cur' );
