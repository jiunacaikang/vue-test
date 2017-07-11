import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/view/index'
import account from '@/view/account'
import invite from '@/view/invite'
Vue.use(Router)

const router = new Router({
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
        pageTitle:"我的账户",
        requireAuth:true
      }
    },
    {
      path: '/invite',
      name: 'invite',
      component: invite,
      meta:{
        pageTitle:"我的邀请",
        requireAuth:true
      }
    }
  ]
})

/*router.beforeEach((to, from, next) => {
    document.title = to.meta.pageTitle
    next()
})*/
//判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  document.title = to.meta.pageTitle
  if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
    if (localStorage.getItem('username') === "true") {// 判断是否登录
      next()
    } else {// 没登录则跳转到登录界面
      next({
        path: '/hello',
        query: {unlogin:"你没有登录"}
      })
    }
  } else {
    next()
  }
})
export default router
