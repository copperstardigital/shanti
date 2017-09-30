<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
            <psg-speak :text="article.body" :loading="loading" primary="true"></psg-speak>

            <carousel-3d>
                <slide v-for="(slide, i) in slides" :index="i" key="i">
                    <img :src="slide.image">
                </slide>
            </carousel-3d>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';
    import { Carousel3d, Slide } from 'vue-carousel-3d';

    export default {
        data() {
            return {
                article: {},
                loading: false,
                slides: [
                    { image: '/uploads/events/gallery/21.jpg' },
                    { image: '/uploads/events/gallery/22.jpg' },
                    { image: '/uploads/events/gallery/23.jpg' },
                    { image: '/uploads/events/gallery/24.jpg' },
                    { image: '/uploads/events/gallery/25.jpg' },
                    { image: '/uploads/events/gallery/26.jpg' },
                    { image: '/uploads/events/gallery/27.jpg' },
                    { image: '/uploads/events/gallery/28.jpg' },
                    { image: '/uploads/events/gallery/29.jpg' },
                    { image: '/uploads/events/gallery/30.jpg' },
                    { image: '/uploads/events/gallery/31.jpg' },
                    { image: '/uploads/events/gallery/32.jpg' },
                    { image: '/uploads/events/gallery/33.jpg' },
                    { image: '/uploads/events/gallery/34.jpg' },
                    { image: '/uploads/events/gallery/35.jpg' },
                    { image: '/uploads/events/gallery/36.jpg' },
                ]
            }
        },
        mounted() {
            this.loading = true;

            http
                .get('/articles/16')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;
                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: article.en_body
                    };

                    if (this.$cookie.get('language') === 'es') {
                        this.article = {
                            headline: article.es_headline,
                            subhead: article.es_subhead,
                            callout: article.es_callout,
                            body: article.es_body
                        };
                    }

                    this.loading = false;
                }).catch(error => {
                console.error(error);
            });
        },
        components: {
            'psg-speak': TextToSpeech,
            'carousel-3d': Carousel3d,
            Slide
        }
    }
</script>