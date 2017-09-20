<template>
    <psg-page :article="article" :loading="loading">
        <div slot="copy">
            <div v-html="article.body"></div>
        </div>
    </psg-page>
</template>

<script>
    export default {
        data() {
            return {
                article: {}
            }
        },
        beforeRouteEnter(to, from, next) {
            http
                .get('/articles/3')
                //.use(saCache)
                .then(response => {
                    let article = response.body.article;
                    next(vm => {
                        vm.article = {
                            headline: article.en_headline,
                            subhead: article.en_subhead,
                            callout: article.en_callout,
                            body: article.en_body
                        };
                    });
                }).catch(error => {
                console.error(error);
            });
        }
    }
</script>