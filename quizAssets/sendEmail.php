<?php
$subject = "IWG Quiz Results";

$email = $_POST['email'];
$code = $_POST['code'];

$message = "
<html style='padding: 1em; background-color: #afd6c1'>
<body style='background-color: white; padding: 1em'>" . $code . "</body></html>";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: Integrative Wellness Group <info@integrativewellnessgroup.com>' . "\r\n";
$headers .= 'Reply-To: info@integrativewellnessgroup.com' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

mail($email, $subject, $message, $headers);
