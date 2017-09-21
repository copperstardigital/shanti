<template>
    <div>
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

    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

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
        components: {
            Carousel,
            Slide
        }
    }
</script>