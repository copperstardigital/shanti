<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
            <psg-speak :text="article.body" :loading="loading"></psg-speak>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {},
                loading: false
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

                    this.loading = false;
                }).catch(error => {
                console.error(error);
            });
        }
    }
</script>