<?php
    $sever = "localhost";
    $user = "root";
    $pass = "";
    $db_name = "journey_craft";

        $conn = new mysqli($sever,$user,$pass,$db_name);
            if($conn->connect_error){
                die("Connection Faild".$conn->connect_error);
            }
            echo "";
?>