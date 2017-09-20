<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {},
            }
        },
        created() {
            this.loading = true;

            http
                .get('/articles/1')
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