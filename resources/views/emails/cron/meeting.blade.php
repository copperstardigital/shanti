@extends('emails.templates.email')

@section('preheader', 'This is your automated meeting reminder from Lambda Phoenix Center.')

@section('title', 'My Meetings')

@section('email')
        <h1 style="font:24px Helvetica, Arial, sans; color: #9C659C">{{ $subject }}</h1>
        <p style="font: 12px/14px Helvetica, Arial, sans">Hello,  {{ $first_name }}!</p>

        <p style="font: 12px/14px Helvetica, Arial, sans">We are reminding you of the following meeting, which you scheduled in My Meetings.</p>

        <h3 style="font: 16px Helvetica, Arial, sans-serif; color: #9C659C; margin-top: 0;">{{ $meeting_name }} at {{ date('g:i a', strtotime($meeting_time)) }}.</h3>

        <p style="font: 12px/14px Helvetica, Arial, sans">Be sure to join all of your fellow home group members today!</p>

        <p style="font: 12px/14px Helvetica, Arial, sans">With gratitude, <br />Your Lambda Board of Directors</p>
@stop