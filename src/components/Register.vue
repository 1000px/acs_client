<template>
	<v-container fluid class="primary reg-container">
		<v-row align="center" justify="center" style="height: 100%;">
			<v-sheet
				width="960"
				height="720"
				elevation="12"
				style="position: relative;"
			>
				<div class="text-h4 pt-12 text-center">{{title}}</div>
				<v-form v-model="valid" class="ma-8">
					<v-text-field label="用户名："
						v-model="username"
						:value="username"
						:rules="unameRules"
					></v-text-field>
					<v-text-field label="密码："
						v-model="password"
						type="password"
						:rules="passRules"
						autocomplete="new-password"
					></v-text-field>
					<v-text-field label="Email："
						v-model="email"
						:rules="emailRules"
					></v-text-field>
					<!-- 添加验证码逻辑 -->
					<div style="height: 72px;">
						<v-text-field label="验证码："
							v-model="imgCode"
							:rules="codeRules"
							:error-messages="codeErrMsg"
							class="input-img-code"
							@focus="updateCodeStatus"
							@blur="verifyImgCode"></v-text-field>
						<v-img :src="imgSrc"
							style="float: left;"
							width="120px"
							height="48px"
							contain
							@click="getCodeImg"></v-img>
						<v-icon size="small" 
							color="success"
							style="height: 32px; line-height: 32px; margin-top: 16px;"
							v-if="codeSuccess"
						>fa fa-check</v-icon>
					</div>

					<v-btn class="primary" @click="register" :disabled="!valid">注册</v-btn>
				</v-form>
				<div class="text-right foot">
					<v-btn text @click="$router.push({name: 'Index'})">首页</v-btn>
					<span>|</span>
					<v-btn text @click="$router.push({name: 'Login'})">登录</v-btn>
				</div>
			</v-sheet>
		</v-row>
	</v-container>
</template>

<script>
import api from '../request/api'
import storage from '../plugins/storage'
export default {
	name: 'Register',

	data: () => ({
		title: '注册',
		valid: false,
		username: '',
		imgCode: '',
		codeSuccess: false,
		codeErrMsg: '',
		codeRules: [
			value => !!value || '验证码不能为空!'
		],
		imgSrc: '',
		unameRules: [
			value => !!value || '用户名不能为空！',
			value => {
				if ((value || '').length < 5 || (value || '').length > 20) {
					return '用户名长度必须在5-20个之间！'
				}
				return true
			},
			value => {
				let pattern = /^[0-9a-zA-Z_]{1,}$/
				return pattern.test(value) || '用户名只能包含数字、字母和下划线！'
			}
		],
		password: '',
		passRules: [
			value => !!value || '密码不能为空！',
			value => {
				if ((value || '').length < 8 || (value || '').length > 20) {
					return '密码长度必须在8-20个之间！'
				}
				return true
			},
			value => {
				let pattern = /^[0-9a-zA-Z_]{1,}$/
				return pattern.test(value) || '密码只能包含数字、字母和下划线！'
			}
		],
		email: '',
		emailRules: [
			value => !!value || 'Email不能为空！',
			value => {
				let pattern = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
				return pattern.test(value) || '邮箱格式错误！'
			}
		]
	}),
	methods: {
		getCodeImg: function() {
			api.getCodeImg().then(res => {
				storage.set('img_code_token', res.headers['authorization'])
				this.imgSrc = URL.createObjectURL(res.data)
			}, err => {
				console.log(err)
			})
		},
		verifyImgCode: function() {
			if (!this.imgCode) return

			api.verifyImgCode({code: this.imgCode}).then(data => {
				if(data.res === 'success') {
					this.codeSuccess = true
				} else {
					this.codeErrMsg = data.failed_infor
					this.getCodeImg()
				}
			}, err => {
				console.log(err)
			})
		},
		updateCodeStatus: function() {
			this.codeSuccess = false
			this.codeErrMsg = ''
		},
		register: function() {
			if (this.codeSuccess) return
			api.register({
				username: this.username,
				email: this.email,
				password: this.password
			}).then(data => {
				console.log(data)
				if(data.res === 'success') {
					this.$router.push({name: 'Login'})
					this.$store.commit('toggleGlobalAlert', {
						shown: true,
						text: '请先验证邮箱，相关连接已经发到您注册时填写的电子邮箱了。'
					})
				}
			}, err => {
				console.log(err)
			})
		}
	},
	mounted () {
		this.getCodeImg()
	}
};
</script>

<style scope>
.reg-container {
	height: 100%;
}
.input-img-code {
	float: left;
	width: 120px;
}
.foot {
	position: absolute;
	bottom: 12px;
	right: 10px;
}
</style>
