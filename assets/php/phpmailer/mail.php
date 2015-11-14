<?php
require 'PHPMailerAutoload.php';

$email = new PHPMailer;

$email->SMTPDebug = 1;
$email->isSMTP();
$email->Host = 'smtp.gmail.com';
$email->SMTPAuth = true;

$email->Username = 'mazhartejani@gmail.com';
$email->Password = 'Tryagain110';
$email->SMTPSecure = 'tls';
$email->Port = 587;

$email->setFrom('admin@zahratech.com', 'Zahra Admin');
$email->addAddress('mazhartejani@gmail.com');
$email->addReplyTo('mazharhussain8@gmail.com', 'Information');

$email->Subject = 'Test mail for zahra web';
$email->Body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
$email->AltBody = 'This is the body in plain text for non-HTML mail clients';

$email->send();

?>