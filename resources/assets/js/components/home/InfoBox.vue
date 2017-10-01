<template>
    <div class="col-md-3 col-sm-6 info-box">
        <!-- Icon Box Eight Item -->
        <div class="icon-box-8-item" :class="box.color">
            <!-- Icon Box Eight Icon -->
            <div class="icon-box-8-icon">
                <a href="#" class="icon-box-8-icon-top"><i :class="box.icon"></i></a>
                <a href="#" class="icon-box-8-icon-bottom"><i class="fa fa-heart"></i></a>
            </div>
            <div v-if="box.link.match('http')">
                <h4><a :href="box.link" target="_blank">{{ title }}</a></h4>
            </div>
            <div v-else-if="!box.link.match('http')">
                <h4><router-link :to="box.link">{{ title }}</router-link></h4>
            </div>
            <!-- Paragraph -->
            <p>{{ copy }}</p>

            <psg-speak :text="copy"></psg-speak>
        </div>
    </div>
</template>

<script>
    import TextToSpeech from '../misc/TextToSpeech';

    export default {
        props: ['box'],
        components: {
            'psg-speak': TextToSpeech
        },
        computed: {
            title() {
                if (this.$cookie.get('language') === 'es') {
                    return this.box.es_title;
                } else {
                    return this.box.en_title;
                }
            },
            copy() {
                if (this.$cookie.get('language') === 'es') {
                    return this.box.es_copy;
                } else {
                    return this.box.en_copy;
                }
            }
        }
    }
</script>