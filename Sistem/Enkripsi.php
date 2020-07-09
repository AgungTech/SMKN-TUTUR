<?php

function ENKRIPSI( $KUNCI, $DATA ) {
	return( base64_encode( mcrypt_encrypt( MCRYPT_RIJNDAEL_256, md5( $KUNCI ), $DATA, MCRYPT_MODE_CBC, md5( md5( $KUNCI ) ) ) ) );
}

function DEKRIPSI( $KUNCI, $DATA ) {
	return( rtrim( mcrypt_decrypt( MCRYPT_RIJNDAEL_256, md5( $KUNCI ), base64_decode( $DATA ), MCRYPT_MODE_CBC, md5( md5( $KUNCI ) ) ), "\0") );
}

?>