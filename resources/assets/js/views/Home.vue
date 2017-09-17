<template>
    <div class="main-block">
        <div class="container">
            <carousel :autoplay="true" :perPage="1" :navigationEnabled="true">
                <slide>

                </slide>
            </carousel>

            <br />
            <div class="text-center">
                <h3><span class="color">Phoenix Shanti Group</span>. Most Amazing HIV Agency in the Valley. <span class="color">Literally</span>.</h3>
                <p>Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society.</p>
            </div>

            <div class="divider-1"></div>


            <!-- Icon Box #8 Starts -->

            <psg-info-boxes></psg-info-boxes>

            <!-- Icon Box #8 Ends -->

            <div class="divider-1"></div>

            <div class="block-heading-two text-center">
                <h3><span>Our Agency</span></h3>
            </div>

            <br />

            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <h4>Our Expertise</h4>
                    <p>Since the onset of the HIV/AIDS pandemic, Phoenix Shanti Group has been providing a lifeline to men and women in the Valley of the Sun, providing services from hospice to housing over its decades of existence.</p>
                    <ul class="list-2">
                        <li>Denounce 1with rhoncus  rhoncus indignation</li>
                        <li>Dislike rhoncus so rhoncus et  rhoncus demoralized</li>
                        <li>The charms rhoncus et rhoncus of the moment</li>
                        <li>That rhoncus cannot rhoncus rhoncus pain trouble</li>
                    </ul>
                    <br />
                </div>

                <div class="col-md-4 col-sm-6">

                    <!-- Carousel -->

                    <!-- Bootstrap carousel usage
                        Bootstrap carousel should have id. Below i am using "bs-carousel-X". Where "X" denotes number". If a page has more than 1 carousel, then add the new carousel with the id "bs-carousel-1", "bs-carousel-2". You also need to update the id in, "carousel indicators" section and "carousel control" section.

                        Carousel comes with 3 main data attributes which you can customize. They are...
                        data-interval - Time delay between item cycle. Default value "5000".
                        data-pause - Pause on hover. Default value "pause".
                        data-wrap - Continues cycle or stop at the end. Default value "true".
                    -->

                    <!-- Outer layer -->
                    <div id="bs-carousel-1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover" data-wrap="true">
                        <!-- Bootstrap indicators. If you don't need indicators, remove the below section -->
                        <ol class="carousel-indicators">
                            <li data-target="#bs-carousel-1" data-slide-to="0" class="active"></li>
                            <li data-target="#bs-carousel-1" data-slide-to="1"></li>
                            <li data-target="#bs-carousel-1" data-slide-to="2"></li>
                        </ol>
                        <!-- Slides. You can also add captions -->
                        <div class="carousel-inner">
                            <!-- Item, First item should have extra class "active" -->
                            <div class="item active">
                                <!-- Image -->
                                <img src="img/aboutus/about-office-1.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="img/aboutus/about-office-2.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="img/aboutus/about-office-3.jpg" alt="">
                            </div>
                        </div>
                        <!-- Carousel controls (arrows). If you don't need controls, remove the below section -->
                        <a class="left carousel-control" href="#bs-carousel-1" role="button" data-slide="prev">
                            <span class="fa fa-chevron-left"></span>
                        </a>
                        <a class="right carousel-control" href="#bs-carousel-1" role="button" data-slide="next">
                            <span class="fa fa-chevron-right"></span>
                        </a>
                    </div>

                </div>

                <div class="col-md-4 col-sm-6">
                    <h4>Our Expertise</h4>
                    <p>Lorem ipsum dolor consectetursit amet, consectetur adipiscing elit consectetur euismod ed  euismod  adipiscing elit sapien. Donec eu feugiat enim,  tempus arcu. </p>
                    <h6>Web Designing</h6>
                    <div class="progress pb-sm">
                        <!-- White color (progress-bar-white) -->
                        <div class="progress-bar progress-bar-red" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                            <span class="sr-only">40% Complete (success)</span>
                        </div>
                    </div>
                    <h6>Doing Party</h6>
                    <div class="progress pb-sm">
                        <div class="progress-bar progress-bar-green" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                            <span class="sr-only">40% Complete (success)</span>
                        </div>
                    </div>
                    <h6>Money Making</h6>
                    <div class="progress pb-sm">
                        <div class="progress-bar progress-bar-lblue" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                            <span class="sr-only">40% Complete (success)</span>
                        </div>
                    </div>
                </div>

            </div>

            <hr />

            <!-- Counter #1 starts -->
            <div class="counter-one text-center">
                <div class="counter-content">
                    <div class="row">
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <div class="counter-item">
                                <!-- Icon -->
                                <i class="fa fa-paper-plane red"></i>
                                <!-- Number -->
                                <span class="number-count" data-from="0" data-to="290" data-speed="2000" data-refresh-interval="100"></span>
                                <!-- Border -->
                                <hr class="br-red" />
                                <!-- Heading -->
                                <h5>Equine Dolores</h5>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <div class="counter-item">
                                <i class="fa fa-trophy green"></i>
                                <span class="number-count" data-from="0" data-to="150" data-speed="2000" data-refresh-interval="100"></span>
                                <hr class="br-green" />
                                <h5>Equine Dolores</h5>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <div class="counter-item">
                                <i class="fa fa-taxi lblue"></i>
                                <span class="number-count" data-from="0" data-to="300" data-speed="2000" data-refresh-interval="100"></span>
                                <hr class="br-lblue" />
                                <h5>Equine Dolores</h5>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <div class="counter-item">
                                <i class="fa fa-database yellow"></i>
                                <span class="number-count" data-from="0" data-to="250" data-speed="2000" data-refresh-interval="100"></span>
                                <hr class="br-yellow" />
                                <h5>Equine Dolores</h5>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <div class="counter-item">
                                <i class="fa fa-cube purple"></i>
                                <span class="number-count" data-from="0" data-to="120" data-speed="2000" data-refresh-interval="100"></span>
                                <hr class="br-purple" />
                                <h5>Equine Dolores</h5>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <div class="counter-item">
                                <i class="fa fa-fax brown"></i>
                                <span class="number-count" data-from="0" data-to="350" data-speed="2000" data-refresh-interval="100"></span>
                                <hr class="br-brown" />
                                <h5>Equine Dolores</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Counter #1 ends -->

        </div>


        <div class="container">

            <br />

            <!--<div class="block-heading-two text-center">-->
                <!--<h3><span>Our Team</span></h3>-->
            <!--</div>-->

            <!--&lt;!&ndash; Team #6 &ndash;&gt;-->
            <!--<div class="team-six">-->
                <!--<div class="row">-->
                    <!--<div class="col-md-3 col-sm-6">-->
                        <!--&lt;!&ndash; Team Member &ndash;&gt;-->
                        <!--<div class="team-member">-->
                            <!--&lt;!&ndash; Image &ndash;&gt;-->
                            <!--<img class="img-responsive" src="img/user/1.jpg" alt="" />-->
                            <!--&lt;!&ndash; Name &ndash;&gt;-->
                            <!--<h4>Jennifer Doe</h4>-->
                            <!--<span class="deg">Creative</span>-->
                            <!--&lt;!&ndash; Team Links &ndash;&gt;-->
                            <!--<div class="team-links">-->
                                <!--<a href="#"><i class="fa fa-comment"></i></a>-->
                                <!--<a href="#"><i class="fa fa-envelope"></i></a>-->
                                <!--<a href="#"><i class="fa fa-phone"></i></a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="col-md-3 col-sm-6">-->
                        <!--&lt;!&ndash; Team Member &ndash;&gt;-->
                        <!--<div class="team-member">-->
                            <!--&lt;!&ndash; Image &ndash;&gt;-->
                            <!--<img class="img-responsive" src="img/user/2.jpg" alt="" />-->
                            <!--&lt;!&ndash; Name &ndash;&gt;-->
                            <!--<h4>Jennifer Doe</h4>-->
                            <!--<span class="deg">Programmer</span>-->
                            <!--&lt;!&ndash; Team Links &ndash;&gt;-->
                            <!--<div class="team-links">-->
                                <!--<a href="#"><i class="fa fa-comment"></i></a>-->
                                <!--<a href="#"><i class="fa fa-envelope"></i></a>-->
                                <!--<a href="#"><i class="fa fa-phone"></i></a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="col-md-3 col-sm-6">-->
                        <!--&lt;!&ndash; Team Member &ndash;&gt;-->
                        <!--<div class="team-member">-->
                            <!--&lt;!&ndash; Image &ndash;&gt;-->
                            <!--<img class="img-responsive" src="img/user/3.jpg" alt="" />-->
                            <!--&lt;!&ndash; Name &ndash;&gt;-->
                            <!--<h4>Jennifer Doe</h4>-->
                            <!--<span class="deg">CEO</span>-->
                            <!--&lt;!&ndash; Team Links &ndash;&gt;-->
                            <!--<div class="team-links">-->
                                <!--<a href="#"><i class="fa fa-comment"></i></a>-->
                                <!--<a href="#"><i class="fa fa-envelope"></i></a>-->
                                <!--<a href="#"><i class="fa fa-phone"></i></a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="col-md-3 col-sm-6">-->
                        <!--&lt;!&ndash; Team Member &ndash;&gt;-->
                        <!--<div class="team-member">-->
                            <!--&lt;!&ndash; Image &ndash;&gt;-->
                            <!--<img class="img-responsive" src="img/user/4.jpg" alt="" />-->
                            <!--&lt;!&ndash; Name &ndash;&gt;-->
                            <!--<h4>Jennifer Doe</h4>-->
                            <!--<span class="deg">Manager</span>-->
                            <!--&lt;!&ndash; Team Links &ndash;&gt;-->
                            <!--<div class="team-links">-->
                                <!--<a href="#"><i class="fa fa-comment"></i></a>-->
                                <!--<a href="#"><i class="fa fa-envelope"></i></a>-->
                                <!--<a href="#"><i class="fa fa-phone"></i></a>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!-- Team #6 end -->

            <div class="divider-1"></div>

            <div class="block-heading-six">
                <h4 class="bg-color">Our Supporters</h4>
            </div>

            <div class="client-three">
                <carousel :autoplay="true" :perPage="1" :navigationEnabled="true">
                    <slide>
                        <div class="row">
                            <div class="col-md-3">
                                <a href="" target="_blank">
                                    <img src="/img/sponsors/aunt_ritas.png" alt="Aunt Rita's Foundation" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="" target="_blank">
                                    <img src="/img/sponsors/united_way.jpeg" alt="Valley of the Sun United Way" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="" target="_blank">
                                    <img src="/img/sponsors/hivaz.png" alt="HIV AZ" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="" target="_blank">
                                    <img src="/img/sponsors/elizabeth_taylor.png" alt="Elizabeth Taylor AIDS Foundation" />
                                </a>
                            </div>
                        </div>
                    </slide>
                    <slide>

                    </slide>
                    <slide>

                    </slide>
                    <slide>

                    </slide>
                </carousel>
            </div>


        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import InfoBoxes from '../components/home/InfoBoxes';

    export default {
        components: {
            Carousel,
            Slide,
            'psg-info-boxes' : InfoBoxes
        }
    };
</script>