<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>

            <h3>Chairman</h3>
            <p>Rudy Navarro</p>
            <p>Affiliation: ASU, Phoenix College</p>

            <h3>Secretary</h3>
            <h3>Trent Tripp</h3>
            <p>Affiliation: Rehab Specialists</p>

            <h3>Treasurer</h3>
            <p>Shirley McLauglin</p>

            <h3>Director</h3>
            <p>Dr. Charles Boag</p>

            <h3>Member</h3>
            <p>Sue Tormala</p>
            <p>Affiliation: Owner, Chiropractic Physicians Group, Inc.</p>

            <psg-speak :text="article.body" :loading="loading" primary="true"></psg-speak>
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
                .get('/articles/13')
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
        components: {
            'psg-speak': TextToSpeech
        }
    }
</script>