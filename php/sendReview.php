<?php 
$user_name2 = $_GET['user_name2'];
$user_email2 = $_GET['user_email2'];
$user_text2 = $_GET['user_text2'];


mail('olya.dnk@mail.ru', 'Получен отзыв', "Покупатель оставил жалобу или пожелание:  \n Имя покупателя: $user_name2. \n Email: $user_email2 \n Сообщение: $user_text2");

// echo "$user_name Ваша заявка отправлена";
header("Location:  ../index.html");

?>