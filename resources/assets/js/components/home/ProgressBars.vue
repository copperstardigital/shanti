<template>
    <div class="col-md-4 col-sm-6">
        <h4>Our Fundraising</h4>
        <p>Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year.</p>

        <psg-speak text="Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year." primary="true"></psg-speak>

        <h6>General Funds</h6>
        <psg-progress-bar
                bar="progress-bar progress-bar-red"
                now="30"
                goal="1000"
        ></psg-progress-bar>

        <h6>AIDS Walk Arizona</h6>
        <psg-progress-bar
                bar="progress-bar progress-bar-green"
                now="500"
                goal="1500"
        ></psg-progress-bar>

        <h6>Event Dollars Raised</h6>
        <psg-progress-bar
                bar="progress-bar progress-bar-lblue"
                now="50"
                goal="1000"
        ></psg-progress-bar>
    </div>
</template>

<script>
    import ProgressBar from './ProgressBar';
    import TextToSpeech from '../misc/TextToSpeech';

    export default {
        components: {
            'psg-progress-bar': ProgressBar,
            'psg-speak': TextToSpeech
        }
    }
</script>