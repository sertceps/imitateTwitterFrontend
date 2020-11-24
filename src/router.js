import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register }
    ]
})