<?php
  /*session_start();
 ob_start();
 require_once 'swift/lib/swift_required.php';
 require_once('dbconnect.php');

 $sql = "select * from users where email='".$_SESSION["mail_id"]."'";
 $ref = mysql_query($sql);
 $row = mysql_fetch_assoc($ref);

 $id=$row['pid'];
 $name=$row['uname'];
 $to=$row['email'];
 
 $transport = Swift_MailTransport::newInstance();
 $mailer = Swift_Mailer::newInstance($transport);

 $msg = "Hi ".$name.",\n\n\tThank you for registering at Instincts. Prepare for fun frolic and extravaganza! :D\n\n\tYour Instincs id is ".$id.". Do note it down for further use.";
 

 $message = Swift_Message::newInstance('Registration Confirmation for Instincts-2k14')
  ->setFrom(array('info@instincts.org.in' => 'Instincts-2k14 Team'))
  ->setTo(array($to => $name))
  ->setBody($msg)
  ;

 
 $result = $mailer->send($message);
 if($result>0)
  $data= $snum." Mail Sent to ".$to." ".$name."<br/>";
 else 
  $data= "Mail sending failed to".$to." ".$snum." ".$key."<br/>";
 $my_file = 'maillogs.html';
 $handle = fopen($my_file, 'a+') or die('Cannot open file:  '.$my_file);
 fwrite($handle, $data);
 fclose($handle);
 
 
  //echo $_SESSION['mail_id'];*/
?>