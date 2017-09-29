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

const Testimonials = resolve => {
    require.ensure(['./views/about/Testimonials'], () => {
        resolve(require('./views/about/Testimonials'));
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

const Contribute = resolve => {
    require.ensure(['./views/support/Contribute'], () => {
        resolve(require('./views/support/Contribute'));
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
        { path : '/',  component: Home, meta: { title: { en: 'Home', es : 'Casa'}}},
        { path: '/about/cultural-competency', component: CulturalCompetency, meta: { title: { en: 'Cultural Competency', es : 'Competencia cultural'}}},
        { path: '/about/history', component: History, meta: { title: { en: 'History', es: 'Historia'}}},
        { path: '/about/mission', component: Mission, meta: { title: { en: 'Mission', es: 'Nuestra misión' }}},
        { path: '/about/privacy-policy', component: PrivacyPolicy, meta: { title: { en: 'Privacy Policy', es: 'Política de privacidad'}}},
        { path: '/about/testimonials', component: Testimonials, meta: { title: { en: 'Testimonials', es: 'Testimonios'}}},
        { path: '/contact/board', component: Board, meta: { title: { en: 'Board of Directors', es: 'Junta Directiva'}}},
        { path: '/contact/office', component: Office, meta: { title: { en: 'Main Office', es: 'Oficina principal'}}},
        { path: '/contact/staff', component: Staff, meta: { title: { en: 'Staff', es: 'Personal'}}},
        { path: '/services/housing', component: Housing, meta: { title: { en: 'Housing', es: 'Alojamiento'}}},
        { path: '/services/hiv', component: Services, meta: { title:{ en: 'HIV Services', es: 'Servicios de VIH / SIDA'}}},
        { path: '/support/donate', component: Donate, meta: { title: { en: 'Donate', es: 'Donar'}}},
        { path: '/support/resources', component: Resources, meta: { title: { en: 'Resources', es: 'Recusos'}}},
        { path: '/support/contribute', component: Contribute, meta: { title: { en: 'Contribute', es: 'Contribuir'}}},
        { path: '/support/volunteer', component: Volunteer, meta: { title: { en: 'Volunteer', es: 'Voluntario'}}},
        // { path: '/about', component: require('./views/About'), meta: { title: 'About'}},
        { path: '/blog', component:Posts, meta: { title: { en: 'Blog', es: 'Blog'}}},
        { path: '/blog/30', redirect: '/30'},
        { path: '/blog/:slug', name: 'blog/view', component: Post, meta: { title: { en: 'Blog', es: 'Blog'}}},
        { path: '/events', component: Events, meta: { title: { en: 'Events', es: 'Eventos'}}},
        { path: '/events/:slug', name: 'event/view', component: Event, meta: { title: { en: '', es: ''}}},
        { path: '/getting-started', component: GettingStarted, meta: { title: { en: 'Getting Started', es: 'Emezpando'}}},
        { path: '/site-map', component: SiteMap, meta: { title: { en: 'Site Map', es: 'Mapa de Sitio'}}},
        { path: '/search-results', component: SearchResults, meta: { title: { en: 'Search Results', es: 'Resultados de la búsqueda'}}},
        { path: '/30', component: ThirtiethAnniversary, meta: { title:{ en: '30th Anniversary', es: 'Trigésimo aniversario'}}},
        { path : '*',  component: NotFound, meta: { title: { en: 'Page Not Found', es: 'Página no encontrada'}}}
    ]
});

router.beforeEach((to, from, next) => {
    let matches = document.cookie.match(new RegExp('language' + '=([^;]+)'));

    if (to.name === 'blog/view') {
        let slug = to.params.slug;
        axios.get('/posts/' + slug)
            .then(response => {
                if (matches !== null && matches[1] === 'es') {
                    document.title = response.data.post.es_headline + ' | Phoenix Shanti Group';
                } else {
                    document.title = response.data.post.en_headline + ' | Phoenix Shanti Group';
                }
            })
            .catch(error => console.log(error));
    } else if (to.name === 'event/view') {
        let slug = to.params.slug;
        axios.get('/events/' + slug)
            .then(response => {
                if (matches !== null && matches[1] === 'es') {
                    document.title = response.data.post.en_event_name + ' | Phoenix Shanti Group';
                } else {
                    document.title = response.data.event.en_event_name + ' | Phoenix Shanti Group';
                }
            })
            .catch(error => console.log(error));
    } else {
        if (matches !== null && matches[1] === 'es') {
            document.title = to.meta.title.es + ' | Grupo Phoenix Shanti';
        } else {
            document.title = to.meta.title.en + ' | Phoenix Shanti Group';
        }
    }
    next();
});

export default router;