@extends('emails.templates.email')

@section('preheader', 'Happy belly-button birthday to ' . $first_name . '.')

@section('title', 'Happy Belly-button Birthday!')

@section('email')

    <h1 style="font:24px 'Cabin'; color: #9C659C">{{ $subject }}</h1>
    <p style="font: 12px/14px Helvetica, Arial, sans">Happy birthday,  {{ $first_name }}!!  Although we as recovering addicts and alcoholics don't place the same emphasis on "belly-button" birthdays that we place on our recovery birthdays, this is still an important day.</p>

    <p style="font: 12px/14px Helvetica, Arial, sans">As you are a valued member of Lambda, our organization would like to take a moment to wish you a happy birthday!  We hope this is a special day for you and that all your birthday wishes come true!</p>

    <p style="font: 12px/14px Helvetica, Arial, sans">With gratitude, <br />Your Lambda Board of Directors</p>

@stop