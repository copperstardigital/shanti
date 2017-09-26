<template>
    <div class="col-md-4 col-sm-6">
        <h4 class="color">{{ ourFundraising }}</h4>
        <p>{{ ourFundraisingText }}</p>

        <psg-speak text="Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year." primary="true"></psg-speak>

        <h6>{{ generalFunds }}</h6>
        <psg-progress-bar
                bar="progress-bar progress-bar-red"
                now="30"
                goal="1000"
        ></psg-progress-bar>

        <h6>{{ aidsWalkArizona }}</h6>
        <psg-progress-bar
                bar="progress-bar progress-bar-green"
                now="500"
                goal="1500"
        ></psg-progress-bar>

        <h6>{{ eventDollarsRaised }}</h6>
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
        },
        computed: {
            ourFundraising() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Nuestra recaudación de fondos';
                } else {
                    return 'Our Fundraising';
                }
            },
            ourFundraisingText() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Phoenix Shanti Group tiene una historia de recaudar fondos para la comunidad de VIH / SIDA. He aquí un desglose de algunos de sus esfuerzos este año.';
                } else {
                    return 'Phoenix Shanti Group has a history of raising money for the HIV/AIDS community. Here is a breakdown of some of their efforts this year.';
                }
            },
            generalFunds() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Fondos Generales';
                } else {
                    return 'General Funds';
                }
            },
            aidsWalkArizona() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Caminata del SIDA Arizona';
                } else {
                    return 'AIDS Walk Arizona';
                }
            },
            eventDollarsRaised() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Evento Dólares Recaudados';
                } else {
                    return 'Event Dollars Raised';
                }
            }
        }
    }
</script>