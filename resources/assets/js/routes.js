import VueRouter from 'vue-router';

const Home = resolve => {
    require.ensure(['./views/Home'], () => {
        resolve(require('./views/Home'));
    })
};

const CulturalCompetency = resolve => {
    require.ensure(['./views/about/CulturalCompetency'], () => {
        resolve(require('./views/about/CulturalCompetency'));
    })
};

const History = resolve => {
    require.ensure(['./views/about/History'], () => {
        resolve(require('./views/about/History'));
    })
};

const Mission = resolve => {
    require.ensure(['./views/about/Mission'], () => {
        resolve(require('./views/about/Mission'));
    })
};

const PrivacyPolicy = resolve => {
    require.ensure(['./views/about/PrivacyPolicy'], () => {
        resolve(require('./views/about/PrivacyPolicy'));
    })
};

const Board = resolve => {
    require.ensure(['./views/contact/Board'], () => {
        resolve(require('./views/contact/Board'));
    })
};

const Office = resolve => {
    require.ensure(['./views/contact/Office'], () => {
        resolve(require('./views/contact/Office'));
    })
};

const Staff = resolve => {
    require.ensure(['./views/contact/Staff'], () => {
        resolve(require('./views/contact/Staff'));
    })
};

const Housing = resolve => {
    require.ensure(['./views/services/Housing'], () => {
        resolve(require('./views/services/Housing'));
    })
};

const Services = resolve => {
    require.ensure(['./views/services/Services'], () => {
        resolve(require('./views/services/Services'));
    })
};

const Donate = resolve => {
    require.ensure(['./views/support/Donate'], () => {
        resolve(require('./views/support/Donate'));
    })
};

const Resources = resolve => {
    require.ensure(['./views/support/Resources'], () => {
        resolve(require('./views/support/Resources'));
    })
};

const Volunteer = resolve => {
    require.ensure(['./views/support/Volunteer'], () => {
        resolve(require('./views/support/Volunteer'));
    })
};

const Posts = resolve => {
    require.ensure(['./views/blog/Posts'], () => {
        resolve(require('./views/blog/Posts'));
    })
};

const Post = resolve => {
    require.ensure(['./views/blog/Post'], () => {
        resolve(require('./views/blog/Post'));
    })
};

const Events = resolve => {
    require.ensure(['./views/events/Events'], () => {
        resolve(require('./views/events/Events'));
    })
};

const Event = resolve => {
    require.ensure(['./views/events/Event'], () => {
        resolve(require('./views/events/Event'));
    })
};

const GettingStarted = resolve => {
    require.ensure(['./views/about/GettingStarted'], () => {
        resolve(require('./views/about/GettingStarted'));
    })
};

const SiteMap = resolve => {
    require.ensure(['./views/SiteMap'], () => {
        resolve(require('./views/SiteMap'));
    })
};

const SearchResults = resolve => {
    require.ensure(['./views/SearchResults'], () => {
        resolve(require('./views/SearchResults'));
    })
};

const ThirtiethAnniversary = resolve => {
    require.ensure(['./views/ThirtiethAnniversary'], () => {
        resolve(require('./views/ThirtiethAnniversary'));
    })
};

const NotFound = resolve => {
    require.ensure(['./views/NotFound'], () => {
        resolve(require('./views/NotFound'));
    })
};

let router = new VueRouter({
    routes : [
        { path : '/',  component: Home, meta: { title: 'Home'}},
        { path: '/about/cultural-competency', component: CulturalCompetency, meta: { title: 'Cultural Compentency'}},
        { path: '/about/history', component: History, meta: { title: 'History'}},
        { path: '/about/mission', component: Mission, meta: { title: 'Mission'}},
        { path: '/about/privacy-policy', component: PrivacyPolicy, meta: { title: 'Privacy Policy'}},
        { path: '/contact/board', component: Board, meta: { title: 'Board of Directors'}},
        { path: '/contact/office', component: Office, meta: { title: 'Main Office'}},
        { path: '/contact/staff', component: Staff, meta: { title: 'Staff'}},
        { path: '/services/housing', component: Housing, meta: { title: 'HIV+ Housing'}},
        { path: '/services/hiv', component: Services, meta: { title: 'HIV Services'}},
        { path: '/support/donate', component: Donate, meta: { title: 'Donate'}},
        { path: '/support/resources', component: Resources, meta: { title: 'Resources'}},
        { path: '/support/volunteer', component: Volunteer, meta: { title: 'Volunteer'}},
        // { path: '/about', component: require('./views/About'), meta: { title: 'About'}},
        { path: '/blog', component:Posts, meta: { title: 'Blog'}},
        { path: '/blog/30', redirect: '/30'},
        { path: '/blog/:slug', name: 'blog/view', component: Post, meta: { title: ''}},
        { path: '/events', component: Events, meta: { title: 'Events'}},
        { path: '/events/:slug', name: 'event/view', component: Event, meta: { title: ''}},
        { path: '/getting-started', component: GettingStarted, meta: { title: 'Getting Started'}},
        { path: '/site-map', component: SiteMap, meta: { title: 'Site Map'}},
        { path: '/search-results', component: SearchResults, meta: { title: 'Search Results'}},
        { path: '/30', component: ThirtiethAnniversary, meta: { title: '30th Anniversary'}},
        { path : '*',  component: NotFound, meta: { title: 'Page Not Found'}},
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