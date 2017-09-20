<template>
    <!-- Outer Starts -->
    <div class="outer">

        <!-- Top bar starts -->
        <div class="top-bar">
            <div class="container">

                <!-- Contact starts -->
                <div class="tb-contact pull-left">
                    <!-- Email -->
                    <i class="fa fa-envelope color"></i> &nbsp; <a href="mailto:info@shantiaz.org">info@shantiaz.org</a>
                    &nbsp;&nbsp;
                    <!-- Phone -->
                    <i class="fa fa-phone color"></i> &nbsp;(602) 279-0008
                </div>
                <!-- Contact ends -->

                <!-- Langauge starts -->
                <!--{{&#45;&#45;<div class="tb-language dropdown pull-right">&#45;&#45;}}-->
                <!--{{&#45;&#45;<a href="#" data-target="#" data-toggle="dropdown"><i class="fa fa-globe"></i> English <i class="fa fa-angle-down color"></i></a>&#45;&#45;}}-->
                <!--{{&#45;&#45;&lt;!&ndash; Dropdown menu with languages &ndash;&gt;&#45;&#45;}}-->
                <!--{{&#45;&#45;<ul class="dropdown-menu dropdown-mini" role="menu">&#45;&#45;}}-->
                    <!--{{&#45;&#45;<li><a href="#">Spanish</a></li>&#45;&#45;}}-->
                    <!--{{&#45;&#45;</ul>&#45;&#45;}}-->
                <!--{{&#45;&#45;</div>&#45;&#45;}}-->
                <!-- Language ends -->

                <!-- Search section for responsive design -->
                <div class="tb-search pull-left">
                    <form role="form">
                        <!-- Input Group -->
                        <div class="input-group">
                            <input type="text" v-model="keywords" class="form-control" placeholder="Type Something">
                            <span class="input-group-btn">
                                <button class="btn btn-color" type="button">Search</button>
                            </span>
                        </div>
                    </form>
                    <a href="#" class="b-dropdown"><i class="fa fa-search square-2 rounded-1 bg-color white"></i></a>
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
                    <div class="col-md-2">
                        <!-- Logo section -->
                        <div class="logo">
                            <router-link to="/" exact><img width="175px" src="/img/shanti_logo.png" alt="Phoenix Shanti Group"></router-link>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <psg-nav></psg-nav>
                    </div>

                    <div class="col-md-2">

                        <!-- Search section -->
                        <div class="head-search pull-right">
                            <form>
                                <div class="input-group">
                                    <input class="form-control" maxlength="100" name="keywords" placeholder="Enter keywords" type="search" v-model="keywords"/>
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
            </div>
        </div>
    </div>

        <!-- Header two ends -->
</template>

<script>
    import Nav from './Nav';

    export default {
        data() {
            return {
                keywords: ''
            }
        },
        methods: {
            search() {
                this.$router.push({ path: 'search-results', query: { keywords : this.keywords }});
            }
        },
        components: {
            'psg-nav': Nav
        }
    }
</script>