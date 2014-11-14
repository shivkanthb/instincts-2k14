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
  $coll = $_POST["college"];
  $nop = $_POST["numberop"];
  $coord = $_POST["coord"];
  $phone = $_POST["phone"];
  $mail = $_POST["mail"];
  
 
  $data = $coll."&nbsp;&nbsp;&nbsp;&nbsp;".$nop."&nbsp;&nbsp;&nbsp;&nbsp;".$coord."&nbsp;&nbsp;&nbsp;&nbsp;".$phone."&nbsp;&nbsp;&nbsp;&nbsp;".$mail."<br>";
 
  $my_file = "./reply/fashion.html";
  $handle = fopen($my_file, 'a+') or die('Cannot open file:  '.$my_file);
  fwrite($handle, $data);
  fclose($handle);
 
  $msg1 = "registered ".$coll." for Vogue Show.";
  $_SESSION['6_letters_code']='#$%@^&*uiopo';
 }
 echo(json_encode(array("msg"=>$msg1)));
?>