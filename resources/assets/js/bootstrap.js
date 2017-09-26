import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = Vue;
Vue.use(VueRouter);

import axios from 'axios';
window.axios = axios;

var cacheModule = require('cache-service-cache-module');
var cache = new cacheModule({storage: 'session', defaultExpiration: 60});

// Require superagent-cache-plugin and pass your cache module
var superagentCache = require('superagent-cache-plugin')(cache, {
    expiration: 60 * 30
});
window.saCache = superagentCache;

var http = require('superagent');
window.http = http;

import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import VueCookie from 'vue-cookie';
Vue.use(VueCookie);

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';