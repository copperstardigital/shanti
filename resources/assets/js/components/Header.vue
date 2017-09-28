<template>
    <!-- Outer Starts -->
    <div class="outer">

        <!-- Top bar starts -->
        <div class="top-bar">
            <div class="container">

                <!-- Contact starts -->
                <div class="tb-contact pull-left">
                    <!-- Email -->
                    <i class="fa fa-envelope"></i> &nbsp; <a href="mailto:info@shantiaz.org">info@shantiaz.org</a>
                    &nbsp;&nbsp;
                    <!-- Phone -->
                    <i class="fa fa-phone"></i> &nbsp;(602) 279-0008
                </div>
                <!-- Contact ends -->

                <div class="tb-language dropdown pull-right">
                    <div class="row">
                        <div class="col-sm-7">
                            <p class="pull-right"><i class="fa fa-globe"></i> Language/Lengua</p>
                        </div>
                        <div class="col-sm-5">
                            <v-select v-model="language" @change="setLanguage" placeholder="Choose / Escoge" justified clear-button close-on-select>
                                <v-option value="en">English</v-option>
                                <v-option value="es">Espa&ntilde;ol</v-option>
                            </v-select>
                        </div>
                    </div>
                </div>

                <!-- Search section for responsive design -->
                <div class="tb-search pull-left">
                    <form>
                        <div class="input-group">
                            <input class="form-control" maxlength="100" name="keywords" :placeholder="typeKeywords" type="search" v-model="keywords" @keypress="disableEnter"/>
                            <span class="input-group-btn" style="font-size: 15px;">
                                <a href="#" @click.prevent="search">
                                    <i class="fa fa-search square-2 rounded-1 bg-color white" style="display:block; height:36px; padding-top: 4px;"></i>
                                </a>
                            </span>
                        </div>
                    </form>
                </div>
                <!-- Search section ends -->

                <!-- Social media starts -->
                <div class="tb-social pull-right">
                    <div class="brand-bg text-right">
                        <!-- Brand Icons -->
                        <a target="_blank" href="http://www.facebook.com/phoenixshantigroup" class="facebook"><i class="fa fa-facebook square-2 rounded-1"></i></a>
                        <a target="_blank" href="http://www.facebook.com/shanti2ndchances" class="facebook"><i class="fa fa-facebook square-2 rounded-1"></i></a>
                        <a target="_blank" href="https://twitter.com/PhoenixShanti" class="twitter"><i class="fa fa-twitter square-2 rounded-1"></i></a>
                        <a target="_blank" href="https://www.youtube.com/user/PhoenixShantiGroup" class="youtube"><i class="fa fa-youtube square-2 rounded-1"></i></a>
                    </div>
                </div>
                <!-- Social media ends -->

                <div class="clearfix"></div>
            </div>
        </div>

        <!-- Top bar ends -->

        <!-- Header two Starts -->
        <div class="header-2">

            <!-- Container -->
            <div class="container">
                <div class="row">
                    <div class="col-sm-3 col-sm-offset-9">

                        <!-- Search section -->
                        <div class="head-search pull-right">
                            <form>
                                <div class="input-group">
                                    <input class="form-control" maxlength="100" name="keywords" :placeholder="typeKeywords" type="search" v-model="keywords" @keypress="disableEnter"/>
                                    <span class="input-group-btn" style="font-size: 15px;">
                                        <a href="#" @click.prevent="search">
                                            <i class="fa fa-search square-2 rounded-1 bg-color white" style="display:block; height:36px; padding-top: 4px;"></i>
                                        </a>
                                    </span>
                                </div>
                            </form>
                        </div>
                        <!-- Search section ends -->
                        <div class="clearfix"></div>

                    </div>
                </div>
                <div class="row" style="margin-top: 10px;">
                    <div class="col-md-2">
                        <!-- Logo section -->
                        <div class="logo">
                            <router-link to="/" exact><img width="175px" src="/img/shanti_logo.png" alt="Phoenix Shanti Group"></router-link>
                        </div>
                    </div>
                    <div class="col-md-10">
                        <psg-nav></psg-nav>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <!-- Header two ends -->
</template>

<script>
    import Nav from './Nav';
    import { select } from 'vue-strap';
    import { option } from 'vue-strap';

    export default {
        data() {
            return {
                keywords: '',
                language: this.$cookie.get('language')
            }
        },
        methods: {
            search() {
                this.$router.push({ path: 'search-results', query: { keywords : this.keywords }});
            },
            disableEnter() {
                let evt = (evt) ? evt : ((window.event) ? window.event : null);
                let node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
                if ((evt.keyCode === 13) && (node.type === "search")) { return false; }
            },
            setLanguage(language) {
                if (language !== '' && language !== this.$cookie.get('language') && language !== null) {
                    this.$cookie.set('language', language, 1);
                    window.location.reload();
                }
            }
        },
        computed: {
            typeKeywords() {
                if (this.$cookie.get('lang') === 'es') {
                    return 'Palabras clave';
                } else {
                    return 'Enter keywords';
                }
            }
        },
        components: {
            'psg-nav': Nav,
            'v-select': select,
            'v-option': option
        }
    }
</script>