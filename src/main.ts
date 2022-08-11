import Vue from 'vue';
import Vuesax from 'vuesax';
import { VueMasonryPlugin } from 'vue-masonry';
import VueJustifiedLayout from 'vue-justified-layout';
import '@/Icons';
import App from './App.vue';
import router from './router';
import store from './store';

import 'vuesax/dist/vuesax.css';
import './registerServiceWorker';
// Vuesax styles
Vue.use(Vuesax, {
    // options here
});

Vue.use(VueMasonryPlugin);

Vue.use(VueJustifiedLayout);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
