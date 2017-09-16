import './bootstrap';
import router from './routes';

Vue.component('header-area', require('./components/Header'));
Vue.component('nav-area', require('./components/Nav'));
Vue.component('footer-area', require('./components/Footer'));
Vue.component('psg-page', require('./components/Page'));

const app = new Vue({
    el: '#app',
    router
});