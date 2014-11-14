<?php
  error_reporting(E_ERROR|E_PARSE);
  session_start();
  ob_start();
  
  require_once("dbcreate.php");
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
    $uname = $_POST['name'];
    $umail = filter_var($_POST['email'],FILTER_VALIDATE_EMAIL);
    $coll = $_POST['collname'];
    $phone = $_POST['phone'];
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
        
                $msg1 = "Registration Successful.Your Instincts ID is ".$padded.".Do check spam folders of your mail too.";  
        $_SESSION["mail_id"] = $umail;
        include("send_mail.php");    
        //Header("Location:index.php");
      }
    }
  }
  //Header("Location:index.php");
  echo(json_encode(array('message'=>$msg1,'mail'=>$_SESSION['mail_id'])));
  /*echo json_encode(array('message'=>$msg1,'mail'=>$_SESSION['mail_id']));
//   echo json_encode(array('code' => $captcha,'code1'=>$_SESSION['6_letters_code']));*/
    
?>