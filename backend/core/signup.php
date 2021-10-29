<?php
include('../config/connection.php');

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

}

$email = $request->email;
$password = $request->password;

$statement = $conn->prepare('INSERT INTO user (email, password)
    VALUES (:email, :password)');

// $stmt = $conn->query("SELECT LAST_INSERT_ID()");
// $lastId = $stmt->fetchColumn();

$result = $statement->execute([
    'email' => $email,
    'password' => $password,
]);

if($result){
    http_response_code(201);
    $employee = [
        'email' => $email,
        'password' => $password,
    ];
    echo json_encode(['data'=>$employee]);
}else{
    http_response_code(422);
}

?>