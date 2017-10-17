@extends('emails.templates.responsive')

@section('title', 'Thank You for Your Generosity!')

@section('content')

    <p>{{ \Carbon\Carbon::now()->format('F j, Y') }}</p>

    <p>Dear {{ $firstName }},</p>

    <p>The Phoenix Shanti Group would like to thank you for your generosity. Your monthly recurring donation of ${{ number_format(($amount / 100), 2) }} has begun. The Phoenix Shanti Group is an Arizona Non-Profit 501(c) (3) Corporation which was founded in 1987.  Our mission is to provide housing, education and patient services to people infected with and affected by HIV/AIDS.</p>

    <p>Donations are fully tax deductible as allowed by tax law.</p>

    <p>You can cancel anytime by emailing <a href="mailto:info@shantiaz.org">info@shantiaz.org</a>. We will soon be building a member portal for your convenience so you can manage your donation subscription. We thank you for your patience while this is built.</p>

    <p>Thank you again for acknowledging the important work we are doing in the continued struggle against HIV disease and AIDS, and for your generosity. Your kind gesture will make a significant impact on the self-worth of a patient in our homeless shelter program.</p>

    <p>We really appreciate your thoughtfulness.
    </p>

    <p>In Love and Light, <br />Keith Thompson</p>

    <p>Tax ID: 86-0592079</p>

@endsection