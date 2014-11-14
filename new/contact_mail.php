<?php
 session_start();
 ob_start();
 require_once 'register/swift/lib/swift_required.php';
 
 if($_SESSION['onpage']=="qwerty")
 {
  if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
  {
   $transport = Swift_MailTransport::newInstance();
   $mailer = Swift_Mailer::newInstance($transport);

   $message = Swift_Message::newInstance("Instincts Query Mail")
   ->setFrom(array($_POST['email'] => $_POST['name']))
   ->setTo(array("info@instincts.org.in"=>"support"))
   ->setBody($_POST['message'])
   ;
 
   $result = $mailer->send($message);
   if($result>0)
    $data= "Mail has been successfully sent.You will be contacted by team soon.";
   else 
    $data= "Oh snap!Seems our servers are overloaded.Please try in some time.";
  }
  else
  {
   $data= "Please check your mail id.";
   $result = -99;
  }
  unset($_SESSION['onpage']);
 }
 else
 {
  $data = "Good try spammer.!.*evil smirk*";
  $result = -99;
 }
 echo(json_encode(array("message"=>$data,"stat"=>$result)));
?>