<?php
  /*error_reporting(E_ERROR|E_PARSE);
         session_start();
    ob_start();
    require_once("dbcreate.php");
                $uname = $_POST['name'];
    $umail = filter_var($_POST['email'],FILTER_VALIDATE_EMAIL);
    $coll = $_POST['college'];
    $phone = $_POST['mobile'];
    $ipad = $_SERVER['REMOTE_ADDR'];

    $sql = "select count(*) from users where email='".$umail."'";
    $ref = mysql_query($sql);
    $result = mysql_result($ref,0);

    if($result != 0)
      $msg1="Email already registered.";
    else if(!$uname)
    {
      $msg1="Enter valid user name.";
    }
    else if(!$umail)
    {
      $msg1="Enter a valid email id.";
    }
    else
    {
      $sql = "select max(sno) as nno from users";
      $ref = mysql_query($sql);
      $row = mysql_fetch_assoc($ref);
      $padded="i".sprintf("%06d", $row != null ? $row["nno"]+1 : 1);
      
      $sql = "insert into users(pid,uname,email,college,phone,ipaddr) values('".mysql_real_escape_string($padded)."','".mysql_real_escape_string($uname)."','".mysql_real_escape_string($umail)."','".mysql_real_escape_string($coll)."','".$phone."','".$ipad."');" ; 
      
      $ref = mysql_query($sql);
      
      if(!$ref)
      {
        $msg1 = "Error during registration";
  
      }
      else
      {
        
                $msg1 = "Registration Successful.Your Instincts ID is ".$padded;  
        $_SESSION["mail_id"] = $umail;
        include("send_mail.php");    
        //Header("Location:index.php");
      }
    }
  echo($msg1);*/
?>