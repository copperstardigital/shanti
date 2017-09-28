<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
            <psg-speak :text="article.body" :loading="loading" primary="true"></psg-speak>

            <carousel-3d :width="600" :height="600">
                <slide v-for="(slide, i) in slides" :index="i">
                    <img :src="slide.image" class="img-responsive">
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
                    { image: '/uploads/history/1.jpg' },
                    { image: '/uploads/history/2.jpg' },
                    { image: '/uploads/history/3.jpg' },
                    { image: '/uploads/history/4.jpg' },
                    { image: '/uploads/history/5.jpg' },
                    { image: '/uploads/history/6.jpg' },
                    { image: '/uploads/history/7.jpg' },
                    { image: '/uploads/history/8.jpg' },
                    { image: '/uploads/history/9.jpg' },
                    { image: '/uploads/history/10.jpg' },
                    { image: '/uploads/history/11.jpg' },
                    { image: '/uploads/history/12.jpg' },
                    { image: '/uploads/history/13.jpg' },
                    { image: '/uploads/history/14.jpg' },
                    { image: '/uploads/history/15.jpg' },
                    { image: '/uploads/history/16.jpg' },
                    { image: '/uploads/history/17.jpg' },
                    { image: '/uploads/history/18.jpg' },
                    { image: '/uploads/history/19.jpg' },
                    { image: '/uploads/history/20.jpg' },
                    { image: '/uploads/history/21.jpg' },
                    { image: '/uploads/history/22.jpg' },
                    { image: '/uploads/history/23.jpg' },
                    { image: '/uploads/history/24.jpg' },
                    { image: '/uploads/history/25.jpg' },
                    { image: '/uploads/history/26.jpg' },
                    { image: '/uploads/history/27.jpg' },
                    { image: '/uploads/history/28.jpg' },
                    { image: '/uploads/history/29.jpg' },
                    { image: '/uploads/history/30.jpg' },
                    { image: '/uploads/history/31.jpg' },
                    { image: '/uploads/history/32.jpg' },
                    { image: '/uploads/history/33.jpg' },
                    { image: '/uploads/history/34.jpg' },
                    { image: '/uploads/history/35.jpg' },
                    { image: '/uploads/history/36.jpg' },
                    { image: '/uploads/history/37.jpg' },
                    { image: '/uploads/history/38.jpg' },
                    { image: '/uploads/history/39.png' },
                    { image: '/uploads/history/40.png' },
                    { image: '/uploads/history/41.png' },
                    { image: '/uploads/history/42.png' },
                    { image: '/uploads/history/43.png' },
                    { image: '/uploads/history/44.png' },
                    { image: '/uploads/history/45.png' },
                    { image: '/uploads/history/46.png' },
                    { image: '/uploads/history/47.png' },
                    { image: '/uploads/history/48.png' },
                    { image: '/uploads/history/49.png' },
                    { image: '/uploads/history/50.png' },
                    { image: '/uploads/history/51.png' },
                    { image: '/uploads/history/52.png' },
                    { image: '/uploads/history/53.png' },
                    { image: '/uploads/history/54.png' },
                    { image: '/uploads/history/55.png' },
                    { image: '/uploads/history/56.png' },
                    { image: '/uploads/history/57.jpg' },
                    { image: '/uploads/history/58.jpg' },
                    { image: '/uploads/history/59.jpg' },
                    { image: '/uploads/history/60.jpg' },
                    { image: '/uploads/history/61.jpg' },
                    { image: '/uploads/history/62.jpg' },
                    { image: '/uploads/history/63.jpg' },
                    { image: '/uploads/history/64.jpg' },
                    { image: '/uploads/history/65.jpg' },
                    { image: '/uploads/history/66.jpg' },
                    { image: '/uploads/history/67.jpg' },
                    { image: '/uploads/history/68.jpg' },
                    { image: '/uploads/history/69.jpg' }
                ]
            }
        },
        mounted() {
            this.loading = true;

            http
                .get('/articles/3')
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