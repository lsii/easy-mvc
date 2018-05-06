import Vue from 'vue'
import Router from 'vue-router'
import HelloPage from './pages/HelloPage.vue'

Vue.use(Router)

const routes = [

  {
    path: '/',
    component: HelloPage
  }

]

export default new Router({
  routes: routes
})
