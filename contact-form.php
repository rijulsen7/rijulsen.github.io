<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recaptchaSecret = '6Le5gLwqAAAAAO5zFh5gKlJ3U0T3O_OMPZXEzx73'; // Your Secret Key
    $recaptchaResponse = $_POST['g-recaptcha-response']; // Captcha response from the form

    // Send the request to Google to verify the CAPTCHA
    $verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptchaSecret&response=$recaptchaResponse");

    $responseKeys = json_decode($verifyResponse, true);

    if (intval($responseKeys["success"]) !== 1) {
        // If CAPTCHA verification fails
        echo "reCAPTCHA verification failed. Please try again.";
    } else {
        // CAPTCHA validated successfully, handle form submission
        // You can use the submitted data for various purposes (e.g., sending an email or saving to a database)
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];

        // Example: send an email
        $to = "your-email@example.com"; // Replace with your email address
        $subjectLine = "New message from $name";
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        if (mail($to, $subjectLine, $body, $headers)) {
            echo "Success! Your message has been sent.";
        } else {
            echo "There was an error sending your message. Please try again later.";
        }
    }
}
?>
