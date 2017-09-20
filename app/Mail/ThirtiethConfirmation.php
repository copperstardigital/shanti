<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ThirtiethConfirmation extends Mailable
{
    use Queueable, SerializesModels;
    /**
     * @var
     */
    public $data;

    /**
     * Create a new message instance.
     *
     * @param $data
     */
    public function __construct($data)
    {
        //
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.html.thirtieth-confirmation')
            ->text('emails.plain.thirtieth-confirmation')
            ->subject('30th Anniversary RSVP Confirmation');
    }
}
