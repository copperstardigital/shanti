<template>
    <!-- Navigation starts.  -->
    <div class="shanti-nav">
        <navbar placement="static" type="default">
            <!-- Brand as slot -->
            <router-link to="/" tag="li" exact=""><a>{{ home }}</a></router-link>
            <!-- You can use dropdown component -->
            <dropdown :text="about">
                <router-link to="/getting-started" tag="li"><a>{{ gettingStarted }}</a></router-link>
                <router-link to="/about/testimonials" tag="li"><a>{{ testimonials }}</a></router-link>
                <router-link to="/about/mission" tag="li"><a>{{ mission }}</a></router-link>
                <router-link to="/about/history" tag="li"><a>{{ history }}</a></router-link>
                <router-link to="/about/cultural-competency" tag="li"><a>{{ culturalCompetency }}</a></router-link>
                <router-link to="/about/privacy-policy" tag="li"><a>{{ privacyPolicy }}</a></router-link>
            </dropdown>
            <dropdown :text="support">
                <router-link to="/support/donate" tag="li"><a>{{ donate }}</a></router-link>
                <router-link to="/support/volunteer" tag="li"><a>{{ volunteer }}</a></router-link>
                <router-link to="/support/resources" tag="li"><a>{{ resources }}</a></router-link>
                <router-link to="/support/contribute" tag="li"><a>{{ contribute }}</a></router-link>
            </dropdown>
            <router-link to="/services/housing" tag="li"><a>{{ housing }}</a></router-link>
            <router-link to="/services/hiv" tag="li"><a>{{ services }}</a></router-link>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle">@shanti</a>
                <ul class="dropdown-menu">
                    <router-link to="/blog" tag="li"><a>Blog</a></router-link>
                    <router-link to="/events" tag="li"><a>{{ events }}</a></router-link>
                    <router-link to="/events/gallery" tag="li"><a>{{ gallery }}</a></router-link>
                </ul>
            </li>
            <li><a href="http://store.shantiaz.org">{{ store }}</a></li>
            <dropdown :text="contact">
                <router-link to="/contact/office" tag="li"><a>{{ office }}</a></router-link>
                <router-link to="/contact/staff" tag="li"><a>{{ staff }}</a></router-link>
                <router-link to="/contact/board" tag="li"><a>{{ board }}</a></router-link>
            </dropdown>
        </navbar>
    </div>
<!-- Navigation ends -->
</template>

<script>
    import { navbar, dropdown } from 'vue-strap';

    export default {
        components: {
            navbar,
            dropdown
        },
        computed: {
            home() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Casa';
                } else {
                    return 'Home'
                }
            },
            about() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Acerca de';
                } else {
                    return 'About'
                }
            },
            contact() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Contacto';
                } else {
                    return 'Contact'
                }
            },
            gettingStarted() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Empezando';
                } else {
                    return 'Getting Started'
                }
            },
            testimonials() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Testimonios';
                } else {
                    return 'Testimonials'
                }
            },
            mission() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Misión';
                } else {
                    return 'Mission'
                }
            },
            history() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Historia';
                } else {
                    return 'History'
                }
            },
            culturalCompetency() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Competencia Cultural';
                } else {
                    return 'Cultural Competency'
                }
            },
            privacyPolicy() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Política de privacidad';
                } else {
                    return 'Privacy Policy'
                }
            },
            housing() {
                if (this.$cookie.get('language') === 'es') {
                    return '+ Vivienda VIH';
                } else {
                    return 'HIV+ Housing'
                }
            },
            services() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Servicios de VIH+';
                } else {
                    return 'HIV+ Services'
                }
            },
            support() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Apoyo';
                } else {
                    return 'Support'
                }
            },
            support() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Apoyo';
                } else {
                    return 'Support'
                }
            },
            donate() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Donar';
                } else {
                    return 'Donate'
                }
            },
            contribute() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Contribuir';
                } else {
                    return 'Contribute'
                }
            },
            volunteer() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Voluntario';
                } else {
                    return 'Volunteer'
                }
            },
            resources() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Recursos';
                } else {
                    return 'Resources'
                }
            },
            office() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Oficina';
                } else {
                    return 'Office'
                }
            },
            staff() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Personal';
                } else {
                    return 'Staff'
                }
            },
            board() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Junta Directiva';
                } else {
                    return 'Board of Directors'
                }
            },
            events() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Eventos';
                } else {
                    return 'Events'
                }
            },
            gallery() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Galería';
                } else {
                    return 'Gallery'
                }
            },
            store() {
                if (this.$cookie.get('language') === 'es') {
                    return 'Tienda';
                } else {
                    return 'Store'
                }
            }

        }
    }
</script>