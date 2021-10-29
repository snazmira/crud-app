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

// $statement = $conn->prepare("SELECT * FROM user WHERE email=:email AND password=:password");

$statement = $conn->prepare('SELECT count(id) FROM user WHERE email=:email AND password=:password');
$statement->bindParam(":email",$email);
$statement->bindParam(":password",$password);
$statement->execute();
$result = $statement->fetchAll();

if($result){
    http_response_code(201);
    echo json_encode(['data'=>$result[0][0]]);
}else{
    http_response_code(422);
}

?>