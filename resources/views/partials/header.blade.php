<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>
        {{--@if (Request::is('admin/*'))--}}
            {{--@if ($__env->yieldContent('page_title'))--}}
                {{--Admin |--}}
                {{--@yield('page_title')--}}
                {{--| Phoenix Shanti Group--}}
            {{--@else--}}
                {{--Admin | Phoenix Shanti Group--}}
            {{--@endif--}}
        {{--@else--}}
            {{--@if ($__env->yieldContent('page_title'))--}}
                {{--@yield('page_title')--}}
                {{--| Phoenix Shanti Group--}}
            {{--@else--}}
                {{--Phoenix Shanti Group--}}
            {{--@endif--}}
        {{--@endif--}}
    </title>
    <!-- Description, Keywords and Author -->
    <meta name="description" content="Phoenix Shanti Group website">
    <meta name="author" content="Copper Star Digital">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

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

<div id="app">
    <psg-header></psg-header>

