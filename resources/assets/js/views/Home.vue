<template>
    <div class="main-block">
        <div class="container">
            <div class="text-center">
                <h3><span class="color">Phoenix Shanti Group</span>. Most Amazing HIV Agency in the Valley. <span class="color">Literally</span>.</h3>
                <p>Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society.</p>
            </div>

            <div class="divider-1"></div>
            <div class="text-center">
                <i v-show="loading" class="fa fa-refresh fa-spin fa-5x"></i>
            </div>
            <carousel :loop="true" :autoplay="true" :autoplayTimeout="7000" :perPage="1" :navigationEnabled="true">
                <slide v-for="(event, index) in events" key="index">
                    <div v-if="event.image">
                        <div class="row">
                            <div class="col-md-5">
                                <div v-if="event.link">
                                    <a :href="event.link" target="_blank">
                                        <img :src="'/uploads/' + event.image" class="img-responsive" :alt="event.headline" />
                                    </a>
                                </div>
                                <div v-if="event.image">
                                    <img :src="'/uploads/' + event.image" class="img-responsive" :alt="event.headline" />
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h1>{{ event.headline }}</h1>

                                <hr />

                                <div v-html="event.hero_text"></div>

                                <br />

                                <router-link :to="{ name: 'blog/view', params: { slug : event.slug }}" class="btn btn-color pull-right">Read More...</router-link>
                            </div>
                        </div>
                    </div>
                    <div v-if="!event.image">
                        <h1>{{ event.headline }}</h1>

                        <hr />

                        <div v-html="event.hero_text"></div>

                        <br />

                        <router-link :to="{ name: 'blog/view', params: { slug : event.slug }}" class="btn btn-color pull-right">Read More...</router-link>
                    </div>

                </slide>
            </carousel>

            <br />

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
                    <h4>Our Fundraising</h4>
                    <p>Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year.</p>

                    <h6>General Funds</h6>
                    <psg-progress-bar
                        bar="progress-bar progress-bar-red"
                        now="30"
                        goal="1000"
                    ></psg-progress-bar>

                    <h6>AIDS Walk Arizona</h6>
                    <psg-progress-bar
                        bar="progress-bar progress-bar-green"
                        now="500"
                        goal="1500"
                    ></psg-progress-bar>

                    <h6>Event Dollars Raised</h6>
                    <psg-progress-bar
                        bar="progress-bar progress-bar-lblue"
                        now="50"
                        goal="1000"
                    ></psg-progress-bar>
                </div>

            </div>

            <hr />

            <!-- Counter #1 starts -->
            <div class="counter-one text-center">
                <div class="counter-content">
                    <div class="row">
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <psg-counter
                                    icon="fa fa-home red"
                                    rule="br-red"
                                    text="Housed"
                                    max="10"
                                    interval="500"
                            ></psg-counter>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <psg-counter
                                    icon="fa fa-briefcase green"
                                    rule="br-green"
                                    text="Voc Rehab"
                                    max="10"
                                    interval="500"
                            ></psg-counter>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <psg-counter
                                    icon="fa fa-ambulance lblue"
                                    rule="br-lblue"
                                    text="Outpatients"
                                    max="10"
                                    interval="500"
                            ></psg-counter>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <psg-counter
                                    icon="fa fa-heart yellow"
                                    rule="br-yellow"
                                    text="Counseled"
                                    max="10"
                                    interval="500"
                            ></psg-counter>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <psg-counter
                                    icon="fa fa-book purple"
                                    rule="br-purple"
                                    text="Educated"
                                    max="10"
                                    interval="500"
                            ></psg-counter>
                        </div>
                        <div class="col-md-2 col-sm-4 col-xs-6">
                            <!-- Counter content item -->
                            <psg-counter
                                    icon="fa fa-clock-o brown"
                                    rule="br-brown"
                                    text="Volunteer Hours"
                                    max="10"
                                    interval="500"
                            ></psg-counter>
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
                <carousel :loop="true" :autoplay="true" :autoplayTimeout="7000" :perPage="1" :navigationEnabled="true">
                    <slide>
                        <div class="row frame">
                            <div class="col-md-3">
                                <a href="http://www.auntritas.org/" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/aunt_ritas.png" alt="Aunt Rita's Foundation" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="https://vsuw.org" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/united_way.jpeg" alt="Valley of the Sun United Way" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="https://elizabethtayloraidsfoundation.org/" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/elizabeth_taylor.png" alt="Elizabeth Taylor AIDS Foundation" />
                                </a>
                            </div>
                            <div class="col-md-3">
                              <a href="https://broadwaycares.org/" target="_blank">
                                  <img class="img-responsive" src="/uploads/sponsors/broadway_cares.jpeg" alt="Broadway Cares" />
                                </a>
                            </div>

                        </div>
                    </slide>
                    <slide>
                        <div class="row frame">
                            <div class="col-md-3">
                                <a href="http://www.macys.com" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/macys.jpeg" alt="Macy's" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="https://www.aidshealth.org/#/" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/AHF.png" alt="AIDS Healthcare Foundation" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.topazsystems.com/index.html" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/topaz.png" alt="Topaz Systems" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://triyoung.com/" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/triyoung.png" alt="TriYoung Business Solutions" />
                                </a>
                            </div>
                        </div>
                    </slide>
                    <slide>
                        <div class="row frame">
                            <div class="col-md-3">
                                <a href="https://www.copperstardigital.com" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/copper_star.png" alt="Copper Star Digital" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.la-z-boy.com/" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/lazboy.png" alt="La-Z-Boy" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.buffaloexchange.com" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/buffalo_exchange.jpeg" alt="Buffalo Exchange" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.trashcity.com/" target="_blank">
                                    <img class="img-responsive" src="/uploads/sponsors/trash_city.jpg" alt="Trash City Beads" />
                                </a>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>


        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import InfoBoxes from '../components/home/InfoBoxes';
    import Counter from '../components/home/Counter';
    import ProgressBar from '../components/home/ProgressBar';

    export default {
        data() {
            return {
                events: []
            }
        },
        methods: {
//            getCarousel() {
//                http
//                    .get('/carousel')
//                    .use(saCache)
//                    .then(response => {
//                        this.events = response.body.events;
//                    }).catch(error => {
//                        console.error(error);
//                    });
//            }
        },
        components: {
            Carousel,
            Slide,
            'psg-info-boxes' : InfoBoxes,
            'psg-counter' : Counter,
            'psg-progress-bar' : ProgressBar
        },
        created() {
            this.loading = true;

            http
                .get('/carousel')
                //.use(saCache)
                .then(response => {
                    this.events = response.body.events;
                    this.loading = false;
                }).catch(error => {
                console.error(error);
            });
        }
    };
</script>