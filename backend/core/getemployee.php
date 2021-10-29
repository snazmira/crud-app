<?php
require_once('../config/connection.php');

$employeeId = (int)$_GET['employeeId'];

$statement = $conn->prepare('SELECT employeeId, fname, lname, email, phoneNum, hireDate, jobTitle, managerId FROM employee where employeeId=:employeeId');
$statement->bindParam(":employeeId",$employeeId,PDO::PARAM_INT);
$statement->execute();

$employeeList = [];


$i = 0;
while($data = $statement->fetch( PDO::FETCH_ASSOC )){ 
    $employeeList[$i]['employeeId'] = $data['employeeId'];
    $employeeList[$i]['fname'] = $data['fname'];
    $employeeList[$i]['lname'] = $data['lname'];
    $employeeList[$i]['email'] = $data['email'];
    $employeeList[$i]['phoneNum'] = $data['phoneNum'];
    $employeeList[$i]['hireDate'] = $data['hireDate'];
    $employeeList[$i]['jobTitle'] = $data['jobTitle'];
    $employeeList[$i]['managerId'] = $data['managerId'];
    $i++;
}
    echo json_encode(['dataSingle'=>$employeeList]);
    http_response_code(201);



?>