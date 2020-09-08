<template>
  <v-container fluid style="background-color: #F8F9FA;padding-top: 0;">
    <!-- 顶部工具栏 -->
    <v-row class="index-top" align="center" justify="space-between">
      <v-col cols="3" class="white--text">
        <v-icon class="white--text ma-2 mt-1">fa fa-envelope</v-icon>
        <span>Email: abc@suoyatu.com</span>
      </v-col>
      <v-col cols="3" class="text-right">
        <v-btn text class="white--text" @click="$router.push({name: 'Login'})">登录</v-btn>
        <v-btn text class="white--text" @click="$router.push({name: 'Register'})">注册</v-btn>
      </v-col>
    </v-row>
    <!-- 导航栏 -->
    <v-row class="index-nav" justify="space-between" align="center">
      <v-col cols="5">
        <v-img src="../assets/index-logo.png" 
          contain
          width="72"
          height="72" style="float: left;"></v-img>
        <span class="text-h5 pl-2" style="height: 72px; line-height: 72px;">浙江索亚图网络技术有限公司</span>
      </v-col>
      <v-col cols="5" class="text-right">
        <v-btn v-for="item in navs"
          :key="item.text"
          text
          class="text-h6 dark--text">{{item.text}}</v-btn>
      </v-col> 
    </v-row>
    <!-- 轮播图 -->
    <v-row>
      <v-carousel
        height="600"
        cycle
        hide-delimiter-background
        :show-arrows=false
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="slide.bg"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div class="display-3">{{slide.text}} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-row>

    <!-- 关于 -->
    <v-row></v-row>

    <!-- 服务 -->
    <v-row></v-row>

    <!-- 联系 -->
    <v-row></v-row>

    <!-- 页面底部 -->
    <v-row></v-row>

  </v-container>
</template>

<script>
export default {
  name: 'Index',
  data: () => ({
    prevIcon: 'fa chevron-left',
    nextIcon: 'fa chevron-right',
    navs: [
      {
        text: '首页',
        url: '/1'
      },
      {
        text: '关于',
        url: '/2'
      },
      {
        text: '服务',
        url: '/3'
      },
      {
        text: '联系',
        url: '/4'
      }
    ],
    slides: [
      {
        text: 'First',
        bg: 'indigo'
      },
      {
        text: 'Second',
        bg: 'warning'
      },
      {
        text: 'Third',
        bg: 'pink darken-2'
      },
      {
        text: 'Fourth',
        bg: 'red lighten-1'
      },
      {
        text: 'Fifth',
        bg: 'deep-purple accent-4'
      }
    ]
  })
};
</script>

<style scope>
.index-top {
  background-color: #082136;
  height: 60px;
}
.index-nav {
  margin: 0 auto;
  height: 108px;
  max-width: 1280px;
  min-width: 1180px;
}
</style>
