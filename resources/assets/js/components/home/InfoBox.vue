<template>
    <div class="col-md-3 col-sm-6">
        <!-- Icon Box Eight Item -->
        <div class="icon-box-8-item" :class="box.color">
            <!-- Icon Box Eight Icon -->
            <div class="icon-box-8-icon">
                <a href="#" class="icon-box-8-icon-top"><i :class="box.icon"></i></a>
                <a href="#" class="icon-box-8-icon-bottom"><i :class="box.icon"></i></a>
            </div>
            <div v-if="box.link.match('http')">
                <h4><a :href="box.link" target="_blank">{{ box.en_title }}</a></h4>
            </div>
            <div v-else="!box.link.match('http')">
                <h4><router-link :to="box.link">{{ box.en_title }}</router-link></h4>
            </div>
            <!-- Paragraph -->
            <p>{{ box.en_copy }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['box']
    }
</script>