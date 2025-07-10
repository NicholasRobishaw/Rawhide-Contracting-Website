<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Replace this with your actual email address
    $to = "nick.r@rawhidecontracting.com";
    $subject = "New Contact Form Submission From Website";

    // Sanitize inputs
    $firstName = strip_tags($_POST["first-name"] ?? '');
    $lastName = strip_tags($_POST["last-name"] ?? '');
    $email = strip_tags($_POST["email"] ?? '');
    $phone = strip_tags($_POST["phone"] ?? '');
    $about = strip_tags($_POST["about"] ?? '');
    $service = strip_tags($_POST["service"] ?? '');

    // Build the email body
    $body = "New Contact Submission:\n\n";
    $body .= "Name: $firstName $lastName\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Service: $service\n\n";
    $body .= "About:\n$about\n";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
