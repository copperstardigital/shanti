<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <d-player ref="player"
                      @play="play"
                      :video="video"
                      :lang="lang"
                      :autoplay="autoplay"
                      :contextmenu="contextmenu"
                      :logo="logo"
                      :screenshot="true">

            </d-player>

            <br />

            <span v-for="(client, index) in testimonials" :key="index">
                <button style="margin-right: 10px; margin-bottom:10px;" class="btn btn-color" @click="switchVideo(client.clip)">Watch {{ client.name}}</button>
            </span>
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
                    url: '/uploads/video/michael.mp4'
                },
                lang: 'en',
                autoplay: false,
                player: null,
                contextmenu: [],
                logo: '/img/shanti_logo_white.png',
                testimonials: [
                    {
                        name: 'Jose A.',
                        clip: '/uploads/video/jose.mp4'
                    },
                    {
                        name: 'Jesse A.',
                        clip: '/uploads/video/jesse.mp4'
                    },
                    {
                        name: 'Marlon G.',
                        clip: '/uploads/video/marlon.mp4'
                    },
                    {
                        name: 'Scott H.',
                        clip: '/uploads/video/scott.mp4'
                    },
                    {
                        name: 'AJ P.',
                        clip: '/uploads/video/aj-p.mp4'
                    },
                    {
                        name: 'Brandy M.',
                        clip: '/uploads/video/brandy-m.mp4'
                    },
                    {
                        name: 'Courtney',
                        clip: '/uploads/video/Courtney.mp4'
                    },
                    {
                        name: 'Craig S.',
                        clip: '/uploads/video/craig-s.mp4'
                    },
                    {
                        name: 'Eraina V.',
                        clip: '/uploads/video/eraina-v.mp4'
                    },
                    {
                        name: 'Jeannie M.',
                        clip: '/uploads/video/jeannie-m.mp4'
                    },
                    {
                        name: 'Jesse W.',
                        clip: '/uploads/video/jesse-w.mp4'
                    },
                    {
                        name: 'Josue B.',
                        clip: '/uploads/video/josue-b.mp4'
                    },
                    {
                        name: 'Julie Y.',
                        clip: '/uploads/video/julie-y.mp4'
                    },
                    {
                        name: 'Liz',
                        clip: '/uploads/video/liz.mp4'
                    },
                    {
                        name: 'Myleshea / Terence',
                        clip: '/uploads/video/mylshea-b-terence-m.mp4'
                    },
                    {
                        name: 'Shelleye B.',
                        clip: '/uploads/video/shelleye-b.mp4'
                    },
                    {
                        name: 'Sherrie B.',
                        clip: '/uploads/video/sherrie-b.mp4'
                    },
                    {
                        name: 'Todd J.',
                        clip: '/uploads/video/todd-j.mp4'
                    },
                    {
                        name: 'Michael S.',
                        clip: '/uploads/video/michael.mp4'
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
                .get('/articles/14')
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
        methods: {
            play() {
                // console.log('play callback')
            },
            switchVideo(newVideo) {
//                let video = this.testimonials[Math.floor(Math.random() * this.testimonials.length)];
//                newVideo = video.clip;

                this.player.switchVideo({
                    url: newVideo
                });
            }
        }
    }
</script>