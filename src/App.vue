<template>
  <v-app>
    <v-snackbar 
      v-model="globalAlert.shown"
      timeout="3000"
      color="error"
      top
    >
      {{globalAlert.text}}
      <template v-slot:action="{ attrs }">
        <v-btn
          text
          v-bind="attrs"
          @click="hideAlert"
          >关闭</v-btn>
      </template>
    </v-snackbar>
    <router-view />
  </v-app>
</template>

<script>
// import VHeader from './components/Header'
export default {
  name: 'App',

  components: {
    // VHeader
  },

  data: () => ({
    vertical: true
  }),
  created () {
    this.$router.beforeEach((to, from, next) => {
      // console.log(to)
      next()
    })
  },
  computed: {
    globalAlert: function () {
      return this.$store.state.globalAlert
    }
  },
  methods: {
    hideAlert () {
      this.$store.commit('toggleGlobalAlert', {
        shown: false,
        text: ''
      })
    }
  }
};
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
}
</style>
