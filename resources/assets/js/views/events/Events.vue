<template>
    <psg-page :article="article" :loading="loading" :events="events">
        <div slot="copy">
            <div v-for="(event, index) in events" key="index">
                <div class="row">
                    <div class="col-md-6">
                        <div v-if="event.image">
                            <img :src="'/uploads/events/' + event.image" class="img-responsive" alt="event.event_name" />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h1>{{ event.event_name }}</h1>
                        <div v-html="event.event_callout"></div>

                        <router-link :to="{ name: 'event/view', params: { slug : event.slug }}" class="btn btn-color pull-right">Read More...</router-link>
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
                    headline: 'Events',
                    subhead: 'Shanti in the Community',
                    callout: 'Shanti frequently puts on or participates in events in the local community. You will find more information about them here.'
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
                        this.events = response.body.events;

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
        }
    }
</script>
