import './bootstrap';
import router from './routes';

Vue.component('footer-area', require('./components/Footer'));

const app = new Vue({
    el: '#app',
    router
});