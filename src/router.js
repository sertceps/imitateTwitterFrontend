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
import TweetsRender from './components/Content.vue'
import Compose from './views/Compose.vue'
import TweetBoard from './components/TweetBoard.vue'
import MessageBoard from './components/MessageBoard.vue'
import Status from './views/Status.vue'
import UserList from './views/UserList.vue'
Vue.use(Router)


const router = new Router({
    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register },
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
        {
            path: '/:userid',
            component: User,
            children: [
                {
                    path: '/:userid',
                    component: TweetsRender
                    // 这个组件拿到 username进行查询
                },
                {
                    path: '/:userid/with_replies',
                    component: TweetsRender

                },
                {
                    path: '/:userid/media',
                    component: TweetsRender

                },
                {
                    path: '/:userid/likes',
                    component: TweetsRender

                },
            ]

        },
        {
            path: '/:userid/following',
            component: UserList
        },
        {
            path: '/:userid/followers',
            component: UserList
        },
        {
            path: '/compose/:item',
            component: Compose,
            children: [
                {
                    path: '/compose/tweet',
                    component: TweetBoard
                },
                {
                    path: '/compose/messages',
                    component: MessageBoard
                }
            ]
        },
        {
            path: '/status/:id',
            component: Status

        }
    ]
})


router.beforeEach((to, from, next) => {
    // 防止循环访问导致栈溢出,先判断要离开的路由是什么再跳转
    // 内部没有参数的next()是唯一出口
    const token = localStorage.getItem('vue-app-token')
    if (to.path === '/login' || to.path === '/register') {
        if (token) { return next('/') }
        return next()
    }
    if (!token) { return next('/login') }
    return next()
})


export default router
