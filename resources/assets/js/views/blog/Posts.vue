<template>
    <psg-page :article="article" :loading="loading">
        <div slot="posts">
            <div v-for="(post, index) in posts" key="index">
                <div v-if="post.image">
                    <div class="row">
                        <div class="col-md-4">
                            <div v-if="post.link">
                                <a :href="post.link" target="_blank">
                                    <img :src="'/uploads/events/' + post.image" class="img-responsive" :alt="post.headline" />
                                </a>
                            </div>
                            <div v-if="post.image && !post.link">
                                <router-link :to="'/blog/' + post.slug">
                                    <img :src="'/uploads/events/' + post.image" class="img-responsive" :alt="post.headline" />
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <h1>{{ post.headline }}</h1>
                            <div v-html="post.hero_text"></div>
                            <div v-if="post.link">
                                <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">{{ readMore }}</router-link>
                                <a :href="post.link" class="btn btn-default pull-right">{{ moreInfo }}</a>
                            </div>
                            <div v-if="!post.link">
                                <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">{{ readMore }}</router-link>
                            </div>
                            <psg-speak v-show="!loading" :text="copy(post.headline, post.body)" primary="true"></psg-speak>
                        </div>
                    </div>
                </div>
                <div v-if="!post.image">
                    <h1>{{ post.headline }}</h1>
                    <div v-html="post.hero_text"></div>
                    <div v-if="post.link">
                        <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">{{ readMore }}</router-link>
                        <a :href="post.link" class="btn btn-default pull-right">{{ moreInfo }}</a>
                    </div>
                    <div v-if="!post.link">
                        <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">{{ readMore }}</router-link>
                    </div>
                </div>
                <br style="clear:both;" />
                <hr />
            </div>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';

    export default {
        data() {
            return {
                article: {},
                posts: []
            }
        },
        methods: {
            getPosts() {
                http
                    .get('/posts')
                    //.use(saCache)
                    .then(response => {
                        let posts = response.body.posts;

                        let reformatted = [];

                        if (this.$cookie.get('language') === 'es') {
                            posts.forEach(post => {
                                reformatted.push({
                                    headline: post.es_headline,
                                    hero_text: post.es_hero_text,
                                    slug: post.slug,
                                    image: post.image,
                                    link: post.link
                                });
                            });
                        } else {
                            posts.forEach(post => {
                                reformatted.push({
                                    headline: post.en_headline,
                                    hero_text: post.en_hero_text,
                                    slug: post.slug,
                                    image: post.image,
                                    link: post.link
                                });
                            });
                        }

                        this.posts = reformatted;
                    }).catch(error => {
                    console.error(error);
                });
            },
            getArticle() {
                http
                    .get('/articles/11')
                    //.use(saCache)
                    .then(response => {
                        let article = response.body.article;

                        this.article = {
                            headline: article.en_headline,
                            subhead: article.en_subhead,
                            callout: article.en_callout,
                            body: article.en_body
                        };

                        this.loading = false;
                    }).catch(error => {
                    console.error(error);
                });
            },
            copy(headline, copy) {
                return headline + ' ' + copy;
            }
        },
        beforeMount() {
            this.getArticle();
            this.getPosts();
        },
        created() {
            this.loading = true;
        },
        components: {
            'psg-speak': TextToSpeech
        },
        computed: {
            readMore() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Lee más...';
                } else {
                    return 'Read more...';
                }
            },
            moreInfo() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Más información';
                } else {
                    return 'More Information';
                }
            }
        }
    }
</script>