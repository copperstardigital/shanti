@extends('emails.templates.email')

@section('preheader', 'This is your renewal reminder for your Lambda Phoenix Center membership.')

@section('title', 'Renewal Reminder')

@section('email')

<p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">Dear {{ $name }},</p>

<p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">As a  member of Lambda Phoenix Center (“Lambda”), your support has been critical to helping fulfill its mission of providing an inviting, safe, and supportive community space for individuals and families in the metro Phoenix LGBTQ community who are recovering from alcoholism and other addictions.  Your generous financial contributions have helped keep the doors open through two decades and a difficult recession.  We are grateful for your past support of Lambda, and we hope you will consider renewing your membership.</p>

<h4 style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">Why Renew My Lambda Membership?</h4>
<ul style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">
<li>After 24 years, the need for Lambda is as great as ever; more than 2,200 people attend meetings at Lambda every month.</li>
<li>Lambda is a not-for-profit membership-based organization; yet, membership has declined to fewer than 40 members.  Without its members and their contributions, Lambda would be forced to close its doors.</li>
<li>Seventh tradition contributions are simply not enough to cover Lambda’s expenses.</li>
<li>Members receive a periodic newsletter, have the right to vote for the Board of Directors, and are eligible to serve on the Board of Directors.  In addition, as an expression of gratitude, all members receive a personalized Lambda Phoenix Center coffee mug and other incentives.</li>
<li>We need a growing membership to help us finish projects in and around Lambda, i.e. painting, new fixtures and completing the parking lot expansion project.</li>
</ul>

<p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">There are now 5 levels of membership to choose from. To become a member of Lambda, simply follow this link:<br/>
<a style="padding: 5px; display:block; background-color: #471A5A; color: #FFF; width: 100px; text-decoration: none; text-align: center;font-family: Arial, Helvetica, sans-serif; font-size: 12px;" href="http://www.lambdaphx.org/involved/join">Join Lambda</a></p>

<p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">Other donations are greatly appreciated.<br/> <a style="padding: 5px; display:block; background-color: #471A5A; color: #FFF; width: 70px; text-decoration: none; text-align: center;" href="http://www.lambdaphx.org/involved/join">Donate Now</a></p>

<p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">Thank you again for your support of Lambda Phoenix Center.  For more information regarding membership, please contact our membership director, Jon Brandau, at (480) 567-2519 or <a style="color: #471A5A;" href="http://www.lambdaphx.org/contact-us">email us</a>. Please “like” us on Facebook to receive periodic information regarding Lambda services and events.</p>

<p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">Sincerely,</p>

<p style="font-family: Arial, Helvetica, sans-serif; font-size: 12px;">Daria Springman<br />
Lambda Phoenix Center, President</p>

@stop