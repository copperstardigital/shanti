<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-md-4">
                    <div v-show="!loading">
                        <img src="/img/individual_counseling.jpg" alt="Individual Counseling" class="img-responsive" />

                        <hr />

                        <img src="/img/group_counseling.jpg" alt="Group Counseling" class="img-responsive" />
                    </div>
                </div>
                <div class="col-md-8">
                    <div v-html="article.body"></div>
                    <psg-speak v-show="!loading" :text="article.body" primary="true"></psg-speak>
                </div>
            </div>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';

    export default {
        data() {
            return {
                article: {}
            }
        },
       created() {
            this.loading = true;

            http
                .get('/articles/7')
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
            'psg-speak': TextToSpeech
        }
    }
</script>