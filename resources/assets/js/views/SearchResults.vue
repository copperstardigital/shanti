<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div class="row">
                <div class="col-md-6">
                    <h1>Articles</h1>

                    <div v-if="articles">
                        <div v-for="(article, index) in articles" key="index">
                            <h3>{{ article.headline }}</h3>
                            <h5>{{ article.subhead }}</h5>
                            <p>{{ article.callout }}</p>

                            <router-link :to="article.link" class="btn btn-color pull-right">Read More...</router-link>
                            <br style="clear:both;" />

                            <hr />
                        </div>
                    </div>
                    <div v-if="!articles">
                        <p>Your search returned no articles.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <h1>Blog</h1>

                    <div v-if="posts">
                        <div v-for="(post, index) in posts" key="index">
                            <h3>{{ post.headline }}</h3>
                            <div v-html="post.hero_text"></div>

                            <router-link :to="'/blog/' + post.slug" class="btn btn-color pull-right">Read More...</router-link>

                            <br style="clear:both;" />

                            <hr />
                        </div>
                    </div>
                    <div v-if="!posts">
                        <p>Your search returned no blog posts.</p>
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
                article: {
                    headline: 'Search Results',
                    subhead: 'Keywords: "' + this.$route.query.keywords + '"',
                    callout: 'Below are the results of your search.',
                    body: ''
                },
                articles: [],
                posts: []
            }
        },
        created() {
            this.loading = true;

            axios.get('/search/?keywords=' + this.$route.query.keywords)
                .then(response => {
                    let articles = response.data.articles;
                    let reformatted = [];
                    articles.forEach(article => {
                        reformatted.push({
                            headline: article.en_headline,
                            subhead: article.en_subhead,
                            callout: article.en_callout,
                            link: article.link
                        });
                    });

                    this.articles = reformatted;
                    this.posts = response.data.posts;

                    this.loading = false;
                })
                .catch(error =>{
                    console.error(error);
                });
        }
    }
</script>