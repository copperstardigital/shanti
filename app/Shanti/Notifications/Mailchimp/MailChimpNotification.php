<?php

namespace App\Shanti\Notifications\Mailchimp;

use App\Shanti\Notifications\NotificationInterface;
use Mailchimp;

class MailChimpNotification implements NotificationInterface {

    protected $mailchimp;

    public function notify($title, $body)
    {
        $mailchimp = new MailChimp(env('MAILCHIMP_API_KEY'));

        $options = array(
            'list_id'    => env('MAILCHIMP_LIST_ID'),
            'subject'    => $title,
            'from_name'  => 'Phoenix Shanti Group',
            'from_email' => 'info@shantiaz.org',
            'to_name'    => 'Phoenix Shanti Group Supporter'
        );

        $content = array(
            'html' => $body,
            'text' => strip_tags($body)
        );

        $campaign = $mailchimp->campaigns->create('regular', $options, $content);

        $mailchimp->campaigns->send($campaign['id']);
    }
}