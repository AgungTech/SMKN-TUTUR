IKON = function( OBJEK, ISI ) {
	
	for( i=0; i<=ISI.indexOf('|'); i++ ) {
		ISI = ISI.replace("|","</td><td>");
	}

	OBJEK.innerHTML = "<table class='IKON'><tr><td>"+ISI+"</td></tr></table>";

}
IKON_JUDUL = function( OBJEK, ISI ) {
	
	for( i=0; i<=ISI.indexOf('|'); i++ ) {
		ISI = ISI.replace("|","</td><td class='TEKS_JUDUL'>");
	}

	OBJEK.innerHTML = "<table class='IKON_JUDUL'><tr><td class='SIMBOL'>"+ISI+"</td></tr></table>";

}
IKON_JUDUL_TENGAH = function( OBJEK, ISI ) {
	
	for( i=0; i<=ISI.indexOf('|'); i++ ) {
		ISI = ISI.replace("|","</td><td class='TEKS_JUDUL'>");
	}

	OBJEK.innerHTML = "<table class='IKON_JUDUL_TENGAH'><tr><td class='SIMBOL'>"+ISI+"</td></tr></table>";

}
