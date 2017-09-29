<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-if="post.image">
                <div class="row">
                    <div class="col-md-4">
                        <div v-if="post.link">
                            <a :href="post.link" target="_blank">
                                <img :src="'/uploads/events/' + post.image" class="img-responsive" :alt="post.headline" />
                            </a>
                        </div>
                        <div v-if="post.image && !post.link">
                            <img :src="'/uploads/events/' + post.image" class="img-responsive" :alt="post.headline" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <h1>{{ post.headline }}</h1>
                        <div v-html="post.body"></div>
                        <div v-if="post.link">
                            <a :href="post.link" class="btn btn-color pull-right">More Information</a>
                        </div>
                        <psg-speak v-show="!loading" :text="copy(post.headline, post.body)" primary="true"></psg-speak>
                    </div>
                </div>
            </div>
            <div v-if="!post.image">
                <h1>{{ post.headline }}</h1>
                <div v-html="post.body"></div>
                <div v-if="post.link">
                    <a :href="post.link" class="btn btn-color pull-right">More Information</a>
                </div>
                <psg-speak v-show="!loading" :text="copy(post.headline, post.body)" primary="true"></psg-speak>
            </div>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';

    export default {
        data() {
            return {
                article: {
                    headline: '',
                    category : {
                        category_name: ''
                    },
                    hero_text: '',
                    body: ''
                },
                post: {},
                loading: false
            }
        },
        methods: {
            getPost(slug) {
                this.loading = true;

                axios.get('/posts/' + slug)
                    .then(response => {
                        let post = response.data.post;
                        if (this.$cookie.get('language') === 'es') {
                            if (post !== null) {
                                this.article = {
                                    headline: post.es_headline,
                                    subhead: post.category.category_name,
                                    callout: post.es_hero_text,
                                    image: post.image,
                                    link: post.link,
                                    body: post.es_body
                                };

                                this.post = {
                                    headline: post.es_headline,
                                    image: post.image,
                                    link: post.link,
                                    body: post.es_body
                                };
                            } else {
                                this.article = {
                                    headline: 'Mensaje no encontrado',
                                    subhead: 'Error 404',
                                    callout: 'Lo sentimos, pero no hemos podido encontrar la publicación para la que estás buscando. Tal vez sigas un enlace obsoleto, o la entrada se ha eliminado o desactivado.',
                                    body: ''
                                };
                            }
                        } else {
                            if (post !== null) {
                                this.article = {
                                    headline: post.en_headline,
                                    subhead: post.category.category_name,
                                    callout: post.en_hero_text,
                                };

                                this.post = {
                                    headline: post.en_headline,
                                    image: post.image,
                                    link: post.link,
                                    body: post.en_body
                                };
                            } else {
                                this.article = {
                                    headline: 'Post Not Found',
                                    subhead: '404 Error',
                                    callout: 'We\'re sorry, but we could not find the post for which you are looking. Perhaps you are following an outdated link, or the post has been deleted or deactivated.',
                                    body: ''
                                };
                            }
                        }

                        this.loading = false;
                    })
                    .catch(error => console.log(error));
            },
            copy(headline, copy) {
                return headline + ' ' + copy;
            }
        },
        watch: {
            '$route' (to, from) {
                this.getPost(to.params.slug);
            }
        },
        mounted() {
            this.getPost(this.$route.params.slug);
        },
        components: {
            'psg-speak': TextToSpeech
        }
    }
</script>