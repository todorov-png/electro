<?php

// подключаем скрипт
require_once 'data_connect_db.php'; 
  
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
		or die("Ошибка " . mysqli_error($link));

// выполняем операции с базой данных
if (isset($_POST['text']) && isset($_POST['phone'])) {
	$text = $_POST['text'];
	$phone = $_POST['phone'];
	$query = "INSERT INTO question_electro (text, phone) VALUES ('$text', '$phone')";
	$result = mysqli_query($link, $query); 

	$project_name = "ELECTRO";
  $admin_email  = "electro@electroshopkhai.zzz.com.ua";
  $form_subject = "Новый вопрос с сайта ELECTRO";
  $sum = 0;
  $message .= "<tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>from</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$phone</td>
              </tr>
              <tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>from</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$text</td>
              </tr>";

  $message = "<table style='width: 100%;'>$message</table>";

  function adopt($text) {
    return '=?UTF-8?B?'.Base64_encode($text).'?=';
  }

  $headers = "MIME-Version: 1.0" . PHP_EOL .
  "Content-Type: text/html; charset=utf-8" . PHP_EOL .
  'From: '.adopt($project_name).' <'.$admin_email.'>' . PHP_EOL .
  'Reply-To: '.$admin_email.'' . PHP_EOL;

  mail($admin_email, adopt($form_subject), $message, $headers ); 
}
// закрываем подключение
mysqli_close($link);
?>