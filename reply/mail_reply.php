<?php
 session_start();
 ob_start();
 require_once '../register/swift/lib/swift_required.php';
 require_once('../register/dbconnect.php');
 
 $to = $_POST["to"];
 $subject = $_POST["subject"];
 $name = $_POST["pname"];
 $msg = $_POST["body"];

 
 
 $transport = Swift_MailTransport::newInstance();
 $mailer = Swift_Mailer::newInstance($transport);
 

 $message = Swift_Message::newInstance($subject)
  ->setFrom(array('info@instincts.org.in' => 'Instincts-2k14 Team'))
  ->setTo(array($to => $name))
  ->setBody($msg)
  ;

 
 $result = $mailer->send($message);
 if($result>0)
  $data= $snum." Mail Sent to ".$to." ".$name."<br/>";
 else 
  $data= "Mail sending failed to".$to." ".$snum." ".$key."<br/>";
 $my_file = 'replyMailLogs.html';
 $handle = fopen($my_file, 'a+') or die('Cannot open file:  '.$my_file);
 fwrite($handle, $data);
 fclose($handle);
 
 
 echo json_encode(array("msg"=>$data));
?>