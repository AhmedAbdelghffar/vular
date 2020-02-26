import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './views/Login'
import Home from './views/Home.vue'
import About from './views/About.vue'
import pagesList from "./components/pages/pagesList"
import pageForm from "./components/pages/pageForm/pageForm"
import moduleConfigurationList from "./components/modules/modulesConfiguration/moduleConfigurationList";
import moduleConfigurationForm from "./components/modules/modulesConfiguration/moduleConfigurationForm/moduleConfigurationForm";
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { layout: 'no-sidebar'}
    },
    {
      path: '/',
      name: 'Page List',
      component: pagesList,
      meta: { layout: 'default'}
    },
    {
      path: '/page-form',
      name: 'Page Form',
      component: pageForm,
      meta: { layout: 'default'}
    },
    {
      path: '/module-configuration-list',
      name: 'Module Configuration List',
      component: moduleConfigurationList,
      meta: { layout: 'default'}
    },
    {
      path: '/module-configuration-form',
      name: 'Module Configuration Form',
      component: moduleConfigurationForm,
      meta: { layout: 'default'}
    },
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  if (!store.state.user.userToken && to.path !== '/login') {
    return next('/login');
  }
  if (store.state.user.userToken && to.path === '/login') {
    return next('/');
  }

  next();
})

export default router