<template>
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
                            <p>"Shanti" is a Sanskrit word meaning "Inner Peace" and is reflective of Phoenix Shanti Group's approach of promoting personal empowerment and maintaining independence and dignity</p>
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
                            <div class="subscribe-box">
                                <h5 class="bold">Subscribe :</h5>
                                <!-- Form -->
                                <form role="form" method="POST">
                                    <!-- Input Group -->
                                    <div class="input-group">
                                        <input type="text" v-model="email" class="form-control" placeholder="Enter Email Address">
                                        <span class="input-group-btn">
                                        <button class="btn btn-color" type="button" @click.prevent="subscribe">Subscribe</button>
                                    </span>
                                    </div>

                                    <br />

                                    <div class="alert alert-success" v-if="subscriptionSuccess">
                                        {{ subscriptionResult }}
                                    </div>

                                    <div class="alert alert-danger" v-if="!subscriptionSuccess && subscriptionResult">
                                        {{ subscriptionResult }}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <!-- Foot Item -->
                        <div class="foot-item">
                            <!-- Heading -->
                            <h5 class="bold"><i class="fa fa-comments"></i>&nbsp;&nbsp;Recent Posts</h5>
                            <!-- Foot Item Content -->
                            <div class="foot-item-content" v-if="posts">
                                <ul class="list-unstyled">
                                    <!-- Link -->
                                    <router-link v-for="(post, index) in posts" :to="{ name: 'blog/view', params: { slug : post.slug }}" tag="li" key="index"><a>{{ post.headline}}</a></router-link>
                                </ul>
                            </div>
                            <div v-if="!posts">
                                <p>There are no current posts.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <!-- Foot Item -->
                        <div class="foot-item">
                            <!-- Heading -->
                            <h5 class="bold"><i class="fa fa-picture-o"></i>&nbsp;&nbsp;Recent Images</h5>
                            <!-- Foot Item Content -->
                            <div class="foot-item-content">
                                <!-- Foot Recent Image -->
                                <div class="foot-recent-img">
                                    <a href="img/gallery/small/1.jpg" class="lightbox"><img src="img/gallery/small/1.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                    <a href="img/gallery/small/2.jpg" class="lightbox"><img src="img/gallery/small/2.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                    <a href="img/gallery/small/3.jpg" class="lightbox"><img src="img/gallery/small/3.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                </div>
                                <!-- Foot Recent Image -->
                                <div class="foot-recent-img">
                                    <a href="img/gallery/small/1.jpg" class="lightbox"><img src="img/gallery/small/1.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                    <a href="img/gallery/small/2.jpg" class="lightbox"><img src="img/gallery/small/2.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                    <a href="img/gallery/small/3.jpg" class="lightbox"><img src="img/gallery/small/3.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                </div>
                                <div class="foot-recent-img">
                                    <a href="img/gallery/small/1.jpg" class="lightbox"><img src="img/gallery/small/1.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                    <a href="img/gallery/small/2.jpg" class="lightbox"><img src="img/gallery/small/2.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                    <a href="img/gallery/small/3.jpg" class="lightbox"><img src="img/gallery/small/3.jpg" alt="" class="img-responsive img-thumbnail" /></a>
                                </div>
                            </div>
                        </div>
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
                                    4015 N 16th Street Suite E-F,<br />
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
                        <p class="pull-left">Copyright &copy; {{ currentYear }} - <router-link to="/" exact>Phoenix Shanti Group</router-link>
                        </p>
                    </div>
                    <div class="col-md-4">
                        <p class="text-center">Design and Development by <a href="https://www.copperstardigital.com">Copper Star Digital</a></p>
                        <p class="text-center"><a target="_blank" href="https://www.copperstardigital.com"><img style="width:70%; margin:0 auto;" src="/uploads/sponsors/copper_star.png" alt="Copper Star Digital" /></a></p>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-inline pull-right">
                            <!-- List -->
                            <router-link to="/" exact>Home</router-link>
                            <router-link to="/about/mission">Mission</router-link>
                            <router-link to="/services/housing">Housing</router-link>
                            <router-link to="/services/hiv">HIV Services</router-link>
                            <router-link to="/contact/office">Contact</router-link>
                            <router-link to="/site-map">Site Map</router-link>
                        </ul>
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
</template>

<script>
    export default {
        data() {
            return {
                posts: [],
                email: '',
                subscriptionResult: '',
                subscriptionSuccess: false
            }
        },
        methods: {
            getPosts() {
                http
                    .get('/posts/footer')
                    .use(saCache)
                    .then(response => {
                        this.posts = response.body.posts;
                    }).catch(error => {
                        console.error(error);
                    });
            },
            subscribe() {
                axios.post('/mailchimp', { email : this.email })
                    .then(response => {
                         this.subscriptionResult = response.data.message;
                         this.subscriptionSuccess = response.data.success;
                    })
                    .catch(error =>{
                        this.subscriptionResult = error.data.message;
                        this.subscriptionSuccess = false;
                    });
            }
        },
        computed: {
            currentYear() {
                return new Date().getFullYear();
            }
        },
        beforeMount() {
            this.getPosts();
        }
    }
</script>