<?php
require_once('dbconnect.php');
$sql="create table if not exists users(
       	   sno int(6) auto_increment,
       	   pid varchar(20),
	   uname varchar(200),
	   email varchar(200),
	   college varchar(200),
	   phone int(10),
	   ipaddr varchar(200),
           primary key(sno,email,pid)
	);";
$ref = mysql_query($sql);

?>