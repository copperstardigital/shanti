<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RecurringDonationEmail extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var
     */
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
        return $this->view('emails.html.donation')
            ->text('emails.plain.donation')
            ->subject('Thank you for your donation')
            ->bcc('dfloth@shantiaz.org');
    }
}
