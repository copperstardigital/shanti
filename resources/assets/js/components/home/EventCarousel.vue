<template>
    <div>
        <div class="text-center">
            <i v-show="loading" class="fa fa-refresh fa-spin fa-5x color"></i>
        </div>
        <carousel :loop="true" :autoplay="true" :autoplayTimeout="7000" :perPage="1" :navigationEnabled="true">
            <slide v-for="(event, index) in events" key="index" class="pale-purple">
                <div class="event-header">
                    <h4>{{ event.category.category_name }}</h4>
                </div>
                <div class="carousel-container">
                    <div v-if="event.image">
                        <div class="row">
                            <div class="col-md-5">
                                <div v-if="event.image && event.link">
                                    <a :href="event.link" target="_blank">
                                        <img :src="'/uploads/events/' + event.image" class="thumbnail img-responsive" :alt="event.headline" />
                                    </a>
                                </div>
                                <div v-else-if="event.image && !event.link">
                                    <a :href="event.link" target="_blank">
                                        <router-link :to="{ name: 'blog/view', params: { slug : event.slug }}">
                                            <img :src="'/uploads/events/' + event.image" class="thumbnail img-responsive" :alt="event.headline" />
                                        </router-link>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <h1>{{ event.headline }}</h1>

                                <hr />

                                <div v-html="event.hero_text"></div>

                                <br />

                                <router-link :to="{ name: 'blog/view', params: { slug : event.slug }}" class="btn btn-color pull-right">{{ readMore }}</router-link>

                                <psg-speak :text="copy(event.headline, event.hero_text)"></psg-speak>
                            </div>
                        </div>
                    </div>
                    <div v-if="!event.image">
                        <h1>{{ event.headline }}</h1>

                        <hr />

                        <div v-html="event.hero_text"></div>

                        <br />

                        <router-link :to="{ name: 'blog/view', params: { slug : event.slug }}" class="btn btn-color pull-right">{{ readMore }}</router-link>

                        <psg-speak :text="copy(event.headline, event.hero_text)"></psg-speak>
                    </div>
                </div>
            </slide>
        </carousel>

    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import TextToSpeech from '../misc/TextToSpeech';

    export default {
        data() {
            return {
                events: []
            }
        },
        computed: {
            readMore() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Lee mas...';
                } else {
                    return 'Read More...';
                }
            }
        },
        created() {
            this.loading = true;

            http
                .get('/carousel')
                //.use(saCache)
                .then(response => {
                    let events = response.body.events;
                    let reformatted = [];

                    if (this.$cookie.get('language') === 'es') {
                        events.forEach(event => {
                            reformatted.push({
                                headline: event.es_headline,
                                hero_text: event.es_hero_text,
                                category: {
                                    category_name: event.category.es_category_name
                                },
                                slug: event.slug,
                                image: event.image,
                                link: event.link
                            });
                        });
                    } else {
                        events.forEach(event => {
                            reformatted.push({
                                headline: event.en_headline,
                                hero_text: event.en_hero_text,
                                category: {
                                    category_name: event.category.en_category_name
                                },
                                slug: event.slug,
                                image: event.image,
                                link: event.link
                            });
                        });
                    }

                    this.events = reformatted;
                    this.loading = false;
                }).catch(error => {
                console.error(error);
            });
        },
        methods: {
            copy(headline, heroText) {
                return headline + ' ' + heroText;
            }
        },
        components: {
            Carousel,
            Slide,
            'psg-speak': TextToSpeech
        }
    }
</script>