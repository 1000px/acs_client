<template>
  <v-app-bar
    color="deep-purple accent-4"
    dense
    dark
    >
  <v-app-bar-nav-icon></v-app-bar-nav-icon>
  <v-toolbar-title>自助建站</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
  </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
        information: '顶部导航'
    })
  }
</script>