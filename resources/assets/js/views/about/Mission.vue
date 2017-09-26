<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
            <tabs nav-style="tabs" justified>
                <tab header="What We Do">
                    <p>The Phoenix Shanti Group provides support, counseling, housing and other services to people infected with or affected by HIV/AIDS. In one form or another, Shanti has been serving the the HIV community in metro Phoenix for 30 years.</p>
                </tab>
                <tab header="Why Choose Us?">
                    <p>Shanti provides a stem-to-stern approach to HIV services. Some of our clients are homeless when they enter the Shanti program. Most clients, but not all, enter housing services upon entry to Shanti. In housing, clients can relate to other people living with HIV. Some are newly infected, others have been living with the virus for many years. Through counseling, medication and peer support, clients learn how to re-enter the world, without having to rely on drugs and alcohol. In our vocational rehabilitation program, clients gain valuable work skills and experience. By the time they graduate, clients are ready to take on the world anew.</p>
                </tab>
                <tab header="What Makes Us Special">
                    <p>Through the boundless support provided by Shanti, many clients become quite fond of the agency and its staff. There is a familial feeling to Shanti.  Many of the clients become friends. After graduation, some former clients come back to help the organization in various ways.  Some serve on the Board.  Others volunteer for committees.  This website was created by a former client, who redeemed his life through the Shanti program.  At Shanti, through its curriculum, many clients have tackled lifelong issues and now that they are clean and sober, they feel an immense sense of gratitude that they want to pay forward.</p>
                </tab>
                <tab header="Testimonials">
                    <div class="row">
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/GSrxnKnB0JY" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/QiCZSykNJic" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/1o-Fxo09jEg" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/UuXzma7H404" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/u_LYZ0IQP0U" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZeIWUzvYsoE" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </tab>
            </tabs>
            <psg-speak :text="article.body" :loading="loading" primary="true"></psg-speak>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';
    import { tabs } from 'vue-strap';
    import { tab } from 'vue-strap';

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
        computed: {
            yearsSinceFounding() {
                return new Date().getFullYear() - new Date('1987-09-01').getFullYear();
            }
        },
        methods: {
            replaceYearCount(text) {
                let yearsSinceFounding = new Date().getFullYear() - new Date('1987-09-01').getFullYear();
                return text.replace('{{ yearsSinceFounding }}', yearsSinceFounding)
            }
        },
        components: {
            'psg-speak': TextToSpeech,
            tabs: tabs,
            tab: tab
        }
    }
</script>