import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import An from '@/components/An'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'An',
      component: An
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
