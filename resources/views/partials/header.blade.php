<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta charset="utf-8">

    <!-- Description, Keywords and Author -->
    <meta name="description" content="Phoenix Shanti Group website">
    <meta name="author" content="Copper Star Digital">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="publishable-key" content="{{config('services.stripe.key') }}" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <!-- Styles -->
    <!-- Font awesome CSS -->
    <link href="/css/font-awesome.min.css" rel="stylesheet">
    <!-- Magnific Popup -->
    <!--<link href="/css/magnific-popup.css" rel="stylesheet">-->
    <!-- Owl carousel -->
    <!--<link href="/css/owl.carousel.css" rel="stylesheet">-->

    <!-- CSS for this page -->
    <!-- Parallax slider -->
    <!--<link href="/css/parallax-slider.css" rel="stylesheet">-->

    <!-- Base style -->
    <link href="/css/app.css" rel="stylesheet">
    <!-- Skin CSS -->

    <!-- Favicon -->
    <link rel="shortcut icon" href="/favicons/favicon.ico">
    <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
    <link rel="manifest" href="/favicons/manifest.json">
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#ffffff">

    <!--<link rel="stylesheet" href="https://s3.amazonaws.com/icomoon.io/48345/Shanti/style.css?ej4020">-->
    <link rel="stylesheet" href="https://i.icomoon.io/public/373f33d17b/Shanti/style.css">
</head>

<!-- Add class "boxed" along with body for boxed layout. -->
<!-- Add "pattern-x" (1 to 5) for background patterns. -->
<!-- Add "img-x" (1 to 5) for background images. -->
<body>

<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-97041704-2', 'auto');
    ga('send', 'pageview');

</script>

<div id="app">
    @if (!app()->isDownForMaintenance())
        <psg-header></psg-header>
    @else
        <div class="outer">

            <!-- Top bar starts -->
            <div class="top-bar">
                <div class="container">

                    <!-- Contact starts -->
                    <div class="tb-contact pull-left">
                        <!-- Email -->
                        <i class="fa fa-envelope color"></i> &nbsp; <a href="mailto:info@shantiaz.org">info@shantiaz.org</a>
                        &nbsp;&nbsp;
                        <!-- Phone -->
                        <i class="fa fa-phone color"></i> &nbsp;(602) 279-0008
                    </div>
                    <!-- Contact ends -->

                    <!-- Social media starts -->
                    <div class="tb-social pull-right">
                        <div class="brand-bg text-right">
                            <!-- Brand Icons -->
                            <a target="_blank" href="http://www.facebook.com/phoenixshantigroup" class="facebook"><i class="fa fa-facebook square-2 rounded-1"></i></a>
                            <a target="_blank" href="http://www.facebook.com/shanti2ndchances" class="facebook"><i class="fa fa-facebook square-2 rounded-1"></i></a>
                            <a target="_blank" href="https://twitter.com/PhoenixShanti" class="twitter"><i class="fa fa-twitter square-2 rounded-1"></i></a>
                            <a target="_blank" href="https://www.youtube.com/user/PhoenixShantiGroup" class="youtube"><i class="fa fa-youtube square-2 rounded-1"></i></a>
                        </div>
                    </div>
                    <!-- Social media ends -->

                    <div class="clearfix"></div>
                </div>
            </div>

            <!-- Top bar ends -->

            <!-- Header two Starts -->
            <div class="header-2">

                <!-- Container -->
                <div class="container">
                    <div class="row">
                        <div class="col-md-2">
                            <!-- Logo section -->
                            <div class="logo">
                                <img width="175px" class="hidden-xs" src="/img/shanti_logo.png" alt="Phoenix Shanti Group">
                            </div>
                        </div>
                        <div class="col-md-8">

                        </div>

                        <div class="col-md-2">

                        </div>

                    </div>
                </div>
            </div>
        </div>
    @endif

