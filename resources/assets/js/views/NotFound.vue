<template>
    <psg-page :article="article">
        <div slot="copy">
            <div v-html="article.body"></div>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {
                    headline: 'Page Not Found',
                    subhead: '404 Error',
                    callout: 'We\'re sorry but we could not find the page for which you are looking. Perhaps you have followed an outdated link, or maybe the page has moved. Please try again later.',
                    body: ''
                }
            }
        }
    }
</script>