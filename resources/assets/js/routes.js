import VueRouter from 'vue-router';

let router = new VueRouter({
    routes : [
        { path : '/',  component: require('./views/Home')},
        { path: '/about/cultural-competency', component: require('./views/about/CulturalCompetency')},
        { path: '/about/history', component: require('./views/about/History')},
        { path: '/about/mission', component: require('./views/about/Mission')},
        { path: '/about/privacy-policy', component: require('./views/about/PrivacyPolicy')},
        { path: '/contact/board', component: require('./views/contact/Board')},
        { path: '/contact/office', component: require('./views/contact/Office')},
        { path: '/contact/staff', component: require('./views/contact/Staff')},
        { path: '/services/housing', component: require('./views/services/Housing')},
        { path: '/services/hiv', component: require('./views/services/Services')},
        { path: '/support/donate', component: require('./views/support/Donate')},
        { path: '/support/resources', component: require('./views/support/Resources')},
        { path: '/support/volunteer', component: require('./views/support/Volunteer')},
        { path: '/about', component: require('./views/About')},
        { path: '/getting-started', component: require('./views/GettingStarted')},
        { path : '*',  component: require('./views/NotFound')},
    ]
});

export default router;