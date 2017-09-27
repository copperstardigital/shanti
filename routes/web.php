<?php

/**
 * SPA
 */

Route::get('/', 'Home\HomeController@main');

//Route::get('/', 'Home\HomeController@index');
//Route::get('/mission', 'Home\AboutController@mission');
//Route::get('/history', 'Home\AboutController@history');
//Route::get('/cultural-competency', 'Home\AboutController@culturalCompetency');
//Route::get('/privacy-policy', 'Home\AboutController@privacyPolicy');
//Route::get('/hiv-housing', 'Home\ServicesController@housing');
//Route::get('/hiv-services', 'Home\ServicesController@services');
//Route::get('/getting-started', 'Home\HomeController@gettingStarted');
//Route::get('/donate', 'Home\SupportController@donate');
//Route::get('/volunteer', 'Home\SupportController@volunteer');
//Route::get('/resources', 'Home\SupportController@resources');
//Route::get('/contact', 'Home\ContactController@index');
//Route::get('/staff', 'Home\ContactController@staff');
//Route::get('/board', 'Home\ContactController@board');
//
//Auth::routes();
//
//Route::get('/dashboard', 'Auth\DashboardController@index')->name('dashboard');

Route::get('posts/footer', 'Vue\PostController@index');
Route::resource('posts', 'Vue\PostController');
Route::get('carousel', 'Vue\PostController@carousel');
Route::resource('staff', 'Vue\StaffController');
Route::resource('volunteer', 'Vue\VolunteerController');
Route::resource('articles', 'Vue\ArticleController');
Route::resource('events', 'Vue\EventController');
Route::resource('info-boxes', 'Vue\InfoBoxController');
Route::any('search', 'Vue\SearchController@search');
Route::post('support/donate', 'Vue\DonationController@store');

/**
 * Email
 */

Route::post('mailchimp', 'Vue\MailChimpController@store');
Route::post('contact', 'Vue\EmailController@contact');
Route::post('volunteer/form', 'Vue\EmailController@volunteer');
Route::post('30th-anniversary', 'Vue\EmailController@thirtiethAnniversary');

/**
 * Cron
 */

Route::get('cron/news', 'Admin\CronController@news');