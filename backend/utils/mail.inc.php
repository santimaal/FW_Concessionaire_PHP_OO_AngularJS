<?php
class mail
{
    public static function send_email($email)
    {
        switch ($email['type']) {
            case 'contact';
                $email['inputEmail'] = 'santimartinezalbert02@gmail.com';
                $email['toEmail'] = 'santimartinezalbert02@gmail.com';
                break;
            case 'validate';
                $email['fromEmail'] = 'santimartinezalbert02@gmail.com';
                $email['inputEmail'] = 'santimartinezalbert02@gmail.com';
                $email['inputMatter'] = 'Email verification';
                $email['inputMessage'] = "<h2>Email Verification.</h2><a href = 'http://localhost/angular_js/#/register/activate/$email[token]'>Click here for verify your email.</a>";
                break;
            case 'recover';
                $email['fromEmail'] = 'santimartinezalbert02@gmail.com';
                $email['inputEmail'] = 'santimartinezalbert02@gmail.com';
                $email['inputMatter'] = 'Recover password';
                $email['inputMessage'] = "<h2>Password Recover.</h2><a href = 'http://localhost/angular_js/#/register/recover/$email[token]'>Click here for recover your password.</a>";
                break;
        }
        return self::send_mailgun($email);
    }

    public static function send_mailgun($values)
    {
        $mailgun = parse_ini_file(MODEL_PATH . "newmailgun.ini");
        $api_key = $mailgun['api_key'];
        $api_url = $mailgun['api_url'];

        $config = array();
        $config['api_key'] = $api_key;
        $config['api_url'] = $api_url;

        $message = array();
        $message['from'] = $values['fromEmail'];
        // $message['to'] = $values['toEmail'];
        $message['to'] = "santimartinezalbert02@gmail.com";
        $message['h:Reply-To'] = $values['inputEmail'];
        $message['subject'] = $values['inputMatter'];
        $message['html'] = $values['inputMessage'];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $config['api_url']);
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($ch, CURLOPT_USERPWD, "api:{$config['api_key']}");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $message);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
}
