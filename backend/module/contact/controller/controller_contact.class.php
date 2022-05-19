<?php

class controller_contact
{
    function send_contact_us()
    {
        $message = [
            'type' => 'contact',
            'inputName' => $_POST['name'],
            'fromEmail' => $_POST['email'],
            'inputMatter' => $_POST['matter'],
            'inputMessage' => $_POST['message']
        ];
        $email = json_decode(mail::send_email($message), true);
        if (!empty($email)) {
            echo json_encode('true');
            return;
        }
        echo json_encode('Error!');
    }
}// end_controller_contact