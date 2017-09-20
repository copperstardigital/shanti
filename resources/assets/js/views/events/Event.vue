<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-md-6">
                    <div v-if="article.image">
                        <img :src="'/uploads/events/' + article.image" class="img-responsive" alt="article.headline" />
                    </div>
                    <div v-if="article.map_link">
                        <div v-html="article.map_link"></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <h1>{{ article.headline }}</h1>
                    <div v-html="article.body"></div>
                    <div v-if="article.event_url">
                        <a :href="article.event_url" class="btn btn-color pull-right" target="_blank">Read More...</a>
                    </div>
                </div>
            </div>
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
                .get('/events/' + this.$route.params.slug)
                //.use(saCache)
                .then(response => {
                    let event = response.body.event;
                    this.article = {
                        headline: event.event_name,
                        subhead: new Date(event.event_start).toLocaleDateString(),
                        callout: event.event_callout,
                        body: event.event_description,
                        map_link: event.map_link,
                        image: event.image,
                        event_url: event.event_url
                    };

                    this.loading = false;
                }).catch(error => {
                console.error(error);
            });
        }
    }
</script>