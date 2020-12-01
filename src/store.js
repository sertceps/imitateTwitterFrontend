import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginInfo: {}
    },
    mutations: {
        initializeCertificate: function (state) {
            const loginInfo = localStorage.getItem('login-info')
            state.loginInfo = JSON.parse(loginInfo)
        },
        saveCertificate: function (state, loginInfo) {
            state.loginInfo = loginInfo
            localStorage.setItem('login-info', JSON.stringify(state.loginInfo))
        }
    }
})