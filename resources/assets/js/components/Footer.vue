<template>
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
                        <div class="brand-bg">
                            <!-- Social Media Icons -->
                            <a target="_blank" href="http://www.facebook.com/phoenixshantigroup" title="Phoenix Shanti Group" class="facebook"><i class="fa fa-facebook circle-3"></i></a>
                            <a target="_blank" href="http://www.facebook.com/shanti2ndchances" title="Shanti 2nd Chances" class="facebook"><i class="fa fa-facebook circle-3"></i></a>
                            <a target="_blank" href="https://twitter.com/PhoenixShanti" class="twitter"><i class="fa fa-twitter circle-3"></i></a>
                            <a target="_blank" href="https://www.youtube.com/user/PhoenixShantiGroup" class="youtube"><i class="fa fa-youtube circle-3"></i></a>
                        </div>
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
                                Phoenix, Arizona 85021</p>
                            <p class="tel">
                                <i class="fa fa-phone"></i> Main Office : (602) 279-0008<br />
                                <i class="fa fa-fax"></i> Secure Fax : (602) 279-2004<br />
                                <i class="fa fa-phone"></i> Store : (602) 283-0100<br />
                                <i class="fa fa-fax"></i> Store Fax : (602) 283-0101<br />
                                <i class="fa fa-envelope"></i>  Email : <a href="mailto:info@shantiaz.org">info@shantiaz.org</a><br />
                                <i class="fa fa-calendar"></i> Business Hours : 8:00 am - 4:00 pm

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        beforeMount() {
            this.getPosts();
        }
    }
</script>