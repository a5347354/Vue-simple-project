import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Shopping from './components/Shopping.vue';

Vue.use(Router);


export default new Router({
    mode: 'history',
    routes: [
      {
        // Index
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
      },
      {
        // Shopping
        path: '/shopping',
        name: 'Shopping',
        component: Shopping,
      },
    ],
  });
