<template>
    <div class="main-block">

        <!-- Page heading one starts -->

        <div class="page-heading-one">
            <h2>{{ article.headline }}</h2>
            <p class="bg-color">{{ article.subhead }}</p>
        </div>

        <!-- Page heading one ends -->

        <div class="container">

            <div class="text-center">
                <i v-show="loading" class="fa fa-refresh fa-spin fa-4x"></i>
            </div>

            <div class="about-us-three">
                <!-- About section hero -->
                <div class="about-hero">
                    <div v-html="article.callout"></div>
                </div>

                <hr />

                <slot name="copy"></slot>
                <slot name="posts"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['article', 'loading']
    }
</script>