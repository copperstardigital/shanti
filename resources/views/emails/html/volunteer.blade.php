@extends('emails.templates.responsive')

@section('title', 'Volunteer Opportunity')

@section('content')

    <p><strong>Name: </strong>{{ $data['name'] }}</p>

    <p><strong>Email: </strong>{{ $data['email'] }}</p>

    <p><strong>Phone: </strong> {{ $data['phone'] }}</p>

    <p><strong>Position: </strong> {{ $data['position'] }}</p>

    <p><strong>Comments: </strong> {!! nl2br($data['comments']) !!}</p>

@endsection