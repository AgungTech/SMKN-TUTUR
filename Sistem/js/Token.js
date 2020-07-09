TOKEN = function() {

	var KUNCI  = 9999;
	var SATU  = Math.floor((Math.random() * KUNCI) + 1111);
	var DUA  = Math.pow(SATU, 3);
	var TIGA = Math.round(Math.random()*(DUA.toString().length-4));
	var EMPAT = DUA.toString();
	var HASIL = EMPAT.substr(TIGA, TIGA+4);

	return HASIL;
}
