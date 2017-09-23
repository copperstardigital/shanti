@extends('layouts.maintenance')

@section('content')
    <div class="main-block">

    <!-- Page heading one starts -->

    <div class="page-heading-one">
        <h2>Down for Maintenance</h2>
        <p class="bg-color">Be Back Soon</p>
    </div>

    <!-- Page heading one ends -->

    <div class="container">

        <div class="about-us-three">
            <!-- About section hero -->
            <div class="about-hero">
                <div>
                   <p>We're sorry, but the website is currently down for maintenance. We are upgrading the website and will be returning it to normal service shortly. Thank you for your patience.</p>
                </div>
            </div>

            <hr />

        </div>
    </div>
    </div>
<div>
    <!-- Foot Starts -->
    <div class="foot">
        <!-- Container -->
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <!-- Foot Item -->
                    <div class="foot-item">
                        <!-- Heading -->
                        <h5 class="bold"><i class="fa fa-user"></i>&nbsp;&nbsp;About</h5>
                        <p>"Shanti" is a Sanskrit word meaning "Inner Peace" and is reflective of Phoenix Shanti Group's approach of promoting personal empowerment and maintaining independence and dignity.</p>

                        <hr />
                        <div class="brand-bg">
                            <!-- Social Media Icons -->
                            <p>
                                <a target="_blank" href="http://www.facebook.com/phoenixshantigroup" title="Phoenix Shanti Group" class="facebook"><i class="fa fa-facebook circle-3"></i>
                                    Phoenix Shanti Group Facebook</a>
                            </p>
                            <p>
                                <a target="_blank" href="http://www.facebook.com/shanti2ndchances" title="Shanti 2nd Chances" class="facebook"><i class="fa fa-facebook circle-3"></i>
                                    2nd Chances Store Facebook</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://twitter.com/PhoenixShanti" class="twitter"><i class="fa fa-twitter circle-3"></i>
                                    Phoenix Shanti Group Twitter</a>
                            </p>
                            <p>
                                <a target="_blank" href="https://www.youtube.com/user/PhoenixShantiGroup" class="youtube"><i class="fa fa-youtube circle-3"></i>
                                    Phoenix Shanti Group YouTube</a>

                            </p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <!-- Foot Item -->



                </div>
                <div class="col-md-3 col-sm-6">

                </div>
                <div class="col-md-3 col-sm-6">
                    <!-- Foot Item -->
                    <div class="foot-item">
                        <!-- Heading -->
                        <h5 class="bold"><i class="fa fa-building-o"></i>&nbsp;&nbsp;Contact Us</h5>
                        <!-- Foot Item Content -->
                        <div class="foot-item-content address">
                            <!-- Heading -->
                            <h6 class="bold"><i class="fa fa-home"></i>&nbsp;&nbsp;Phoenix Shanti Group</h6>
                            <!-- Paragraph -->
                            <p class="add">
                                2345 West Glendale Avenue,<br />
                                Phoenix, Arizona 85021
                            </p>
                            <p class="tel">
                                <i class="fa fa-phone"></i> Main Office : (602) 279-0008
                            </p>
                            <p class="tel">
                                <i class="fa fa-fax"></i> Secure Fax : (602) 279-2004
                            </p>
                            <p class="tel">
                                <i class="fa fa-envelope"></i>  Email : <a href="mailto:info@shantiaz.org">info@shantiaz.org</a></p>
                            <p class="tel">
                                <i class="fa fa-calendar"></i> Hours : 8 am - 4 pm
                            </p>
                            <p class="add">
                                Monday through Friday
                            </p>


                            <hr />

                            <h6 class="bold"><i class="fa fa-home"></i>&nbsp;2nd Chances Store</h6>
                            <p class="add">
                                4015 N 16th Street, Suites E-F,<br />
                                Phoenix AZ, 85016
                            </p>
                            <p class="tel">
                                <i class="fa fa-phone"></i> Store : (602) 283-0100
                            </p>
                            <p class="tel">
                                <i class="fa fa-fax"></i> Store Fax : (602) 283-0101
                            </p>

                            <p class="tel">
                                <i class="fa fa-calendar"></i> Store Hours : 9 am - 6 pm, Monday
                            </p>
                            <p class="add">
                                through Friday; 9 am - 5 pm, Saturday
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Foot Ends -->

    <!-- Footer Starts -->
    <footer>
        <!-- Container -->
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <p class="pull-left">Copyright &copy; {{ date('Y') }} - <router-link to="/" exact>Phoenix Shanti Group</router-link>
                    </p>
                </div>
                <div class="col-md-4">
                    <p class="text-center">Design, Development and Hosting by <a href="https://www.copperstardigital.com">Copper Star Digital</a></p>
                    <p class="text-center"><a target="_blank" href="https://www.copperstardigital.com"><img style="width:70%; margin:0 auto;" src="/img/csd-wht-30.png" alt="Copper Star Digital" /></a></p>
                </div>
                <div class="col-md-4">

                </div>
            </div>

            <!-- Footer Content -->
            <!-- Paragraph -->


            <!-- Clearfix -->
            <div class="clearfix"></div>
        </div>
    </footer>
    <!-- Footer Ends -->

</div></div>
</div>
@endsection