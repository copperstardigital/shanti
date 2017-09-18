@extends('emails.templates.responsive')

@section('title', 'Subject: ' . $data['subject'])

@section('content')

    <p><strong>Name: </strong>{{ $data['name'] }}</p>

    <p><strong>Email: </strong>{{ $data['email'] }}</p>

    <p><strong>Phone: </strong> {{ $data['phone'] }}</p>

    <p><strong>Message: </strong> {!! nl2br($data['message']) !!}</p>

@endsection