<template>
    <div class="main-block">

        <!-- Page heading one starts -->

        <div class="page-heading-one">
            <h2>Page Not Found</h2>
            <p class="bg-color">404 Error</p>
        </div>

        <!-- Page heading one ends -->

        <div class="container">
            <div class="about-us-three">
                <!-- About section hero -->
                <div class="about-hero">
                    <p>We're sorry but we could not find the page for which you are looking. Perhaps you have followed an outdated link, or maybe the page has moved. Please try again later.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            document.title = 'Page Not Found | Phoenix Shanti Group';
        }
    }
</script>