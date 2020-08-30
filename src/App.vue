<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
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
    //
  }),
};
</script>

<style>
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
