<template>
    <psg-page title="Page Not Found" subtitle="404 Error" hero="We're sorry but we could not find the page for which you are looking. Perhaps you have followed an outdated link, or maybe the page has moved. Please try again later.">
        <div slot="copy"></div>
    </psg-page>
</template>

<script>
    export default {
        mounted() {
            document.title = 'Page Not Found | Phoenix Shanti Group';
        }
    }
</script>