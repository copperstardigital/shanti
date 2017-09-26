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
                article: {}
            }
        },
        created() {
            this.loading = true;

            http
                .get('/articles/8')
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
    }
</script>