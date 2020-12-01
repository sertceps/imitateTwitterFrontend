import Vue from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './store'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:3000'
Axios.interceptors.request.use(config => {
    config.headers["Authorization"] = ' Bearer ' + localStorage.getItem('vue-app-token');
    return config;
})
Vue.prototype.axios = Axios

import {
    NavBar, Tabbar, TabbarItem,
    Card, Form, Field, Button,
    Dialog, Image as VanImage,
    Lazyload, Icon, Popup, Cell, CellGroup
} from 'vant'

Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Card)

Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(VanImage)
Vue.use(Lazyload)
Vue.use(Icon)
Vue.use(Popup)
// Vue.use(Divider)
Vue.use(Cell)
Vue.use(CellGroup)

import 'vant/lib/nav-bar/style'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
import 'vant/lib/card/style'
import 'vant/lib/field/style'
import 'vant/lib/form/style'
import 'vant/lib/button/style'
import 'vant/lib/dialog/style'
import 'vant/lib/image/style'
import 'vant/lib/icon/style'
// import 'vant/lib/divider/style'
import 'vant/lib/popup/style'
import 'vant/lib/cell/style'
import 'vant/lib/cell-group/style'


new Vue({
    el: '#app',
    store: Store,
    router: Router,
    render: c => c(App)
})