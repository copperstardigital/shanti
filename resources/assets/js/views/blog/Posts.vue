<template>
    <psg-page :article="article" :loading="loading">
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
                                <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">Read Post</router-link>
                                <a :href="post.link" class="btn btn-default pull-right">More Information</a>
                            </div>
                            <div v-if="!post.link">
                                <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">Read Post</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="!post.image">
                    <div v-html="post.body"></div>
                    <div v-if="post.link">
                        <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">Read Post</router-link>
                        <a :href="post.link" class="btn btn-default pull-right">More Information</a>
                    </div>
                    <div v-if="!post.link">
                        <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">Read Post</router-link>
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
                article: {},
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
        },
        created() {
            this.loading = true;

            http
                .get('/articles/11')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;

                    this.article = {
                        headline: article.en_headline,
                        subhead: article.en_subhead,
                        callout: article.en_callout,
                        body: article.en_body
                    };

                    this.loading = false;
                }).catch(error => {
                console.error(error);
            });
        }
    }
</script>