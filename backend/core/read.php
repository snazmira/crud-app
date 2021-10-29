<?php


include('../config/connection.php');

$statement = $conn->prepare('SELECT employeeId, fname, lname, email, phoneNum, hireDate, jobTitle, managerId FROM employee');

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

echo json_encode(['data'=>$employeeList]);

?>