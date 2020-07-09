AJAX_DATA = function(URL, TARGET) {

	$.get( URL, function(DATA, STATUS) {

		TARGET.innerHTML += DATA;
	});
}

AJAX_DATA_GANTI = function(URL, TARGET) {

	$.get( URL, function(DATA, STATUS) {

		TARGET.innerHTML = DATA;
	});
}
