<template>
    <psg-page :article="article">
        <div slot="copy">
            <div v-html="article.body"></div>
        </div>
    </psg-page>
</template>
<template>
    <psg-page :article="article">
        <div slot="copy">
            <psg-staff></psg-staff>
        </div>
    </psg-page>
</template>

<script>
    import Staff from '../../components/contact/Staff';

    export default {
        data() {
            return {
                article: {
                    headline: 'Staff',
                    subhead: 'Our Team',
                    callout: 'Our talented and diverse team has provided support for many people infected with or affected by HIV/AIDS over the years. Through these efforts, many lives have been transformed, both staff and clients.'
                },
                staff: []
            }
        },
        components: {
            'psg-staff': Staff
        }
    }
</script>