import Vue from 'vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/zh-TW';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
