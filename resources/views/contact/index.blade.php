@extends('layouts.master')

@section('page_title', 'Contact Office')

@section('content')

    <div class="main-block">

        <!-- Page heading one starts -->

        <div class="page-heading-one">
            <h2>Contact</h2>
            <p class="bg-color">Main Office</p>
        </div>

        <!-- Page heading one ends -->

        <div class="container">

           <div class="row">
               <div class="col-sm-6">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13302.326600321518!2d-112.11022!3d33.538261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd063606639b3257!2sShanti+Group+Inc!5e0!3m2!1sen!2sus!4v1500435531942" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
               </div>
               <div class="col-sm-6">
                   <div class="about-us-three">
                       <!-- About section hero -->
                       <div class="about-hero">
                           In this area, you can contact us to inquire about any of the programs or services that we provide. Your information will be kept strictly confidential.

                           You can also use this page to write a testimonial about your experience at Shanti, request a FREE furniture or household goods donation pickup, or sign up for our eNewsletter for special announcements.
                       </div>

                       <div class="divider-2"></div>

                       <form action="/contact" method="POST">
                           <div class="form-group">
                               <label for="name">Name:</label>
                               <input class="form-control" type="text" name="text" id="name" value="{{ old('name') }}" />
                               <p class="help-block">Required</p>
                               @if ($errors->has('name'))
                                   <p class="error">{{ $errors->first('name') }}</p>
                               @endif
                           </div>

                           <div class="form-group">
                               <label for="email">Email:</label>
                               <input class="form-control" type="email" name="email" id="email" value="{{ old('email') }}" />

                               <p class="help-block">Required</p>
                               @if ($errors->has('email'))
                                   <p class="error">{{ $errors->first('email') }}</p>
                               @endif
                           </div>

                           <div class="form-group">
                               <label for="subject">Subject:</label>
                               <input class="form-control" type="text" name="subject" id="subject" value="{{ old('subject') }}" />
                               <p class="help-block">Required</p>
                               @if ($errors->has('subject'))
                                   <p class="error">{{ $errors->first('subject') }}</p>
                               @endif
                           </div>

                           <div class="form-group">
                               <label for="message">Message:</label>
                               <textarea class="form-control" id="message" name="message" rows="10">{{ old('message')}} </textarea>
                               <p class="help-block">Required</p>
                               @if ($errors->has('message'))
                                   <p class="error">{{ $errors->first('message') }}</p>
                               @endif
                           </div>

                           <button type="submit" class="btn btn-color pull-right">Send Message</button>
                       </form>

                   </div>
               </div>
           </div>
        </div>
    </div>


@endsection