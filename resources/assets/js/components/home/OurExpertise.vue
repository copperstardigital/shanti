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

                <h4 class="color">{{ treeOfLife }}</h4>

                <img src="/img/tree.jpg" class="img-responsive" alt="Tree of Life" />

                <p>{{ treeOfLifeText }}</p>

                <psg-speak :text="treeOfLifeText" primary="true"></psg-speak>

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
            treeOfLife() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Shanti Árbol de la vida';
                } else {
                    return 'Shanti Tree of Life';
                }
            },
            treeOfLifeText() {
                if (this.$cookie.get('language') === 'es') {
                    return '\n' +
                        'El Shanti Tree of Life, que predomina en la sala de terapia de grupo de Shanti, simboliza a muchos hombres y mujeres que hemos perdido ante la enfermedad del VIH / SIDA.';
                } else {
                    return 'The Shanti Tree of Life, which predominates the group therapy room at Shanti, symbolizes the many men and women we have lost to the disease of HIV/AIDS.';
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