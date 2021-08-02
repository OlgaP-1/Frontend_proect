<?php 
$user_name = $_GET['user_name'];
$user_email = $_GET['user_email'];
$user_tel = $_GET['user_tel'];
$user_text = $_GET['user_text'];

mail('olya.dnk@mail.ru', 'Заявка с сайта', "Покупатель ждет звонок. \n Имя покупателя: $user_name. \n Email: $user_email \n Контактный телефон: $user_tel \n Покупатель оставил сообщение: $user_text");

// echo "$user_name Ваша заявка отправлена";
header("Location:  ../index.html");

?>