import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './plugins/store'
import storage from './plugins/storage'

Vue.config.productionTip = false
Vue.prototype.VURL = window.URL
Vue.prototype.VBlob = window.Blob

new Vue({
  vuetify,
  router,
  store,
  storage,
  render: h => h(App)
}).$mount('#app')
