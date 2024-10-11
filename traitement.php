<?php

if($_SERVER["REQUEST_METHOD"]=='POST'){

  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "halhoulsalma79@gmail.com, halhoulsa00@gmail.com";
  $subject = "Nouveau Message de votre portfolio";
  $body = "Nom : $name,<br> Email : $email,<br> Telephone : $phone,<br> Message : $message";

  mail($to,$subject,$body);
  
}