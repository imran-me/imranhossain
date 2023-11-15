<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["subject"];

    $to = "me.imran.personal@gmail.com";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
}
?>
