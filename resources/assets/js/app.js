import './bootstrap';
import router from './routes';

Vue.component('psg-header', require('./components/Header'));
Vue.component('psg-page', require('./components/Page'));
Vue.component('psg-footer', require('./components/Footer'));

Vue.mixin({
    methods: {
        charge(formId) {
            let form = document.querySelector(formId);

            let token = document.head.querySelector('meta[name="csrf-token"]');
            let input = document.createElement('input');
            input.type = 'hidden';
            input.name = '_token';
            input.value = token.content;

            form.append(input);
        }
    }
});

const app = new Vue({
    el: '#app',
    router
});

