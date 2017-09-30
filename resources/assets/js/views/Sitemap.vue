<template>
    <psg-page :article="article">
        <div slot="copy">
            <div class="row">
                <div class="col-sm-4 col-sm-offset-2">
                    <h3>Home</h3>
                    <p><router-link to="/" exact>{{ home }}</router-link></p>

                    <hr />

                    <h3>{{ about }}</h3>
                    <p><router-link to="/about/mission">{{ mission }}</router-link></p>
                    <p><router-link to="/about/getting-started">{{ gettingStarted}}</router-link></p>
                    <p><router-link to="/about/history">{{ history }}</router-link></p>
                    <p><router-link to="/about/cultural-competency">{{ culturalCompetency }}</router-link></p>
                    <p><router-link to="/about/privacy-policy">{{ privacyPolicy }}</router-link></p>

                    <hr />

                    <h3>{{ services }}</h3>
                    <p><router-link to="/services/housing">{{ housing }}</router-link></p>
                    <p><router-link to="/services/hiv">{{ hivServices }}</router-link></p>

                    <hr />

                    <h3>{{ support }}</h3>
                    <p><router-link to="/support/donate">{{ donate }}</router-link></p>
                    <p><router-link to="/support/volunteer">{{ volunteer }}</router-link></p>
                    <p><router-link to="/support/resources">{{ resources }}</router-link></p>
                    <p><router-link to="/support/contribute">{{ contribute }}</router-link></p>
                </div>
                <div class="col-sm-4">
                    <h3>Blog</h3>
                    <p><router-link to="/blog">Blog</router-link></p>
                    <div v-for="(post, index) in posts" key="index">
                        <p><router-link :to="{ name: 'blog/view', params: { slug : post.slug }}">{{ post.headline }}</router-link></p>
                    </div>

                    <hr />

                    <h3>{{ eventsHeader }}</h3>
                    <p><router-link to="/events">{{ eventsHeader }}</router-link></p>
                    <div v-for="(event, index) in events" key="index">
                        <p><router-link :to="{ name: 'event/view', params: { slug : event.slug }}">{{ event.event_name }}</router-link></p>
                    </div>

                    <hr />

                    <h3>{{ store }}</h3>
                    <p><a href="https://store.shantiaz.org" target="_blank">{{ secondChances }}</a></p>

                    <hr />

                    <h3>{{ contact }}</h3>
                    <p><router-link to="/contact/office">{{ mainOffice }}</router-link></p>
                    <p><router-link to="/contact/staff">{{ staff }}</router-link></p>
                    <p><router-link to="/contact/board">{{ board }}</router-link></p>
                </div>
            </div>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    headline: 'Site Map',
                    subhead: 'Available Pages',
                    callout: 'Below is a list of available pages. Please refer to one of them to find your resource. You may also use the search function at the top of the page, if your resource is not listed.'
                },
                posts: [],
                events: []
            }
        },
        methods: {
            getEvents() {
                http
                    .get('/events')
                    .then(response => {
                        let events = response.body.events;

                        let reformatted = [];

                        if (this.$cookie.get('language') === 'es') {
                            events.forEach(event => {
                                reformatted.push({
                                    event_name: event.es_event_name,
                                    slug: event.slug
                                });
                            });
                        } else {
                            events.forEach(event => {
                                reformatted.push({
                                    event_name: event.en_event_name,
                                    slug: event.slug
                                });
                            });
                        }

                        this.events = reformatted;
                    }).catch(error => {
                    console.error(error);
                });
            },
            getPosts() {
                http
                    .get('/posts')
                    .then(response => {
                        let posts = response.body.posts;

                        let reformatted = [];

                        if (this.$cookie.get('language') === 'es') {
                            posts.forEach(post => {
                                reformatted.push({
                                    headline: post.es_headline,
                                    slug: post.slug
                                });
                            });
                        } else {
                            posts.forEach(post => {
                                reformatted.push({
                                    headline: post.en_headline,
                                    slug: post.slug
                                });
                            });
                        }

                        this.posts = reformatted;
                    }).catch(error => {
                    console.error(error);
                });
            },
        },
        mounted() {
            this.getPosts();
            this.getEvents();
        },
        computed: {
            home() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Casa';
                } else {
                    return 'Home';
                }
            },
            about() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Acerca de';
                } else {
                    return 'About';
                }
            },
            mission() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Misión';
                } else {
                    return 'Mission';
                }
            },
            gettingStarted() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Empezando';
                } else {
                    return 'Getting Started';
                }
            },
            history() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Historia';
                } else {
                    return 'History';
                }
            },
            culturalCompetency() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Competencia cultural';
                } else {
                    return 'Cultural Competency';
                }
            },
            privacyPolicy() {
                if (this.$cookie.get('language') === 'es') {
                    return '';
                } else {
                    return 'Privacy Policy';
                }
            },
            services() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Política de privacidad\n';
                } else {
                    return 'Services';
                }
            },
            housing() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Alojamiento';
                } else {
                    return 'Housing';
                }
            },
            hivServices() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Servicios de VIH';
                } else {
                    return 'HIV Services';
                }
            },
            support() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Apoyo';
                } else {
                    return 'Support';
                }
            },
            donate() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donar';
                } else {
                    return 'Donate';
                }
            },
            volunteer() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Ofrecerse';
                } else {
                    return 'Volunteer';
                }
            },
            resources() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Recursos';
                } else {
                    return 'Resources';
                }
            },
            contribute() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Contribuir';
                } else {
                    return 'Contribute';
                }
            },
            eventsHeader() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Eventos';
                } else {
                    return 'Events';
                }
            },
            gallery() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Galería';
                } else {
                    return 'Gallery';
                }
            },
            store() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Tienda';
                } else {
                    return 'Store';
                }
            },
            secondChances() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Tienda de 2nd Chances';
                } else {
                    return '2nd Chances Store';
                }
            },
            contact() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Contacto';
                } else {
                    return 'Contact';
                }
            },
            mainOffice() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Oficina principal';
                } else {
                    return 'Main Office';
                }
            },
            staff() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Personal';
                } else {
                    return 'Staff';
                }
            },
            board() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Junta directiva';
                } else {
                    return 'Board';
                }
            },
        }
    }
</script>