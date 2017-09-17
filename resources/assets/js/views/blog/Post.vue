<template>
    <psg-page :title="post.headline" :subtitle="post.category.category_name" :hero="post.hero_text">
        <div slot="copy">
            <div v-if="post.image">
                <div class="row">
                    <div class="col-md-4">
                        <div v-if="post.link">
                            <a :href="post.link" target="_blank">
                                <img :src="'/uploads/' + post.image" class="img-responsive" :alt="post.headline" />
                            </a>
                        </div>
                        <div v-i>
                            <img :src="'/uploads/' + post.image" class="img-responsive" :alt="post.headline" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div v-html="post.body"></div>
                        <div v-if="post.link">
                            <a :href="post.link" class="btn btn-primary pull-right">More Information</a>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="!post.image">
                <div v-html="post.body"></div>
                <div v-if="post.link">
                    <a :href="post.link" class="btn btn-primary pull-right">More Information</a>
                </div>
            </div>

        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    headline: '',
                    category : {
                        category_name: ''
                    },
                    hero_text: '',
                    body: ''
                }
            }
        },
        methods: {
            getPost(slug) {
                axios.get('/posts/' + slug)
                    .then(response => {
                        this.post = response.data.post;
                    })
                    .catch(error => console.log(error));
            }
        },
        watch: {
            '$route' (to, from) {
                this.getPost(to.params.slug);
            }
        },
        beforeMount() {
            this.getPost(this.$route.params.slug);
        }
    }
</script>