<template>
	<v-container fluid>
		<div class="text-h5">{{title}}</div>
		<v-form v-model="valid">
			<v-text-field
				type="password"
				label="当前密码："
				v-model="oldPassword"
				:rules="oldPassRules"
				required></v-text-field>
			<v-text-field
				type="password"
				label="新密码："
				v-model="newPassword"
				:value="newPassword"
				:rules="newPassRules"
				required></v-text-field>
			<v-text-field
				type="password"
				label="确认密码："
				v-model="newPassword2"
				:value="newPassword2"
				:rules="newPassRules2"
				required></v-text-field>
			<v-btn color="primary" @click="modifyPassword" :disabled="!valid">提交</v-btn>
		</v-form>
	</v-container>
</template>

<script>
	import api from '../request/api'
	import storage from '../plugins/storage'

	export default {
		name: 'ModifyPassword',

		data: () => ({
			title: '修改密码',
			valid: false,
			oldPassword: '',
			oldPassRules: [
				value => !!value || '原密码不能为空',
				value => {
					if ((value || '').length < 6 || (value || '').length > 20) {
						return '密码为6-20位数字、字母和下划线！'
					}
					return true
				}
			],
			newPassword: '',
			newPassRules: [
				value => !!value || '原密码不能为空',
				value => {
					if ((value || '').length < 6 || (value || '').length > 20) {
						return '密码为6-20位数字、字母和下划线！'
					}
					return true
				}
			],
			newPassword2: '',
			newPassRules2: [
				value => !!value || '原密码不能为空',
				value => {
					if ((value || '').length < 6 || (value || '').length > 20) {
						return '密码为6-20位数字、字母和下划线！'
					}
					return true
				}
			]
		}),
		methods: {
			modifyPassword () {
				if (this.newPassword !== this.newPassword2) {
					this.$store.commit('toggleGlobalAlert', {
						shown: true,
						text: '新密码两次输入不一致！'
					})
					return
				}
				api.modifyPassword({oldPassword: this.oldPassword, newPassword: this.newPassword}).then(res => {
					console.log(res)
					this.$store.commit('toggleGlobalAlert', {
						shown: true,
						text: '密码修改成功，请重新登录。'
					})
					storage.remove('bearerToken')
					this.$router.push({name: 'Login'})
				}, err => {
					console.log(err)
				})
			}
		}
	};
</script>
