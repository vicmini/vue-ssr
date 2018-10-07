import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Test from '../components/test/Test.vue';
import Topics from '../components/Topics';
Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }, {
        path: '/test',
        name: 'Test',
        component: Test
      },
      {
        path:'/about',
        component:()=>import('../components/About')
      },
      {
        path: '/topics',
        name: 'Topics',
        component: Topics
      }
    ]
  })
}