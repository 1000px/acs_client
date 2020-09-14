<template>
  <v-app-bar
    color="white"
    app
    >
    <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn icon @click="gotoInnerMsg">
      <v-icon>fa fa-envelope</v-icon>
    </v-btn>
    <v-btn icon @click="toggleTools">
      <v-icon>fa fa-user-circle</v-icon>
    </v-btn>
    <v-card class="tools-layout" v-show="isShown">
      <v-list-item
        v-for="ctrl in ctrls"
        :key="ctrl.id"
        link
        @click="toolNav(ctrl)">
        <v-list-item-content>{{ ctrl.text }}</v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item @click="logout">
        <v-list-item-content>退出</v-list-item-content>
      </v-list-item>
    </v-card>
  </v-app-bar>
</template>

<script>
import storage from '../plugins/storage'
export default {
  name: 'Header',

  data: () => ({
      isShown: false,
      ctrls: [
        {
          id: 1,
          text: '我的信息',
          url: '/mng/my-infor'
        },
        {
          id: 2,
          text: '修改密码',
          url: '/mng/modify-password'
        }
      ]
  }),
  methods: {
    toggleNav () {
      this.$store.commit('toggleNav')
    },
    gotoInnerMsg () {
      if (this.$router.currentRoute.path !== '/mng/inner-msg')
        this.$router.push({path: '/mng/inner-msg'})
    },
    toggleTools () {
      this.isShown = !this.isShown
    },
    toolNav (tool) {
      this.isShown = !this.isShown
      if (this.$router.currentRoute.path !== tool.url)
        this.$router.push({path: tool.url})  
    },
    logout () {
      storage.remove('bearerToken')
      storage.remove('currentUser')
      this.$router.push({name: 'Login'})
    }
  }
};
</script>

<style scope>
.tools-layout {
  position: absolute;
  right: 12px;
  top: 48px;
  overflow: hidden;
}
</style>
