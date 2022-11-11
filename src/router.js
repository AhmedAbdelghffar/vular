import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import Login from './components/user/Login'
import dashboard from "./components/views/dashboard/dashboard";
import pagesList from "./components/views/pageBuilder/pagesList"
import pageForm from "./components/views/pageBuilder/pageForm/pageForm"
import moduleConfigurationList from "./components/views/modules/moduleConfigurationList";
import moduleConfigurationForm from "./components/views/modules/modulesConfiguration/moduleConfigurationForm/moduleConfigurationForm";
import moduleElementsList from "./components/views/modules/modulesElements/moduleElementsList";
import moduleElementsForm from "./components/views/modules/modulesElements/moduleElementsForm";
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
      name: 'Dashboard',
      component: dashboard,
      meta: { layout: 'default'},
    },
    {
      path: '/pages',
      name: 'Page List',
      component: pagesList,
      meta: { layout: 'default'},
    },
    {
      path: '/pages/page-form',
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
    {
      path: '/module-elements-list',
      name: 'module-elements-list',
      component: moduleElementsList,
      meta: { layout: 'default'}
    },
    {
      path: '/module-elements-form',
      name: 'module-elements-form',
      component: moduleElementsForm,
      meta: { layout: 'default'}
    },
  ]
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page

  next();
})

export default router
