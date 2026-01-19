<?php
    include("Main_PHP/connection.php");
    session_start();
    if(isset($_POST['submit'])){
        $First_name = $_POST['firstName'];
        $Last_name = $_POST['lastName'];
        $Email = $_POST['email'];
        $Passwordd = $_POST['password'];
        $Con_password = $_POST['confirmPassword'];
        $Country = $_POST['country'];
        $Gender = $_POST['gender'];
        $tel_no = $_POST['contactNumber'];

        $alertMessage = ''; 

        if($Passwordd == $Con_password){
            $sql = "INSERT INTO customer (First_name, Last_name, Email, passw, Con_password, Country, Gender, tel_no)  VALUES('$First_name','$Last_name','$Email','$Passwordd','$Con_password','$Country','$Gender','$tel_no')";
            $sql_query_run=mysqli_query($conn,$sql);
                if($sql_query_run){
                    $_SESSION['alertMessage'] = "User Registration Succesfull";
                    echo "<script>alert('{$_SESSION['alertMessage']}'); window.location.href='Login.php';</script>";
                    exit();
                }else{
                    $_SESSION['alertMessage'] = "User Registration failed";
                    header("Location:Signup.php");
                    exit();
                }
        }else{
            $_SESSION['alertMessage'] = "Password confirmation failed";
            echo "<script>alert('{$_SESSION['alertMessage']}'); window.location.href='Signup.php';</script>";
            exit();
        }
       
    }
    if(isset($_SESSION['alertMessage'])){
        echo "<script>alert('{$_SESSION['alertMessage']}')</script>";
        unset($_SESSION['alertMessage']);
    }
    ?>