<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    echo "Hello $name, your email is $email, and your message is $message";

    $email_from = "$email";
    $email_subject = "New Form Submission";
    $email_body = "You have received a new message from the user $name.\n".
                    "Here is the message:\n $message".


    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $email \r\n";

    $to = 'macohiho@gmail.com';


    mail($to,$email_subject,$email_body,$headers);
    echo 'Mail Sent. Thank you ' . $name . ', we will contact you shortly.';
    echo "<script>setTimeout(\"location.href = 'index.html';\",1500);</script>";
?>