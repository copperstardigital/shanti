<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
        </div>
    </psg-page>
</template>
<template>
    <psg-page title="Board of Directors" subtitle="Our Management" hero="">
        <div slot="copy"></div>
    </psg-page>
</template>

<script>
    export default {

    }
</script>