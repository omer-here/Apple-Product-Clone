<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $userName = $_POST['userName'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $paymentMethod = $_POST['paymentMethod'];
    $conn = new mysqli('localhost','root','','checkout');
    if($conn->connect_error){
        die('connection failed : '.$conn->connect_error);
    }
    else{
        $stmt = $conn->prepare("insert into checkout(firstName, lastName, userName, email,
        address, country,state,zip,paymentMethod) values(?,?,?,?,?,?,?,?,?)");
        $stmt->bind_param("sssssssis",$firstName,$lastName,$userName,$email,$address,$country,$state
        ,$zip,$paymentMethod);
        $stmt->execute();
        echo "registration successfully";
        $stmt->close();
        $conn->close();
    }
?>