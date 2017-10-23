<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-md-6">
                    <h1 v-if="!loading">{{ pages }}</h1>

                    <div v-if="articles">
                        <div v-for="(article, index) in articles" key="index">
                            <h3>{{ article.headline }}</h3>
                            <h5>{{ article.subhead }}</h5>
                            <div v-html="article.callout"></div>

                            <router-link :to="article.link" class="btn btn-color pull-right">{{ readMore }}</router-link>
                            <br style="clear:both;" />

                            <hr />
                        </div>
                    </div>
                    <div v-if="!articles.length && !loading">
                        <p>{{ pagesResult}}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <h1 v-if="!loading">Blog</h1>

                    <div v-if="posts">
                        <div v-for="(post, index) in posts" key="index">
                            <h3>{{ post.headline }}</h3>
                            <div v-html="post.hero_text"></div>

                            <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">{{ readMore }}</router-link>

                            <br style="clear:both;" />

                            <hr />
                        </div>
                    </div>
                    <div v-if="!posts.length && !loading">
                        <p>{{ blogResult }}</p>
                    </div>

                    <hr v-if="!loading"/>

                    <h1 v-if="!loading">{{ eventsHeader }}</h1>

                    <div v-if="events">
                        <div v-for="(event, index) in events" key="index">
                            <h3>{{ event.event_name }}</h3>
                            <div v-html="event.event_callout"></div>

                            <router-link :to="'/events/' + event.slug" class="btn btn-color pull-right">{{ readMore }}</router-link>

                            <br style="clear:both;" />

                            <hr />
                        </div>
                    </div>
                    <div v-if="!posts.length && !loading">
                        <p>{{ eventResult }}</p>
                    </div>
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
                    headline: (this.$cookie.get('language') === 'es') ? 'Resultados de la búsqueda' :'Search Results',
                    subhead: (this.$cookie.get('language') === 'es') ? 'Palabras claves: ' + this.$route.query.keywords : 'Keywords: "' + this.$route.query.keywords + '"',
                    callout:  (this.$cookie.get('language') === 'es') ? 'A continuación se muestran los resultados de su búsqueda. Si su información esperada no aparece a continuación, por favor, consulte nuestro <a href="/#/site-map"> mapa del sitio </a>.' : 'Below are the results of your search. If your expected information did not appear below, please try consulting our <a href="/#/site-map">site map</a>.',
                    body: ''
                },
                articles: [],
                posts: [],
                events: []
            }
        },
        computed: {
            pages() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Paginas';
                } else {
                    return 'Pages';
                }
            },
            pagesResult() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Su búsqueda no devolvió ninguna página.';
                } else {
                    return 'Your search returned no pages.';
                }
            },
            readMore() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Lee mas...';
                } else {
                    return 'Read More...';
                }
            },
            blogResult() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Tu búsqueda no devolvió entradas de blog.';
                } else {
                    return 'Your search returned no blog posts.';
                }
            },
            eventsHeader() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Eventos';
                } else {
                    return 'Events';
                }
            },
            eventResult() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Su búsqueda no devolvió ningún evento.';
                } else {
                    return 'Your search returned no events.';
                }
            }
        },
        created() {
            this.loading = true;

            axios.get('/search/?keywords=' + this.$route.query.keywords)
                .then(response => {
                    let articles = response.data.articles;
                    let reformatted = [];

                    if (this.$cookie.get('language') === 'es') {
                        articles.forEach(article => {
                            reformatted.push({
                                headline: article.es_headline,
                                subhead: article.es_subhead,
                                callout: article.es_callout,
                                link: article.link
                            });
                        });
                    } else {
                        articles.forEach(article => {
                            reformatted.push({
                                headline: article.en_headline,
                                subhead: article.en_subhead,
                                callout: article.en_callout,
                                link: article.link
                            });
                        });
                    }

                    this.articles = reformatted;

                    let posts = response.data.posts;
                    let reformattedPosts = [];
                    if (this.$cookie.get('language') === 'es') {
                        posts.forEach(post => {
                            reformattedPosts.push({
                                headline: post.es_headline,
                                hero_text: post.es_hero_text,
                                slug: post.slug
                            });
                        });
                    } else {
                        posts.forEach(post => {
                            reformattedPosts.push({
                                headline: post.en_headline,
                                hero_text: post.en_hero_text,
                                link: post.link
                            });
                        });
                    }
                    this.posts = reformattedPosts;

                    let events = response.data.events;
                    let reformattedEvents = [];
                    if (this.$cookie.get('language') === 'es') {
                        events.forEach(event => {
                            reformattedEvents.push({
                                event_name: event.es_event_name,
                                event_callout: event.es_event_callout,
                                slug: event.slug
                            });
                        });
                    } else {
                        events.forEach(event => {
                            reformattedEvents.push({
                                event_name: event.en_event_name,
                                event_callout: event.en_event_callout,
                                slug: event.slug
                            });
                        });
                    }
                    this.events = reformattedEvents;

                    this.loading = false;
                })
                .catch(error =>{
                    console.error(error);
                });
        }
    }
</script>