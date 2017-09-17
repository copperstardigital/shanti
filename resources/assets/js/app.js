import './bootstrap';
import router from './routes';

Vue.component('psg-header', require('./components/Header'));
Vue.component('psg-footer', require('./components/Footer'));
Vue.component('psg-page', require('./components/Page'));

const app = new Vue({
    el: '#app',
    router
});