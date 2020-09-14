<template>
    <v-container fluid 
        class="primary login-container">
        <v-row align="center" justify="center" style="height: 100%;">
            <v-sheet
                width="960"
                height="540"
                elevation="12"
                color="white"
                style="position: relative;"
                >
                <v-img src="../assets/login-left.png"
                    width="480"
                    height="540"
                    style="float: left;"></v-img>
                <v-form class="login-form" v-model="valid">
                    <v-text-field label="用户名:"
                        v-model="username"
                        :value="username"
                        :rules="usernameRules"></v-text-field>
                    <v-text-field label="密码:"
                        type="password"
                        v-model="password"
                        :value="password"
                        :rules="passwordRules"></v-text-field>
                    <v-btn depressed color="primary" @click="login" :disabled="!valid">登录</v-btn>
                </v-form>
                <div class="text-right foot">
                    <v-btn text @click="$router.push({name: 'Index'})">首页</v-btn>
                    <span>|</span>
                    <v-btn text @click="$router.push({name: 'Register'})">注册</v-btn>
                </div>
            </v-sheet>
        </v-row>
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
                    storage.set('currentUser', res.user)
                    this.$store.commit('updateUser', res.user)
                    this.$router.push({name: 'Mng'})
                }
            }, err => {
                this.$store.commit('toggleGlobalAlert', {
                    shown: true,
                    text: err.data.failed_infor
                })
            })
        }
    }
};
</script>

<style scope>
.login-container {
    height: 100%;
}
.login-form {
    float: right;
    width: 480px;
    padding: 120px 12px 0 12px;
}
.login-container .v-sheet .v-text-field input {
    margin-top: 8px;
}
.foot {
    position: absolute;
    bottom: 12px;
    right: 10px;
}
</style>
