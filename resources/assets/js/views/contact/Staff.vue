<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <psg-staff></psg-staff>

            <p>Professional photography by <a href="https://www.facebook.com/irisphotographyllc/" target="blank">Iris Photography, LLC</a>. Other photos from archives.</p>

            <a href="https://www.facebook.com/irisphotographyllc/" target="blank">
                <img src="/img/iris.png" alt="Iris Photography" class="img-responsive"  width="20%"/>
            </a>
        </div>
    </psg-page>
</template>

<script>
    import Staff from '../../components/contact/Staff';

    export default {
        data() {
            return {
                article: {
                    headline: (this.$cookie.get('language') === 'es') ? 'Personal' :'Staff',
                    subhead: (this.$cookie.get('language') === 'es') ? 'Nuestro equipo' : 'Our Team',
                    callout: (this.$cookie.get('language') === 'es') ? 'Nuestro talentoso y diverso equipo ha brindado apoyo a muchas personas infectadas o afectadas por el VIH / SIDA a lo largo de los años. A través de estos esfuerzos, muchas vidas se han transformado, personal y clientes.' : 'Our talented and diverse team has provided support for many people infected with or affected by HIV/AIDS over the years. Through these efforts, many lives have been transformed, both staff and clients.'
                },
                staff: [],
                loading: false
            }
        },
        components: {
            'psg-staff': Staff
        }
    }
</script>