<?php
$mysql_host = "localhost";
$mysql_database = "zadmin_insti";
$mysql_user = "insti";
$mysql_password = "evune7ana";

$con=mysql_connect($mysql_host,$mysql_user,$mysql_password);
mysql_select_db($mysql_database,$con);
?>