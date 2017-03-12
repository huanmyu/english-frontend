import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Words from '@/components/Words';
import AddWord from '@/components/AddWord';
import Register from '@/components/Register';
import Login from '@/components/Login';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/words',
      name: 'Words',
      component: Words,
    },
    {
      path: '/addWord',
      name: 'AddWord',
      component: AddWord,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
