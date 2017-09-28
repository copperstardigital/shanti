<template>
    <psg-page :article="article">
        <div slot="copy">
            {{ refer }} <router-link to="/site-map">{{ siteMap }}.</router-link>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    headline: (this.$cookie.get('language') === 'es') ? 'Página no encontrada' : 'Page Not Found',
                    subhead: (this.$cookie.get('language') === 'es') ? 'error 404' :'404 Error',
                    callout: (this.$cookie.get('language') === 'es') ? 'Lo sentimos, pero no hemos podido encontrar la página para la que está buscando. Tal vez usted ha seguido un vínculo obsoleto, o tal vez la página se ha movido. Por favor, inténtelo de nuevo más tarde.' :'We\'re sorry but we could not find the page for which you are looking. Perhaps you have followed an outdated link, or maybe the page has moved. Please try again later.',
                    body: (this.$cookie.get('language') === 'es') ? '' : ''
                },
            }
        },
        computed: {
            refer() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Por favor, consulte nuestro mapa del sitio para obtener una lista de las páginas disponibles:';
                } else {
                    return 'Please refer to our site map for a list of available pages:';
                }
            },
            siteMap() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Mapa de sitio';
                } else {
                    return 'Site Map';
                }
            }
        }
    }
</script>
