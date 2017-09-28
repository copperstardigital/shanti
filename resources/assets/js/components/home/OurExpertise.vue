<template>
    <div>
        <div class="block-heading-two text-center">
            <h3 class="color"><span>{{ ourAgency }}</span></h3>
        </div>

        <br />

        <div class="row">
            <div class="col-md-4 col-sm-6">
                <h4 class="color">{{ ourExpertise }}</h4>
                <p>{{ ourExpertiseText }}</p>
                <ul class="list-2">
                    <li>{{ bullet1 }}</li>
                    <li>{{ bullet2 }}</li>
                    <li>{{ bullet3 }}</li>
                    <li>{{ bullet4 }}</li>
                </ul>
                <br />

                <psg-speak text="Since the onset of the HIV/AIDS pandemic, Phoenix Shanti Group has been providing a lifeline to men and women in the Valley of the Sun, providing services from hospice to housing over its decades of existence." primary="true"></psg-speak>
            </div>

            <div class="col-md-4 col-sm-6">

                <div id="bs-carousel-1" class="carousel slide" data-ride="carousel" data-interval="5000" data-pause="hover" data-wrap="true">
                    <!-- Bootstrap indicators. If you don't need indicators, remove the below section -->
                    <ol class="carousel-indicators">
                        <li data-target="#bs-carousel-1" data-slide-to="0" class="active"></li>
                        <li data-target="#bs-carousel-1" data-slide-to="1"></li>
                        <li data-target="#bs-carousel-1" data-slide-to="2"></li>
                    </ol>
                    <!-- Slides. You can also add captions -->
                    <div class="carousel-inner">
                        <!-- Item, First item should have extra class "active" -->
                        <div class="item active">
                            <!-- Image -->
                            <img src="img/aboutus/about-office-1.jpg" alt="">
                        </div>
                        <div class="item">
                            <img src="img/aboutus/about-office-2.jpg" alt="">
                        </div>
                        <div class="item">
                            <img src="img/aboutus/about-office-3.jpg" alt="">
                        </div>
                    </div>
                    <!-- Carousel controls (arrows). If you don't need controls, remove the below section -->
                    <a class="left carousel-control" href="#bs-carousel-1" role="button" data-slide="prev">
                        <span class="fa fa-chevron-left"></span>
                    </a>
                    <a class="right carousel-control" href="#bs-carousel-1" role="button" data-slide="next">
                        <span class="fa fa-chevron-right"></span>
                    </a>
                </div>

            </div>

            <psg-progress-bars></psg-progress-bars>

        </div>
    </div>
</template>

<script>
    import ProgressBars from './ProgressBars';
    import TextToSpeak from '../misc/TextToSpeech';

    export default {
        components: {
            'psg-progress-bars': ProgressBars,
            'psg-speak': TextToSpeak
        },
        computed: {
            ourAgency() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Nuestra Agencia';
                } else {
                    return 'Our Agency';
                }
            },
            ourExpertise() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Nuestra Experiencia';
                } else {
                    return 'Our Expertise';
                }
            },
            ourExpertiseText() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Desde el comienzo de la pandemia del VIH / SIDA, el Grupo Phoenix Shanti ha estado proporcionando un salvavidas a hombres y mujeres en el Valle del Sol, proporcionando servicios de hospicio a la vivienda durante sus décadas de existencia.';
                } else {
                    return 'Since the onset of the HIV/AIDS pandemic, Phoenix Shanti Group has been providing a lifeline to men and women in the Valley of the Sun, providing services from hospice to housing over its decades of existence.';
                }
            },
            bullet1() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Ayudamos a hombres y mujeres VIH + a morir con dignidad';
                } else {
                    return 'We helped HIV+ men and women die with dignity';
                }
            },
            bullet2() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Ayudamos a las enfermeras a cuidarlas';
                } else {
                    return 'We trained nurse assists to care for them';
                }
            },
            bullet3() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Ayudamos a los adictos a recuperar sus vidas';
                } else {
                    return 'We helped addicts recover their lives';
                }
            },
            bullet4() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Albergamos a los desamparados cuando nadie más';
                } else {
                    return 'We housed the homeless when no one else would';
                }
            },
        }
    }
</script>