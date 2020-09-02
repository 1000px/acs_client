<template>
  <v-app-bar
    color="white"
    app
    >
  <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>
  <v-spacer></v-spacer>
  <v-btn icon>
    <v-icon>mdi-magnify</v-icon>
  </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'Header',

    data: () => ({
        information: '顶部导航'
    }),
    methods: {
      toggleNav () {
        this.$store.commit('toggleNav')
      }
    }
  }
</script>