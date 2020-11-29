import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// 懒加载？
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Content from './components/Content.vue'
import Search from './components/Search.vue'
import Notifications from './components/Notifications.vue'
import Messages from './components/Messages.vue'
import User from './views/User.vue'
import TweetsRender from './components/TweetsRender.vue'

Vue.use(Router)


const router = new Router({
    routes: [
        {
            path: '/',
            redirect: '/home',
            component: Home,
            children: [
                {
                    path: '/home',
                    component: Content,
                },
                {
                    path: '/search',
                    component: Search
                },
                {
                    path: '/notifications',
                    component: Notifications
                },
                {
                    path: '/messages',
                    component: Messages
                },
            ]
        },
        { path: '/login', component: Login },
        { path: '/register', component: Register },
        {
            path: '/:username',
            component: User,
            children: [
                {
                    path: '/:username',
                    component: TweetsRender
                },
                {
                    path: '/:username/with_replies',
                    component: TweetsRender

                },
                {
                    path: '/:username/media',
                    component: TweetsRender

                },
                {
                    path: '/:username/likes',
                    component: TweetsRender

                },
            ]

        },
    ]
})


router.beforeEach((to, from, next) => {
    // 防止循环访问导致栈溢出,先判断要离开的路由是什么再跳转
    // 内部没有参数的next()是唯一出口
    const token = sessionStorage.getItem('vue-app-token')
    if (to.path === '/login' || to.path === '/register') {
        if (token) { return next('/') }
        return next()
    }
    if (!token) { return next('/login') }
    return next()
})


export default router
