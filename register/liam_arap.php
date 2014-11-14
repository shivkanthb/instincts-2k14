<?php
  /*require_once 'swift/lib/swift_required.php';
require_once('dbconnect.php');

$sql = "select * from users";
$ref = mysql_query($sql);
$i = 1;
 while($row = mysql_fetch_assoc($ref))
{
 $snum=$row['sno'];
 $key=$row['pid'];
 $name=$row['uname'];
 $to=$row['email'];
  
 
  /* $to="harishankar.gopalan@ymail.com";
 $name="hari";
 $key="i00011";
  
 
 if(filter_var($to,FILTER_VALIDATE_EMAIL))
 {
  $transport = Swift_MailTransport::newInstance();
  $mailer = Swift_Mailer::newInstance($transport);

  $msg = "Hi ".$name.",\n\n\tThe much awaited Instincts-2k14 apps for windows and android users are here. So here is an easy access to the complete event list and schedule of Insitncts-2k14.\n\nWindows: http://www.windowsphone.com/en-us/store/app/instincts/d3b7216a-f1d5-4c92-b9d2-7d07a7241263 \n\nAndroid: https://play.google.com/store/apps/details?id=com.praveen.instincts\n\nThanking You\nInstincts2k14-Team.";
    
 
  $message = Swift_Message::newInstance('Instincts2k14-Apps')
  ->setFrom(array('info@instincts.org.in' => 'Instincts-2k14 Team'))
  ->setTo(array($to => $name))
  ->setBody($msg)
  ;

 $result = $mailer->send($message);
 if($result>0)
  echo $snum." Mail Sent to ".$to." ".$name." ".$key."<br/>";
 else 
  echo "Mail sending failed";
 $i++;
 }
}*/
?>