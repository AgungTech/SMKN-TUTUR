QR = function(data) {
	if (data.length == 7) {data = data.substr(1)};
	var Huruf = 'BCDEFGHIJKLMNOPQRSTUVWXYZbcdefghijklmnopqrstuvwxyz',
	GolHuruf = '0123456789ABCDEFGHIJKLMNOPZRSTUV',
	GolTemp = '', dataTemp = [];
	GolHuruf = GolHuruf.split('');
	for (var x = 0, i = 0, ii = 0, iii = 0, iv = 0, v = 0; x < GolHuruf.length; x++) {
		GolHuruf[x]
	}
	if(data.length > 6) {
		for(var i = 0, ii = 0; i < data.length; i++) {
			dataTemp[ii++] = data.substr(i++, 2);
			if(i == data.length-1) {
				data = dataTemp;
				dataTemp = []
			}
		};
		for(var i = 0; i < data.length; i++) {
			if(parseInt(data[i]) < 50) {
				dataTemp
			} else {

			}
		}
	} else {

	}
}