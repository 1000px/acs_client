import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        navShown: true,
        globalAlert: {
            shown: false,
            text: ''
        }
    },
    mutations: {
        toggleNav (state) {
            state.navShown = !state.navShown
        },
        toggleGlobalAlert (state, payload) {
            state.globalAlert.shown = payload.shown
            state.globalAlert.text = payload.text
        }
    }
})

export default store