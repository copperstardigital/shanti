<template>
    <div>
        <div class="text-center">
            <i v-show="loading" class="fa fa-refresh fa-spin fa-5x color"></i>
        </div>
        <carousel :loop="true" :autoplay="true" :autoplayTimeout="7000" :perPage="1" :navigationEnabled="true">
            <slide v-for="(event, index) in events" key="index" class="pale-purple">
                <div class="event-header">
                    <h3>{{ event.category.category_name }}</h3>
                </div>
                <div class="carousel-container">
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
                                <h1 class="color">{{ event.headline }}</h1>

                                <hr />

                                <div v-html="event.hero_text"></div>

                                <br />

                                <router-link :to="{ name: 'blog/view', params: { slug : event.slug }}" class="btn btn-color pull-right">Read More...</router-link>

                                <psg-speak :text="copy(event.headline, event.hero_text)" primary="true"></psg-speak>
                            </div>
                        </div>
                    </div>
                    <div v-if="!event.image">
                        <h1 class="color">{{ event.headline }}</h1>

                        <hr />

                        <div v-html="event.hero_text"></div>

                        <br />

                        <router-link :to="{ name: 'blog/view', params: { slug : event.slug }}" class="btn btn-color pull-right">Read More...</router-link>

                        <psg-speak :text="copy(event.headline, event.hero_text)" primary="true"></psg-speak>
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