import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/view/index'
import account from '@/view/account'
import invite from '@/view/invite'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        pageTitle:"立即抢购"
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: Hello,
      meta:{
        pageTitle:"hello",
        keepAlive:true
      }
    },
    {
      path: '/account',
      name: 'account',
      component: account,
      meta:{
        pageTitle:"我的账户"
      }
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite,
      meta:{
        pageTitle:"我的邀请"
      }
    }
  ]
})
