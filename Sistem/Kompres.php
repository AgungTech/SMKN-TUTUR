<?php
function KOMPRES( $HASIL )
{
	$HASIL = bin2hex($HASIL);
	$DARI = array('09','2020','2020','2020','2020','2020','2020','0d0a0d0a','0d0a0d0a','0d0a0d0a','0d0a0d0a','0d0a0d0a','290d0a7d','290d0a','7d0d0a7d','7d0d0a','0d0a','0a');
	$JADI = array('','20','20','20','20','20','20','0d0a','0d0a','0d0a','0d0a','0d0a','297d','293b','7d7d','7d3b','','');
	for ($i=0; $i < count($DARI); $i++) { 
		$HASIL = str_replace( $DARI[$i], $JADI[$i], "$HASIL" );
	}
	$HASIL = hex2bin($HASIL);
	$DARI = array(' :',': ',' ;','; ',' ,',', ',' (','( ',' )',') ',' {','{ ',' }','} ',' [','[ ',' ]','] ',' /','/ ',' +','+ ',' -','- ',' *','* ',' <','< ',' >','> ',' =','= ',' ==','== ',' ===','=== ',' &&','&& ',' ||','|| ',';}',',}',',)');
	$JADI = array(':',':',';',';',',',',','(','(',')',')','{','{','}','}','[','[',']',']','/','/','+','+','-','-','*','*','<','<','>','>','=','=','==','==','===','===','&&','&&','||','||','}','}',')');
	for ($i=0; $i < count($DARI); $i++) { 
		$HASIL = str_replace( $DARI[$i], $JADI[$i], "$HASIL" );
	}
	return $HASIL;
}
