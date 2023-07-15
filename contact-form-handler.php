<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $comment = $_POST['comment'];

    $email_from = 'thelasekx@gmail.com';

    $email_subject = 'Contact Form Submission';

    $email_body = "Name: $name.\n".
                    "From Email: $visitor_email\n".
                        "Message: $comment\n";

    $to = "ddemers1995@hotmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>