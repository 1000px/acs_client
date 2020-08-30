<template>
    <v-container fluid 
        class="primary login-container">
        <v-sheet
            width="960"
            height="540"
            elevation="10"
            color="white"
            >
            <v-form class="login-form" v-model="valid">
                <v-text-field label="用户名:" 
                    v-model="username"
                    :rules="usernameRules"></v-text-field>
                <v-text-field label="密码:" 
                    type="password" 
                    v-model="password"
                    :rules="passwordRules"></v-text-field>
                <v-btn depressed color="primary" @click="login" :disabled="!valid">登录</v-btn>
            </v-form>
        </v-sheet>
    </v-container>
</template>

<script>
import api from '../request/api'
import storage from '../plugins/storage'
export default {
    name: "Login",

    data: () => ({
        username: '',
        password: '',
        error_infor: '',
        valid: false,
        usernameRules: [
            value => !!value || '用户名不能为空！',
            value => (value || '').length <= 20 || "用户名不能超过20个字符！"
        ],
        passwordRules: [
            value => !!value || '密码不能为空!',
            value => (value || '').length <= 20 || '密码长度不能超过20个字符！'
        ]
    }),
    methods: {
        login () {
            api.login({username: this.username, password: this.password}).then(res => {
                if (res.token) {
                    storage.remove('bearerToken')
                    storage.set('bearerToken', 'Bearer ' + res.token)
                    this.$router.push({name: 'Mng'})
                }
            }, err => {
                console.log(err)
            })
        },
        getUsers () {
            api.getUsers({page: 4}).then(res => {
                console.log(res)
            }, err => {
                console.log(err)
            })
        }
    }
};
</script>

<style>
.login-container {
    height: 100%;
    /* background-color: #438fff; */
}
.login-container .v-sheet {
    margin: 108px auto;
}
.login-form {
    float: right;
    width: 46%;
    padding: 120px 16px;
}
</style>
