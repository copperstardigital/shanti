<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-md-4">
                    <div v-show="!loading">
                        <img src="/img/transitional.png" class="img-responsive" alt="Transitional Housing" />

                        <hr />

                        <img src="/img/triplex.png" class="img-responsive" alt="Triplex" />

                        <hr />

                        <img src="/img/permanent.jpg" class="img-responsive" alt="Permanent Housing" />

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
                .get('/articles/6')
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
        },
        components: {
            'psg-speak': TextToSpeech
        }
    }
</script>