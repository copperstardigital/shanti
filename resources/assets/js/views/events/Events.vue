<template>
    <psg-page :article="article" :loading="loading" :events="events">
        <div slot="copy">
            <div v-for="(event, index) in events" key="index">
                <div class="row">
                    <div class="col-md-6">
                        <div v-if="event.image">
                            <img :src="'/uploads/events/' + event.image" class="img-responsive" :alt="event.event_name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h1>{{ event.event_name }}</h1>
                        <div v-html="event.event_callout"></div>

                        <router-link :to="{ name: 'event/view', params: { slug : event.slug }}" class="btn btn-color pull-right">{{ readMore }}</router-link>
                        <psg-speak v-show="!loading" :text="copy(event.event_name, event.event_callout)" primary="true"></psg-speak>
                    </div>
                </div>

                <hr />
            </div>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';

    export default {
        data() {
            return {
                article: {
                    headline: (this.$cookie.get('language') === 'es') ? 'Eventos' : 'Events',
                    subhead: (this.$cookie.get('language') === 'es') ? 'Shanti en la Comunidad' : 'Shanti in the Community',
                    callout: (this.$cookie.get('language') === 'es') ? 'Shanti frecuentemente participa o participa en eventos en la comunidad local. Encontrará más información sobre ellos aquí.' : 'Shanti frequently puts on or participates in events in the local community. You will find more information about them here.'
                },
                loading: false,
                events: [],
            }
        },
        methods: {
            getEvents() {
                this.loading = true;

                http
                    .get('/events')
                    .then(response => {
                        let events = response.body.events;
                        let reformatted = [];

                        if (this.$cookie.get('language') === 'es') {
                            events.forEach(event => {
                                reformatted.push({
                                    event_name: event.es_event_name,
                                    event_callout: event.es_event_callout,
                                    slug: event.slug,
                                    image: event.image,
                                });
                            });
                        } else {
                            events.forEach(event => {
                                reformatted.push({
                                    event_name: event.en_event_name,
                                    event_callout: event.en_event_callout,
                                    slug: event.slug,
                                    image: event.image,
                                });
                            });
                        }

                        this.events = reformatted;

                        this.loading = false;
                    }).catch(error => {
                    console.error(error);
                });
            },
            copy(event, callout) {
                return event + ' ' + callout;
            }
        },
        mounted() {
            this.getEvents();
        },
        components: {
            'psg-speak': TextToSpeech
        },
        computed: {
            readMore() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Lee más...';
                } else {
                    return 'Read more...';
                }
            }
        }
    }
</script>
