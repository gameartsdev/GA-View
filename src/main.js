import Vue from 'vue';
import App from './App.vue';
import router from './router';
import eleInit from './plugins/element';
import throttle from './plugins/throttle';
import touch from './plugins/touch';

Vue.config.productionTip = false;

eleInit();
throttle();
touch();

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
