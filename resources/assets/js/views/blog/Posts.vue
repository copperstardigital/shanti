<template>
    <psg-page title="Blog" subtitle="What's Happening at Shanti" hero="Follow what's happening at the Phoenix Shanti Group on this page. You'll find news about what's happening at Shanti, as well as postings of Shanti events.">
        <div slot="posts">
            <div v-for="(post, index) in posts" key="index">
                <div v-if="post.image">
                    <div class="row">
                        <div class="col-md-4">
                            <div v-if="post.link">
                                <a :href="post.link" target="_blank">
                                    <img :src="'/uploads/' + post.image" class="img-responsive" :alt="post.headline" />
                                </a>
                            </div>
                            <div v-if="post.image && !post.link">
                                <img :src="'/uploads/' + post.image" class="img-responsive" :alt="post.headline" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div v-html="post.body"></div>
                            <div v-if="post.link">
                                <a :href="post.link" class="btn btn-color pull-right">More Information</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!post.image">
                    <div v-html="post.body"></div>
                    <div v-if="post.link">
                        <a :href="post.link" class="btn btn-color pull-right">More Information</a>
                    </div>
                </div>
            </div>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        methods: {
            getPosts() {
                http
                    .get('/posts')
                    //.use(saCache)
                    .then(response => {
                        this.posts = response.body.posts;
                    }).catch(error => {
                    console.error(error);
                });
            }
        },
        beforeMount() {
            this.getPosts();
        }
    }
</script>