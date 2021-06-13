<?php

// подключаем скрипт
require_once 'data_connect_db.php'; 
  
// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

mysqli_set_charset($con, "utf8"); //обозначаем кодировку

$_POST = json_decode(file_get_contents('php://input'), true);

// выполняем операции с базой данных
if (isset($_POST['id'])) {

  $id = $_POST['id'];
  
  if ($id == 'all') {
    $query_select_user_data = "SELECT dataproduct, comment FROM product_electro";
    $answer = mysqli_fetch_all(mysqli_query($link, $query_select_user_data), MYSQLI_ASSOC);

  } else {
    //получаем данные с BD о продукте
    $query_select_user_data = "SELECT dataproduct, comment FROM product_electro WHERE	idproduct='$id'";
    $result_select_user_data = mysqli_fetch_array(mysqli_query($link, $query_select_user_data));

    $answer = array(
      'dataproduct' => $result_select_user_data['dataproduct'],
      'comment' => $result_select_user_data['comment']
    ); 
  }
  // переводим в JSON и отправляем ответ
  echo json_encode($answer, JSON_UNESCAPED_UNICODE); 
  //echo json_encode($result_select_user_data, JSON_UNESCAPED_UNICODE); 
}     
  
// закрываем подключение
mysqli_close($link);
?>