<template>
    <div class="main-block">

        <!-- Page heading one starts -->

        <div class="page-heading-one">
            <h2>{{ title }}</h2>
            <p class="bg-color">{{ subtitle }}</p>
        </div>

        <!-- Page heading one ends -->

        <div class="container">

            <div class="about-us-three">
                <!-- About section hero -->
                <div class="about-hero">
                    {{ hero }}
                </div>

                <slot name="copy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title', 'subtitle', 'hero']
    }
</script>