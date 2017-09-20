@extends('emails.templates.responsive')

@section('title', '30th Anniversary RSVP')

@section('content')

    <p>We have received your RSVP for the Phoenix Shanti Group 30th Anniversary gala. The event is at the Encanto Park Clubhouse on 15th Avenue south of Edgemont Avenue. The event runs from 4 pm to 8 pm, Saturday Dec. 9, 2017.</p>

    <p>Below is the information you submitted. Please call Shanti at 602.279.0008 if you need to change or cancel your RSVP. If you do not plan to attend after RSVP'ing, please contact us so we can get an accurate headcount. Space is limited.  Thank you.</p>

    <hr />

    <p><strong>Name: </strong>{{ $data['name'] }}</p>

    <p><strong>Email: </strong>{{ $data['email'] }}</p>

    <p><strong>Phone: </strong> {{ $data['phone'] }}</p>

    <p><strong>Message: </strong> {!! nl2br($data['comments']) !!}</p>

@endsection