!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <title>Tee's Home Renovations</title>
    </head>
    <?php
$servername = "localhost";
$dbUsername = "root";
$dbPassword = "root";
$dbName = "Construction";

//Create Connection

$con = mysqli_connect($servername, $dbUsername, $dbPassword, $dbName);

if(mysqli_connect_errno()){
echo "failed to connect!";
exit();
}
echo "Connection complete!";

?>