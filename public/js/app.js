'use strict';

require('./bootstrap');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.component('psg-header', require('./components/Header'));
Vue.component('psg-page', require('./components/Page'));
Vue.component('psg-footer', require('./components/Footer'));

Vue.mixin({
    methods: {
        charge: function charge(formId) {
            var form = document.querySelector(formId);

            var token = document.head.querySelector('meta[name="csrf-token"]');
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = '_token';
            input.value = token.content;

            form.append(input);
        }
    }
});

var app = new Vue({
    el: '#app',
    router: _routes2.default
});