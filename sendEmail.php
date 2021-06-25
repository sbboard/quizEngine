<?php
$to = "somebody@example.com";
$subject = "IWG Quiz Results";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>
";

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'From: <info@integrativewellnessgroup.com>' . "\r\n";
$headers .= 'Reply-To: info@integrativewellnessgroup.com' . "\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
