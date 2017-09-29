<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>

            <div class="row">
                <div class="col-sm-4 col-sm-offset-2">
                    <h3>{{ chairman }}</h3>
                    <h5>Rudy Navarro</h5>
                    <p>{{ affiliation }}: Arizona State University, Phoenix College</p>

                    <hr />

                    <h3>{{ secretary }}</h3>
                    <h5>Trent Tripp</h5>
                    <p>{{ affiliation }}: Rehab Specialists</p>

                    <hr />

                    <h3>{{ treasurer }}</h3>
                    <h5>Open</h5>
                </div>
                <div class="col-sm-4">
                    <h3>Director</h3>
                    <h5>Dr. Charles Boag</h5>

                    <hr />

                    <h3>{{ member}}</h3>
                    <h5>Wayne Tormala</h5>
                    <p>{{ affiliation }}: Chief of the Tobacco and Chronic Disease Division of AZ Department of Health Services (ADHS)</p>
                </div>
            </div>

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
        },
        computed: {
            chairman() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Presidente';
                } else {
                    return 'Chairman';
                }
            },
            secretary() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Secretario';
                } else {
                    return 'Secretary';
                }
            },
            treasurer() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Tesorero';
                } else {
                    return 'Treasurer';
                }
            },
            member() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Miembro';
                } else {
                    return 'Member';
                }
            },
            affiliation() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Afiliación';
                } else {
                    return 'Affiliation';
                }
            }
        }
    }
</script>