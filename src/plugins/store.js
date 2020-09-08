import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navShown: true,
        globalUser: {},
        globalAlert: {
            shown: false,
            text: ''
        },
        breads: [
            {
                id: 1,
                text: '控制中心',
                disabled: false,
                href: '/mng'
            },
            {
                id: 2,
                text: '用户管理',
                disabled: false,
                href: '/mng/user'
            }
        ]
    },
    mutations: {
        toggleNav (state) {
            state.navShown = !state.navShown
        },
        toggleGlobalAlert (state, payload) {
            state.globalAlert = payload
        },
        updateBreads (state, payload) {
            state.breads = payload
        },
        updateUser (state, payload) {
            state.globalUser = payload
        }
    }
})

export default store