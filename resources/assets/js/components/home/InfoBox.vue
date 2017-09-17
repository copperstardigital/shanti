<template>
    <div class="col-md-3 col-sm-6">
        <!-- Icon Box Eight Item -->
        <div class="icon-box-8-item" :class="color">
            <!-- Icon Box Eight Icon -->
            <div class="icon-box-8-icon">
                <a href="#" class="icon-box-8-icon-top"><i :class="icon"></i></a>
                <a href="#" class="icon-box-8-icon-bottom"><i :class="icon"></i></a>
            </div>
            <!-- Heading -->
            <h4><router-link :to="link">{{ headline }}</router-link></h4>
            <!-- Paragraph -->
            <p>{{ copy }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['color', 'icon', 'headline', 'link', 'copy']
    }
</script>