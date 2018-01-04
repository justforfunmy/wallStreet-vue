import Vue from 'vue'
import Router from 'vue-router'
import News from '../views/news.vue'
import Fast from '../views/fast.vue'
import Selected from '../views/selected.vue'
import Trend from '../views/trend.vue'
import Me from '../views/me.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/fast',
      name: 'fast',
      component: Fast
    },
    {
      path: '/selected',
      name: 'selected',
      component: Selected
    },
    {
      path: '/trend',
      name: 'trend',
      component: Trend
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path:'/',
      redirect:'/news'
    }
  ]
})
