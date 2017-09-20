import VueRouter from 'vue-router';

let router = new VueRouter({
    routes : [
        { path : '/',  component: require('./views/Home'), meta: { title: 'Home'}},
        { path: '/about/cultural-competency', component: require('./views/about/CulturalCompetency'), meta: { title: 'Cultural Compentency'}},
        { path: '/about/history', component: require('./views/about/History'), meta: { title: 'History'}},
        { path: '/about/mission', component: require('./views/about/Mission'), meta: { title: 'Mission'}},
        { path: '/about/privacy-policy', component: require('./views/about/PrivacyPolicy'), meta: { title: 'Privacy Policy'}},
        { path: '/contact/board', component: require('./views/contact/Board'), meta: { title: 'Board of Directors'}},
        { path: '/contact/office', component: require('./views/contact/Office'), meta: { title: 'Main Office'}},
        { path: '/contact/staff', component: require('./views/contact/Staff'), meta: { title: 'Staff'}},
        { path: '/services/housing', component: require('./views/services/Housing'), meta: { title: 'HIV+ Housing'}},
        { path: '/services/hiv', component: require('./views/services/Services'), meta: { title: 'HIV Services'}},
        { path: '/support/donate', component: require('./views/support/Donate'), meta: { title: 'Donate'}},
        { path: '/support/resources', component: require('./views/support/Resources'), meta: { title: 'Resources'}},
        { path: '/support/volunteer', component: require('./views/support/Volunteer'), meta: { title: 'Volunteer'}},
        // { path: '/about', component: require('./views/About'), meta: { title: 'About'}},
        { path: '/blog', component: require('./views/blog/Posts'), meta: { title: 'Blog'}},
        { path: '/blog/30', redirect: '/30'},
        { path: '/blog/:slug', name: 'blog/view', component: require('./views/blog/Post'), meta: { title: ''}},
        { path: '/events', component: require('./views/events/Events'), meta: { title: 'Events'}},
        { path: '/events/:slug', name: 'event/view', component: require('./views/events/Event'), meta: { title: ''}},
        { path: '/getting-started', component: require('./views/about/GettingStarted'), meta: { title: 'Getting Started'}},
        { path: '/site-map', component: require('./views/Sitemap'), meta: { title: 'Site Map'}},
        { path: '/search-results', component: require('./views/SearchResults'), meta: { title: 'Search Results'}},
        { path: '/30', component: require('./views/ThirtiethAnniversary'), meta: { title: '30th Anniversary'}},
        { path : '*',  component: require('./views/NotFound'), meta: { title: 'Page Not Found'}},
    ]
});

router.beforeEach((to, from, next) => {
    if (to.name === 'blog/view') {
        let slug = to.params.slug;
        axios.get('/posts/' + slug)
            .then(response => {
                document.title = response.data.post.headline + ' | Phoenix Shanti Group';
            })
            .catch(error => console.log(error));
    } else if (to.name === 'event/view') {
        let slug = to.params.slug;
        axios.get('/events/' + slug)
            .then(response => {
                document.title = response.data.event.event_name + ' | Phoenix Shanti Group';
            })
            .catch(error => console.log(error));
    }  else {
        document.title = to.meta.title + ' | Phoenix Shanti Group';
    }
    next()
});

export default router;