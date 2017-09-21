<template>
    <div class="text-center">
        <h3><span class="color">Phoenix Shanti Group</span>. Most Amazing HIV Agency in the Valley. <span class="color">Literally</span>.</h3>
        <p>Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society.</p>
        <psg-speak text="Phoenix Shanti Group. Most Amazing HIV Agency in the Valley. Although we keep a low profile, we're helping men and women with substance abuse problems turn their lives around every day. Many of our clients go on to be successful, productive members of society." primary="true"></psg-speak>
    </div>
</template>

<script>
    import TextToSpeech from '../misc/TextToSpeech';

    export default {
        components: {
            'psg-speak': TextToSpeech
        }
    }
</script>