<template>
  <v-app>
    <v-snackbar v-model="globalAlert.shown" :vertical="vertical">
      {{globalAlert.text}}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="indigo"
          text
          v-bind="attrs"
          @click="hideAlert"
          >Close</v-btn>
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
