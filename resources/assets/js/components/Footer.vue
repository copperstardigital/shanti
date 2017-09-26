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
                            <h5 class="bold"><i class="fa fa-user"></i>&nbsp;&nbsp;{{ about }}</h5>
                            <p>{{ shantiText }}</p>

                            <psg-speak text="Shanti is a Sanskrit word meaning Inner Peace and is reflective of Phoenix Shanti Group's approach of promoting personal empowerment and maintaining independence and dignity."></psg-speak>
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
                                <h5 class="bold">{{ subscribeTo }}:</h5>
                                <!-- Form -->
                                <form role="form" method="POST">
                                    <!-- Input Group -->
                                    <div class="input-group">
                                        <input type="text" v-model="email" class="form-control" :placeholder="enterEmailAddress">
                                        <span class="input-group-btn">
                                        <button class="btn btn-color" type="button" @click.prevent="subscribe">{{ subscribeTo }}</button>
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
                            <h5 class="bold"><i class="fa fa-comments"></i>&nbsp;&nbsp;{{ recentPosts }}</h5>
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

                        <hr />

                        <!-- Foot Item -->
                        <div class="foot-item">
                            <!-- Heading -->
                            <h5 class="bold"><i class="fa fa-calendar"></i>&nbsp;{{ upcomingEvents }}</h5>
                            <!-- Foot Item Content -->
                            <div class="foot-item-content" v-if="events">
                                <ul class="list-unstyled">
                                    <!-- Link -->
                                    <router-link v-for="(event, index) in events" :to="{ name: 'event/view', params: { slug : event.slug }}" tag="li" key="index"><a>{{ event.event_name }}</a></router-link>
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
                            <h5 class="bold"><i class="fa fa-picture-o"></i>&nbsp;&nbsp;{{ recentImages }}</h5>
                            <!-- Foot Item Content -->
                            <div class="foot-item-content">
                                <lightbox
                                        id="shantiLightbox"
                                        :images="images"
                                        :image_class=" 'img-responsive img-rounded' "
                                        :album_class=" 'my-album-class' ">
                                </lightbox>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <!-- Foot Item -->
                        <div class="foot-item">
                            <!-- Heading -->
                            <h5 class="bold"><i class="fa fa-building-o"></i>&nbsp;&nbsp;{{ contactUs }}</h5>
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
                                    <i class="fa fa-phone"></i> {{ mainOffice}} : (602) 279-0008
                                </p>
                                <p class="tel">
                                    <i class="fa fa-fax"></i> {{ secureFax }} : (602) 279-2004
                                </p>
                                <p class="tel">
                                    <i class="fa fa-envelope"></i>  Email : <a href="mailto:info@shantiaz.org">info@shantiaz.org</a></p>
                                <p class="tel">
                                    <i class="fa fa-calendar"></i> {{ hours }} : 8 am - 4 pm
                                </p>
                                <p class="add">
                                    {{ mondayFriday }}
                                </p>

                                <psg-speak text="Phoenix Shanti Group 2345 West Glendale Avenue,Phoenix, Arizona 85021. Main Office : (602) 279-0008. Secure Fax : (602) 279-2004. Email : info@shantiaz.org. Hours : 8 am to 4 pm, Monday through Friday"></psg-speak>

                                <hr />

                                <h6 class="bold"><i class="fa fa-home"></i>&nbsp;2nd Chances Store</h6>
                                <p class="add">
                                    4015 North 16th Street, Suites E-F,<br />
                                    Phoenix, Arizona 85016
                                </p>
                                <p class="tel">
                                    <i class="fa fa-phone"></i> {{ store }} : (602) 283-0100
                                </p>
                                <p class="tel">
                                    <i class="fa fa-fax"></i> {{ storeFax }} : (602) 283-0101
                                </p>

                                <p class="tel">
                                    <i class="fa fa-calendar"></i> {{ hours }} : 9 am - 6 pm, {{ mondayFriday }}; 9 am - 5 pm, {{ saturday }}
                                </p>

                                <psg-speak text="Second Chances Store, 4015 N 16th Street, Suites E-F, Phoenix AZ, 85016. Store : (602) 283-0100. Store Fax : (602) 283-0101.  Store Hours : 9 am to 6 pm, Monday through Friday; 9 am to 5 pm, Saturday"></psg-speak>
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
                        <p class="pull-left">{{ copyright }} &copy; {{ currentYear }} - <router-link to="/" exact>Phoenix Shanti Group</router-link>
                        </p>
                    </div>
                    <div class="col-md-4">
                        <p class="text-center">{{ copperStar }} <a href="https://www.copperstardigital.com">Copper Star Digital</a></p>
                        <p class="text-center"><a target="_blank" href="https://www.copperstardigital.com"><img style="width:70%; margin:0 auto;" src="/img/csd-wht-30.png" alt="Copper Star Digital" /></a></p>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-inline pull-right">
                            <!-- List -->
                            <router-link to="/" exact>{{ home }}</router-link>
                            <router-link to="/about/mission">{{ mission }}</router-link>
                            <router-link to="/services/housing">{{ housing }}</router-link>
                            <router-link to="/services/hiv">{{ services }}</router-link>
                            <router-link to="/contact/office">{{ contact }}</router-link>
                            <router-link to="/site-map">{{ siteMap }}</router-link>
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
    import TextToSpeech from '../components/misc/TextToSpeech';
    import Lightbox from 'vue-simple-lightbox';

    export default {
        data() {
            return {
                posts: [],
                events: [],
                email: '',
                subscriptionResult: '',
                subscriptionSuccess: false,
                images : [
                    {
                        src : '/uploads/gallery/l4l2_1.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_2.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_3.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_4.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_5.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_7.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_8.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_9.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_10.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_11.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_12.jpg',
                        title : 'Laughs for Life II'
                    },
                    {
                        src : '/uploads/gallery/l4l2_13.jpg',
                        title : 'Laughs for Life II'
                    },
                ]
            }
        },
        methods: {
            getPosts() {
                http
                    .get('/posts/footer')
                    .then(response => {
                        this.posts = response.body.posts;
                    }).catch(error => {
                        console.error(error);
                    });
            },
            getEvents() {
                http
                    .get('/events')
                    .then(response => {
                        this.events = response.body.events;
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
            },
            about() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Acerca de';
                } else {
                    return 'About'
                }
            },
            shantiText() {
                if (this.$cookie.get('lang') === 'es') {
                    return '"Shanti" es una palabra sánscrita que significa "paz interna" y es un reflejo de enfoque de promover la capacitación personal y el mantenimiento de la independencia y la dignidad de Phoenix Shanti Grupos.';
                } else {
                    return '"Shanti" is a Sanskrit word meaning "Inner Peace" and is reflective of Phoenix Shanti Group\'s approach of promoting personal empowerment and maintaining independence and dignity.'
                }
            },
            home() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Casa';
                } else {
                    return 'Home';
                }
            },
            mission() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Misión';
                } else {
                    return 'Mission';
                }
            },
            housing() {
                if (this.$cookie.get('lang') === 'es') {
                    return '+ Vivienda VIH';
                } else {
                    return 'HIV+ Housing';
                }
            },
            services() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Servicios de VIH+';
                } else {
                    return 'HIV+ Services';
                }
            },
            contact() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Contacto';
                } else {
                    return 'Contact';
                }
            },
            siteMap() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Mapa de Sitio';
                } else {
                    return 'Site Map';
                }
            },
            copperStar() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Diseño, desarrollo y alojamiento por';
                } else {
                    return 'Design, development and hosting by';
                }
            },
            copyright() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Derechos de autor';
                } else {
                    return 'Copyright';
                }
            },
            recentPosts() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Mensajes recientes';
                } else {
                    return 'Recent Posts';
                }
            },
            upcomingEvents() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Próximos Eventos';
                } else {
                    return 'Upcoming Events';
                }
            },
            recentImages() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Imágenes recientes';
                } else {
                    return 'Recent Images';
                }
            },
            contactUs() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Contáctenos';
                } else {
                    return 'Contact Us';
                }
            },
            mainOffice() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Oficina principal';
                } else {
                    return 'Main Office';
                }
            },
            secureFax() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Fax seguro';
                } else {
                    return 'Secure Fax';
                }
            },
            hours() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Horas de trabajo';
                } else {
                    return 'Hours';
                }
            },
            store() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Tienda';
                } else {
                    return 'Store';
                }
            },
            storeFax() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Fax de la tienda';
                } else {
                    return 'Store Fax';
                }
            },
            mondayFriday() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'de lunes a viernes';
                } else {
                    return 'Monday through Friday';
                }
            },
            saturday() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'sábado';
                } else {
                    return 'Saturday';
                }
            },
            enterEmailAddress() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Dirección de correo electrónico';
                } else {
                    return 'Enter email address';
                }
            },
            subscribeTo() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Suscribir';
                } else {
                    return 'Subscribe';
                }
            }
        },
        beforeMount() {
            this.getPosts();
            this.getEvents();
        },
        components: {
            'psg-speak': TextToSpeech,
            Lightbox
        }
    }
</script>