<?php
include('../config/database.php');

$employeeId = ($_GET['employeeId'] !== null && (int)$_GET['employeeId'] > 0)? mysqli_real_escape_string($db, (int)$_GET['employeeId']) : false;
if(!$employeeId)
{
	return http_response_code(400);
}

$sql = "DELETE FROM employee WHERE employeeId =$employeeId";
if($db->query($sql))
{
	http_response_code(204);
  echo "success";
}
else
{
	return http_response_code(422);
  echo "error";
}