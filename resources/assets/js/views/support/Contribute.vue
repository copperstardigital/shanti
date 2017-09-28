<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
            <div class="row">
                <div class="col-sm-6">
                    <a href="https://smile.amazon.com/ch/86-0592079">
                        <img src="/img/amazon.png" class="img-responsive" alt="Amazon Smile" />
                    </a>
                </div>
                <div class="col-sm-6">
                    <h1>Amazon Smile</h1>
                    <p v-html="amazonSmile"></p>
                </div>
            </div>

            <hr />

            <div class="row">
                <div class="col-sm-6">
                    <a href="http://www.fryscommunityrewards.com" target="_blank">
                        <img src="/img/frys.jpg" class="img-responsive" alt="Fry's Community Rewards" />
                    </a>
                </div>
                <div class="col-sm-6">
                    <h1>{{ frysHeader }}</h1>
                    <p v-html="frys"></p>
                </div>
            </div>
        </div>
    </psg-page>
</template>

<script>
    import TextToSpeech from '../../components/misc/TextToSpeech';

    export default {
        data() {
            return {
                article: {}
            }
        },
        computed: {
            frysHeader() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Recompensas comunitarias de Fry\'s';
                } else {
                    return 'Fry\'s Community Rewards';
                }
            },
            amazonSmile() {
                if (this.$cookie.get('language') === 'es') {
                    return '\n' +
                        'Como parte de sus esfuerzos filantrópicos comunitarios, Amazon ha creado un programa para ayudar a las organizaciones sin fines de lucro a recaudar dinero a través de compras en su sitio web. El programa se llama Amazon Smile y se encuentra en <a href="https://smile.amazon.com/ch/86-0592079" target="_blank"> esta ubicación </a>. Primero, vincule su cuenta de Amazon al grupo de Phoenix Shanti en un proceso de instalación fácil. Entonces, cada vez que hagas compras en este acoplamiento, Amazon contribuirá el 0.5% del precio de compra a Shanti.';
                } else {
                    return 'As part of its community philanthropic efforts, Amazon has created a program to help non-profits raise money through purchases on its website. The program is called Amazon Smile and is located at <a href="https://smile.amazon.com/ch/86-0592079" target="_blank">this location</a>. First, link your Amazon account to the Phoenix Shanti Group in an easy setup process. Then, every time you shop at this link, Amazon will contribute 0.5% of the purchase price to Shanti.';
                }
            },
            frys() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Tan fácil como es configurar su cuenta de Amazon para beneficiar a Shanti, la creación de su tarjeta de Fry para ayudar a Shanti es aún más fácil. Simplemente siga los tres pasos en el gráfico de la izquierda. Entonces, cada vez que hagas una compra en Fry\'s, una porción de ella ayudará a Shanti. Para obtener más información, vaya a <a href="http://www.fryscommunityrewards.com" target="_blank"> su sitio web </a>.';
                } else {
                    return 'As easy as it is to set up your Amazon account to benefit Shanti, setting up your Fry\'s card to help Shanti is even easier. Just follow the the three steps on the graphic at left. Then, every time you make a purchase at Fry\'s, a portion of it will help Shanti. For more information, go to <a href="http://www.fryscommunityrewards.com" target="_blank">their website</a>.';
                }
            }
        },
        created() {
            this.loading = true;

            http
                .get('/articles/15')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;

                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: article.en_body
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
        components: {
            'psg-speak': TextToSpeech
        }
    }
</script>