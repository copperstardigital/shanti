<template>
    <div class="main-block">

        <div class="container">

            <psg-intro-text></psg-intro-text>

            <div class="divider-1"></div>

            <psg-event-carousel></psg-event-carousel>

            <br />

            <!-- Icon Box #8 Starts -->

            <psg-info-boxes></psg-info-boxes>

            <!-- Icon Box #8 Ends -->

            <div class="divider-1"></div>


            <psg-our-expertise></psg-our-expertise>

            <hr />

            <psg-counters></psg-counters>

        </div>

        <div class="container">

            <psg-our-team></psg-our-team>

            <div class="divider-1"></div>

            <psg-logo-carousel></psg-logo-carousel>

        </div>

    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';
    import EventCarousel from '../components/home/EventCarousel';
    import InfoBoxes from '../components/home/InfoBoxes';
    import Counters from '../components/home/Counters';
    import IntroText from '../components/home/IntroText';
    import LogoCarousel from '../components/home/LogoCarousel';
    import OurTeam from '../components/home/OurTeam';
    import OurExpertise from '../components/home/OurExpertise';

    export default {
        methods: {
//            getCarousel() {
//                http
//                    .get('/carousel')
//                    .use(saCache)
//                    .then(response => {
//                        this.events = response.body.events;
//                    }).catch(error => {
//                        console.error(error);
//                    });
//            }
        },
        components: {
            Carousel,
            Slide,
            'psg-event-carousel' : EventCarousel,
            'psg-info-boxes' : InfoBoxes,
            'psg-counters' : Counters,
            'psg-intro-text' : IntroText,
            'psg-our-expertise': OurExpertise,
            'psg-logo-carousel' : LogoCarousel,
            'psg-our-team' : OurTeam
        }
    };
</script>