<?php
$HASIL = file_get_contents('seguisym.woff');
echo 'data:text/plain;base64,'.base64_encode($HASIL).'</br>';
/*
$HASIL = file_get_contents('segmdl2.woff');
echo 'data:text/plain;base64,'.base64_encode($HASIL).'</br>';
$HASIL = file_get_contents('segoeuiz.woff');
echo 'data:text/plain;base64,'.base64_encode($HASIL).'</br>';
$HASIL = file_get_contents('segoeuii.woff');
echo 'data:text/plain;base64,'.base64_encode($HASIL).'</br>';
$HASIL = file_get_contents('segoeuib.woff');
echo 'data:text/plain;base64,'.base64_encode($HASIL).'</br>';
$HASIL = file_get_contents('segoeui.woff');
echo 'data:text/plain;base64,'.base64_encode($HASIL).'</br>';
