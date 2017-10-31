<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OneTimeDonationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $amount;
    /**
     * @var
     */
    public $firstName;

    /**
     * Create a new message instance.
     * @param $firstName
     * @param $amount
     */
    public function __construct($firstName, $amount)
    {
        $this->amount = $amount;
        $this->firstName = $firstName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.html.one-time-donation')
            ->text('emails.plain.one-time-donation')
            ->subject('Thank you for your donation')
            ->bcc('dfloth@shantiaz.org');
    }
}
