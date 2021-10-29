<?php
require_once('../config/connection.php');


$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
$request = json_decode($postdata);
}


$fname = $request->fname;
$lname = $request->lname;
$email = $request->email;
$phoneNum = $request->phoneNum;
$hireDate = $request->hireDate;
$jobTitle = $request->jobTitle;
$managerId = $request->managerId;
$employeeId = (int)$request->employeeId;


$statement = $conn->prepare("UPDATE employee SET fname=:fname, lname=:lname, email=:email, phoneNum=:phoneNum, hireDate=:hireDate, jobTitle=:jobTitle, managerId=:managerId
WHERE employeeId = :employeeId");

$result = $statement->execute([
    'fname' => $fname,
    'lname' => $lname,
    'email' => $email,
    'phoneNum' => $phoneNum,
    'hireDate' => $hireDate,
    'jobTitle' => $jobTitle, 
    'managerId' => $managerId,
    'employeeId' => $employeeId
]);

if($result){
http_response_code(201);
echo json_encode(['data'=>$result]);
echo "success";
}else{
http_response_code(422);
}

?>