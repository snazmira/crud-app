<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, responseType, Accept");

define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
define('NAME', 'simple-crud');

$db = new mysqli(HOST ,USER ,PASS ,NAME);
if ($db->connect_errno) {
	die("Database connection error:" . $db->connect_errno);
}
?>