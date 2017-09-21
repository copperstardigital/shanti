@extends('emails.templates.email')

@section('preheader', 'Happy recovery birthday to you!')

@section('title', 'Happy Birthday!')

@section('email')
    <h1 style="font:24px Helvetica, Arial, sans; color: #9C659C">{{ $subject }}</h1>
    <p style="font: 12px/14px Helvetica, Arial, sans">Happy birthday,  {{ $first_name }}!!  You did it!  You made it through one more year of recovery!  Congratulations!  What a huge accomplishment.</p>

    <p style="font: 12px/14px Helvetica, Arial, sans">How did you do it?  Well, if you are like most of us, you did it by going to meetings, working with a sponsor, sponsoring others and doing service work.  Those are huge parts of any successful recovery program.  For most of us, this is a time of reflection on where we've been and where we're going.  If you haven't been to a meeting in a while, this is a great time to renew your commitment to your recovery.  If you are a regular meeting-goer, this is a great time to share about your birthday.  You and your Higher Power can accomplish great things through you.</p>

    <p style="font: 12px/14px Helvetica, Arial, sans">With gratitude, <br />Your Lambda Board of Directors</p>
@stop