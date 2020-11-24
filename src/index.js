import Vue from 'vue'
import App from './App.vue'
import Router from './router'

import {
    NavBar, Tabbar, TabbarItem,
    Cell, CellGroup, Form, Field, Button,
} from 'vant'
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
import 'vant/lib/nav-bar/style'
import 'vant/lib/tabbar/style'
import 'vant/lib/tabbar-item/style'
import 'vant/lib/cell/style'
import 'vant/lib/cell-group/style'
import 'vant/lib/field/style'
import 'vant/lib/form/style'
import 'vant/lib/button/style'



new Vue({
    el: '#app',
    router: Router,
    render: c => c(App)
})