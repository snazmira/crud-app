<?php
include('../config/connection.php');

// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
  $request = json_decode($postdata);

}

$fname = $request->fname;
$lname = $request->lname;
$email = $request->email;
$phoneNum = $request->phoneNum;
$hireDate = $request->hireDate;
$jobTitle = $request->jobTitle;
$managerId = $request->managerId;

$statement = $conn->prepare('INSERT INTO employee (fname,lname, email, phoneNum, hireDate, jobTitle, managerId)
    VALUES (:fname, :lname, :email, :phoneNum, :hireDate, :jobTitle, :managerId)');

// $stmt = $conn->query("SELECT LAST_INSERT_ID()");
// $lastId = $stmt->fetchColumn();

$result = $statement->execute([
    'fname' => $fname,
    'lname' => $lname,
    'email' => $email,
    'phoneNum' => $phoneNum,
    'hireDate' => $hireDate,
    'jobTitle' => $jobTitle, 
    'managerId' => $managerId
]);

if($result){
    http_response_code(201);
    $employee = [
        'fname' => $fname,
        'lname' => $lname,
        'email' => $email,
        'phoneNum' => $phoneNum,
        'hireDate' => $hireDate,
        'jobTitle' => $jobTitle, 
        'managerId' => $managerId
    ];
    echo json_encode(['data'=>$employee]);
}else{
    http_response_code(422);
}

?>