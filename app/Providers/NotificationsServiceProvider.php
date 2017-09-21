<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class NotificationsServiceProvider extends ServiceProvider {

    public function register() {
        $this->app->bind(
            'App\Shanti\Notifications\NotificationInterface',
            'App\Shanti\Notifications\Mailchimp\MailChimpNotification'
        );
    }
}