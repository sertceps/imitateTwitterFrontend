import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'
Axios.interceptors.request.use(config => {
    config.headers["Authorization"] = ' Bearer ' + sessionStorage.getItem('vue-app-token');
    return config;
})
Vue.prototype.axios = Axios

import {
    NavBar, Tabbar, TabbarItem,
    Card, Form, Field, Button,
    Dialog, Image as VanImage,
    Lazyload, Icon, 
} from 'vant'

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Card)
// Vue.use(Cell)
// Vue.use(CellGroup)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(VanImage)
Vue.use(Lazyload)
Vue.use(Icon)
// Vue.use(Divider)

import 'vant/lib/nav-bar/style'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
// import 'vant/lib/cell/style'
// import 'vant/lib/cell-group/style'
import 'vant/lib/card/style'
import 'vant/lib/field/style'
import 'vant/lib/form/style'
import 'vant/lib/button/style'
import 'vant/lib/dialog/style'
import 'vant/lib/image/style'
import 'vant/lib/icon/style'
// import 'vant/lib/divider/style'



new Vue({
    el: '#app',
    router: Router,
    render: c => c(App)
})