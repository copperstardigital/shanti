<template>
    <psg-page :article="article">
        <div slot="copy">
            <div v-for="(article, index) in articles" key="index">
                <h3>{{ article.headline }}</h3>
                <h5>{{ article.subhead }}</h5>
                <p>{{ article.callout }}</p>

                <router-link :to="article.link" class="btn btn-color pull-right">Read More...</router-link>
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
                articles: []
            }
        },
        mounted() {
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
                })
                .catch(error =>{
                    console.error(error);
                });
        }
    }
</script>