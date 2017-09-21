<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
            <psg-speak :text="article.body" :loading="loading" primary="true"></psg-speak>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {}
            }
        },
        created() {
            this.loading = true;

            http
                .get('/articles/2')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;

                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: this.replaceYearCount(article.en_body)
                    };

                    this.loading = false;
                }).catch(error => {
                    console.error(error);
                });
        },
//        computed: {
//            yearsSinceFounding() {
//                return new Date().getFullYear() - new Date('1987-09-01').getFullYear();
//            }
//        },
        methods: {
            replaceYearCount(text) {
                let yearsSinceFounding = new Date().getFullYear() - new Date('1987-09-01').getFullYear();
                return text.replace('{{ yearsSinceFounding }}', yearsSinceFounding)
            }
        }
    }
</script>