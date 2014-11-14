<?php
 error_reporting(E_ERROR|E_PARSE);
 session_start();
 ob_start();
 require_once('./register/dbconnect.php');
 
 $captcha = $_POST['captcha'];
        
 foreach($_POST as $f1)
 {
  if($f1==NULL)
   $flag = 1;
 }

 if($flag == 1)
  $msg1="Do not leave any field blank.";
 else if($_SESSION['6_letters_code'] == "#$%@^&*uiopo")
  $msg1 = "Error in captcha.Try refreshing the page.";
 else if($captcha != $_SESSION['6_letters_code'])
 {
  $_SESSION['6_letters_code']="#$%@^&*uiopo";
  $msg1 = "Captcha code wrong";
 }
 else
 {
  $key = $_POST["key"];
  $sql = "select * from users where pid='".$key."';";
  $ref = mysql_query($sql);
  $row = mysql_fetch_assoc($ref);
 
  $data = $row["uname"]."&nbsp;&nbsp;&nbsp;&nbsp;".$row["email"]."&nbsp;&nbsp;&nbsp;&nbsp;".$row["phone"]."&nbsp;&nbsp;&nbsp;&nbsp;".$row["college"]."<br>";
 
  $my_file = "./reply/photography.html";
  $handle = fopen($my_file, 'a+') or die('Cannot open file:  '.$my_file);
  fwrite($handle, $data);
  fclose($handle);
 
  $msg1 = "registered ".$row["pid"]." for photography workshop.";
 }
 echo(json_encode(array("msg"=>$msg1)));
?>