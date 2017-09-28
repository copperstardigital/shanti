<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <d-player ref="player"
                      @play="play"
                      :video="video"
                      :lang="lang"
                      :autoplay="autoplay"
                      :contextmenu="contextmenu"
                      :screenshot="true">

            </d-player>
        </div>
    </psg-page>
</template>

<script>
    import VueDPlayer from 'vue-dplayer'

    export default {
        data() {
            return {
                article: {},
                video: {
                    url: '/uploads/video/a.mp4',
                    pic: '/uploads/gallery/l4l2_1.jpg'
                },
                lang: 'en',
                autoplay: false,
                player: null,
                contextmenu: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/MoePlayer/vue-dplayer'
                    }
                ]
            }
        },
        components: {
            'd-player': VueDPlayer
        },
        mounted() {
            this.player = this.$refs.player.dp;
        },
        created() {
            this.loading = true;

            http
                .get('/articles/4')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;

                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: article.en_body
                    };

                    if (this.$cookie.get('lang') === 'es') {
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
        methods: {
            play() {
                console.log('play callback')
            }
        }
    }
</script>