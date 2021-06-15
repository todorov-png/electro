<?php

//Подключаем скрипт
require_once 'data_connect_db.php'; 
  
//Подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

//Указываем кодировку
mysqli_set_charset($con, "utf8"); 

//Получаем данные в JSON
$_POST = json_decode(file_get_contents('php://input'), true);

//Выполняем операции с базой данных
if (isset($_POST['email']) && isset($_POST['details'])) {
  $email = $_POST['email'];
  $details = json_encode($_POST['details'], JSON_UNESCAPED_UNICODE);

  //Получаем количество заказов и номер телефона пользователя
  $query_select_user_data = "SELECT phone, orders FROM users_electro WHERE email='$email'";
  $result_select_user_data = mysqli_fetch_array(mysqli_query($link, $query_select_user_data));
  $phone = $result_select_user_data['phone'];
  $orders = $result_select_user_data['orders'] + 1;

  //Делаем запись заказа в бд
  $query_insert_orders = "INSERT INTO orders_electro (email, phone, orders, details) VALUES ('$email', '$phone', '$orders', '$details')";
  $result_insert_orders = mysqli_query($link, $query_insert_orders);

  //Обновляем данные в бд о пользователе
  $query_update_orders = "UPDATE users_electro SET orders='$orders' WHERE email='$email'";
  $result_update_orders = mysqli_query($link, $query_update_orders);

  //Проверяем все ли запросы выполнились успешно
  if ($result_update_orders && $result_insert_orders) {
    $answer = true;
  } else {
    $answer = false;
  }
  
  //Переводим в JSON и отправляем ответ
  echo json_encode($answer, JSON_UNESCAPED_UNICODE); 

  $project_name = "ELECTRO";
  $admin_email  = "electro@electroshopnure.zzz.com.ua";
  $form_subject = "Новый заказ с сайта ELECTRO";
  $sum = 0;
  $message .= "<tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>from</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$phone</td>
              </tr>
              <tr style='background-color: #f8f8f8;'>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>from</td>
                <td style='padding: 5px; border: #e9e9e9 1px solid;'>$email</td>
              </tr>";

  foreach ( json_decode($details, true) as $key => $value_array ) {
    $key += 1;
    
    $message .= "<tr style='background-color: #f8f8f8;'>
      <td style='padding: 5px; border: #e9e9e9 1px solid;'></td>
      <td style='padding: 5px; border: #e9e9e9 1px solid;'>Товар №$key</td>
    </tr>";

    foreach ( $value_array as $key_array => $value ) {
      $message .= "
      <tr style='background-color: #f8f8f8;'>
        <td style='padding: 5px; border: #e9e9e9 1px solid;'><b>$key_array</b></td>
        <td style='padding: 5px; border: #e9e9e9 1px solid;'>$value</td>
      </tr>
      ";
    }
    $sum += $value_array['price'] * $value_array['counter'];
  }

  $message .= "<tr style='background-color: #f8f8f8;'>
      <td style='padding: 5px; border: #e9e9e9 1px solid;'>sum</td>
      <td style='padding: 5px; border: #e9e9e9 1px solid;'>$sum грн.</td>
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
  
//Закрываем подключение
mysqli_close($link);
?>