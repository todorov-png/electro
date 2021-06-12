<?php

// подключаем скрипт
require_once 'data_connect_db.php'; 
  
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

mysqli_set_charset($con, "utf8"); //обозначаем кодировку

$_POST = json_decode(file_get_contents('php://input'), true);

// выполняем операции с базой данных
if (isset($_POST['username']) && isset($_POST['textcomment']) && isset($_POST['time']) && isset($_POST['id'])) {

  $id = $_POST['id'];
  
  //получаем данные с BD с комментариями о продукте
  $query_select_user_data = "SELECT comment FROM product_electro WHERE	idproduct='$id'";
  $result_select_user_data = mysqli_fetch_array(mysqli_query($link, $query_select_user_data));

  //Добавляем новые данные в масив
  $comment = json_decode($result_select_user_data['comment']);
  $comment[] = $_POST;
  $comment = json_encode($comment, JSON_UNESCAPED_UNICODE); 

  //Обновляем данные в бд о продукте
  $query_update_orders = "UPDATE product_electro SET comment='$comment' WHERE idproduct='$id'";
  $result_update_orders = mysqli_query($link, $query_update_orders);

  // переводим в JSON и отправляем ответ
  echo json_encode(true, JSON_UNESCAPED_UNICODE); 
}      

// закрываем подключение
mysqli_close($link);
?>