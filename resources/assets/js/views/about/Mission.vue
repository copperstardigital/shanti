<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
            <tabs nav-style="tabs" justified>
                <tab :header="whatWeDo">
                    <p>{{ whatWeDoText }}</p>
                </tab>
                <tab :header="whyChooseUs">
                    <p>{{ whyChooseUsText }}</p>
                </tab>
                <tab :header="whatMakesUsSpecial">
                    <p>{{ whatMakesUsSpecialText }}</p>
                </tab>
                <tab :header="testimonials">
                    <div class="row">
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/GSrxnKnB0JY" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/QiCZSykNJic" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/1o-Fxo09jEg" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/UuXzma7H404" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/u_LYZ0IQP0U" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="col-sm-4">
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZeIWUzvYsoE" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </tab>
            </tabs>
            <psg-speak :text="article.body" :loading="loading" primary="true"></psg-speak>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';
    import { tabs } from 'vue-strap';
    import { tab } from 'vue-strap';

    export default {
        data() {
            return {
                article: {}
            }
        },
        created() {
            this.loading = true;

            http
                .get('/articles/2')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;

                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: this.replaceYearCount(article.en_body)
                    };

                    if (this.$cookie.get('language') === 'es') {
                        this.article = {
                            headline: article.es_headline,
                            subhead: article.es_subhead,
                            callout: article.es_callout,
                            body: article.es_body
                        };
                    }

                    this.loading = false;
                }).catch(error => {
                    console.error(error);
                });
        },
        computed: {
            yearsSinceFounding() {
                return new Date().getFullYear() - new Date('1987-09-01').getFullYear();
            },
            whatWeDo() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Qué hacemos';
                } else {
                    return 'What We Do'
                }
            },
            whyChooseUs() {
                if (this.$cookie.get('lang') === 'es') {
                    return '¿Por qué elegirnos?';
                } else {
                    return 'Why Choose Us?'
                }
            },
            whatMakesUsSpecial() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Lo que nos hace especiales';
                } else {
                    return 'What Makes Us Special'
                }
            },
            testimonials() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Testimonios';
                } else {
                    return 'Testimonials'
                }
            },
            whatWeDoText() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'El grupo Phoenix Shanti proporciona apoyo, asesoramiento, vivienda y otros servicios a las personas infectadas o afectadas por el VIH / SIDA. De una forma u otra, Shanti ha estado sirviendo a la comunidad del VIH en el metro Phoenix durante 30 años.';
                } else {
                    return 'The Phoenix Shanti Group provides support, counseling, housing and other services to people infected with or affected by HIV/AIDS. In one form or another, Shanti has been serving the the HIV community in metro Phoenix for 30 years.'
                }
            },
            whyChooseUsText() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Shanti proporciona un acercamiento vertical a los servicios del VIH. Algunos de nuestros clientes están sin hogar cuando entran en el programa Shanti. La mayoría de los clientes, pero no todos, entran en los servicios de vivienda al entrar en Shanti. En la vivienda, los clientes pueden relacionarse con otras personas que viven con el VIH. Algunos están recién infectados, otros han estado viviendo con el virus durante muchos años. A través del asesoramiento, la medicación y el apoyo de los compañeros, los clientes aprenden a volver a entrar en el mundo, sin tener que depender de las drogas y el alcohol. En nuestro programa de rehabilitación vocacional, los clientes obtienen valiosas habilidades de trabajo y experiencia. Para cuando se gradúan, los clientes están listos para enfrentarse al mundo de nuevo.';
                } else {
                    return 'Shanti provides a stem-to-stern approach to HIV services. Some of our clients are homeless when they enter the Shanti program. Most clients, but not all, enter housing services upon entry to Shanti. In housing, clients can relate to other people living with HIV. Some are newly infected, others have been living with the virus for many years. Through counseling, medication and peer support, clients learn how to re-enter the world, without having to rely on drugs and alcohol. In our vocational rehabilitation program, clients gain valuable work skills and experience. By the time they graduate, clients are ready to take on the world anew.'
                }
            },
            whatMakesUsSpecialText() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'A través del apoyo ilimitado proporcionado por Shanti, muchos clientes se vuelven muy aficionados de la agencia y su personal. Shanti tiene un sentimiento familiar. Muchos de los clientes se hacen amigos. Después de la graduación, algunos antiguos clientes vuelven a ayudar a la organización de varias maneras. Algunos sirven en la Junta. Otros se ofrecen como voluntarios para los comités. Este sitio web fue creado por un antiguo cliente, quien redimió su vida a través del programa Shanti. En Shanti, a través de su plan de estudios, muchos clientes han abordado cuestiones de por vida y ahora que están limpios y sobrios, sienten un inmenso sentido de gratitud que quieren pagar.';
                } else {
                    return 'Through the boundless support provided by Shanti, many clients become quite fond of the agency and its staff. There is a familial feeling to Shanti. Many of the clients become friends. After graduation, some former clients come back to help the organization in various ways. Some serve on the Board. Others volunteer for committees. This website was created by a former client, who redeemed his life through the Shanti program. At Shanti, through its curriculum, many clients have tackled lifelong issues and now that they are clean and sober, they feel an immense sense of gratitude that they want to pay forward.'
                }
            }
        },
        methods: {
            replaceYearCount(text) {
                let yearsSinceFounding = new Date().getFullYear() - new Date('1987-09-01').getFullYear();
                return text.replace('{{ yearsSinceFounding }}', yearsSinceFounding)
            }
        },
        components: {
            'psg-speak': TextToSpeech,
            tabs: tabs,
            tab: tab
        }
    }
</script>