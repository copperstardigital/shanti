<?php

namespace App\Shanti\Notifications;

interface NotificationInterface {

    public function notify($title, $body);
}
