<template>
    <div>
        <div class="block-heading-six" style="margin-bottom: 0;">
            <h4 class="bg-color" style="margin-bottom: 0; width: 98%">{{ ourSupporters }}</h4>
        </div>

        <div class="client-three" style="margin-top: 0;">
            <carousel :loop="true" :autoplay="true" :autoplayTimeout="7000" :perPage="1" :navigationEnabled="true">
                <slide class="pale-purple">
                    <div class="carousel-container less-padding">
                        <div class="row frame">
                            <div class="col-md-3">
                                <a href="http://www.auntritas.org/" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/aunt_ritas.png" alt="Aunt Rita's Foundation" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="https://vsuw.org" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/united_way.jpeg" alt="Valley of the Sun United Way" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="https://elizabethtayloraidsfoundation.org/" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/elizabeth_taylor.png" alt="Elizabeth Taylor AIDS Foundation" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="https://broadwaycares.org/" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/broadway_cares.jpeg" alt="Broadway Cares" />
                                </a>
                            </div>

                        </div>
                    </div>
                </slide>
                <slide class="pale-purple">
                    <div class="carousel-container logo-carousel less-padding">
                        <div class="row frame">
                            <div class="col-md-3">
                                <a href="http://www.macys.com" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/macys.jpeg" alt="Macy's" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="https://www.aidshealth.org/#/" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/AHF.png" alt="AIDS Healthcare Foundation" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.topazsystems.com/index.html" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/topaz.png" alt="Topaz Systems" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://triyoung.com/" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/triyoung.png" alt="TriYoung Business Solutions" />
                                </a>
                            </div>
                        </div>
                    </div>
                </slide>
                <slide class="pale-purple">
                    <div class="carousel-container logo-carousel less-padding">
                        <div class="row frame">
                            <div class="col-md-3">
                                <a href="https://www.copperstardigital.com" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/copper_star.png" alt="Copper Star Digital" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.la-z-boy.com/" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/lazboy.png" alt="La-Z-Boy" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.buffaloexchange.com" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/buffalo_exchange.jpeg" alt="Buffalo Exchange" />
                                </a>
                            </div>
                            <div class="col-md-3">
                                <a href="http://www.trashcity.com/" target="_blank">
                                    <img class="logo-carousel" src="/uploads/sponsors/trash_city.jpg" alt="Trash City Beads" />
                                </a>
                            </div>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {
            Carousel,
            Slide
        },
        computed: {
            ourSupporters() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Nuestros partidarios'
                } else {
                    return 'Our Supporters'
                }
            }
        }
    }
</script>