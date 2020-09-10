<template>
  <v-container>
    <div class="text-h5">
      {{title}}
      <v-btn @click="getPayUrl">获取付款地址</v-btn>
    </div>
  </v-container>
</template>

<script>
import api from '../request/api'
export default {
  name: 'Payload',
  data: () => ({
    title: '付款界面'
  }),
  methods: {
    getPayUrl: function() {
      api.getPayUrl().then(data => {
        console.log(data)
        window.location.href = data.url
      }, err => {
        console.log(err)
      })
    }
  }
};
</script>

<style scope>
  
</style>
