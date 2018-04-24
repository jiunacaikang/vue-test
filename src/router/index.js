import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/view/index'
import account from '@/view/account'
import invite from '@/view/invite'
import register from '@/view/register'
import login from '@/view/login'
Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: index,
            meta: {
                pageTitle: "立即抢购"
            }
        },{
            path: '/hello',
            name: 'hello',
            component: Hello,
            meta: {
                pageTitle: "hello",
                keepAlive: true
            }
        },{
            path: '/account',
            name: 'account',
            component: account,
            meta: {
                pageTitle: "我的账户",
                requireAuth: true
            }
        },{
            path: '/account/:id',
            name: 'account',
            component: account,
            meta: {
                pageTitle: "我的账户",
                requireAuth: true
            }
        },{
            path: '/invite',
            name: 'invite',
            component: invite,
            meta: {
                pageTitle: "我的邀请",
                requireAuth: true
            }
        },{
            path: '/register',
            name: 'register',
            component: register,
            meta: {
                pageTitle: "注册",
                keepAlive: true
            }
        },{
            path: '/login',
            name: 'login',
            component: login,
            meta: {
                pageTitle: "登录",
                keepAlive: true
            }
        },{
            path: '*',
            redirect: '/',
            component: index,
            meta: {
                pageTitle: "立即抢购"
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
    console.log(sessionStorage.getItem('islogin'))
    if (to.matched.some(res => res.meta.requireAuth)) { // 判断是否需要登录权限
        if (sessionStorage.getItem('islogin') !== "true") { // 判断是否登录
            next()
        } else { // 没登录则跳转到登录界面
            next({
                path: '/login',
                query: { unlogin: "你没有登录" }
            })
        }
    } else {
        next()
    }
})
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0);
});
export default router