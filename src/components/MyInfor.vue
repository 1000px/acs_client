<template>
	<v-container fluid>
		<div class="text-h5 mb-8">
			{{ title }}
		</div>
		<form>
			<v-avatar size="180" class="mb-9">
				<img :src="preAvatarUrl + myInfor.avatar_name" :alt="myInfor.username">
				<input type="file" 
					name="avatarInput" 
					@change="fileChange"
					ref="avatarInput"
					accept=".jpg,.jpeg,.png,.gif" 
					style="display: none;">
				<v-btn style="position: absolute; left: 0; top: 0; width: 180px; height: 180px;" 
					outlined
					fab
					@click="selectFile">
					<v-icon color="primary">fa fa-edit</v-icon>
				</v-btn>
			</v-avatar>
			<v-text-field label="用户名：" v-model="myInfor.username" :disabled="disabledEdit"></v-text-field>
			<v-text-field label="Email：" v-model="myInfor.email" disabled></v-text-field>
			<v-text-field label="注册时间：" v-model="myInfor.create_time" disabled></v-text-field>

			<v-btn
				color="primary"
				v-if="disabledEdit"
				@click="editMyInfor"
			>修改</v-btn>
			<div v-if="!disabledEdit">
				<v-btn color="primary" @click="updateMyInfor" class="mr-4">确认</v-btn>
				<v-btn color="warning" @click="cancelEdit">取消</v-btn>
			</div>
		</form>
		<v-dialog
			v-model="avatarDialog"
			max-width="540">
				<v-card>
					<v-card-title class="headline">更换头像？</v-card-title>

					<v-row justify="center" no-gutters class="mt-8">
						<v-avatar size="180" class="mr-4" :class="curAvatarVal==0?'selected':'' ">
							<v-img :src="preAvatarUrl + myInfor.avatar_name" />
						</v-avatar>
						<v-avatar size="180" :class="curAvatarVal==1?'selected':''">
							<v-img :src="newAvatar" />
						</v-avatar>
					</v-row>

					<v-row justify="center" no-gutters>
						<v-radio-group v-model="curAvatarVal" row>
							<v-radio label="原头像" value="0"></v-radio>
							<v-radio label="新头像" value="1"></v-radio>
						</v-radio-group>
					</v-row>
					<v-card-actions>
						<v-btn class="mr-2 ml-5" color="primary" @click="submitAvatarChg">确定</v-btn>
						<v-btn color="warning" @click="cancelAvatarChg">取消</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
	</v-container>
</template>

<script>
	import api from '../request/api'
	import storage from '../plugins/storage'
	import store from '../plugins/store';
	// import axios from 'axios'
	export default {
		name: 'MyInfor',
		data: () => ({
			title: '个人信息',
			disabledEdit: true,
			myInfor: {},
			preAvatarUrl: 'http://127.0.0.1:5000/api/v1/get_avatar/',
			myCopyInfor: {},
			avatarDialog: false,
			newAvatar: '',
			curAvatarVal: '1'
		}),
		mounted () {
			this.myInfor = storage.get('currentUser')
		},
		methods: {
			editMyInfor: function () {
				this.disabledEdit = !this.disabledEdit
			},
			cancelEdit: function () {
				this.disabledEdit = !this.disabledEdit
				this.myInfor = storage.get('currentUser')
			},
			updateMyInfor: function () {
				api.updateUser(this.myInfor).then(data => {
					if(data.res === 'success') {
						storage.set('currentUser', data.user)
						this.myInfor = data.user
					} else {
						store.commit('toggleGlobalAlert', {
							shown: true,
							text: data.failed_infor
						})
					}
				}, err => {
					console.error('update user', err)
				})
			},
			selectFile: function () {
				this.$refs.avatarInput.dispatchEvent(new MouseEvent('click'))
			},
			fileChange: function () {
				this.avatarDialog = true
				this.newAvatar = URL.createObjectURL(this.$refs.avatarInput.files[0])			
			},
			submitAvatarChg: function () {
				// 更换头像
				// 如果用户选择的是新图像，则提交图像数据至服务器
				if (this.curAvatarVal === '0') {
					this.avatarDialog = false
					return
				}
				let data = new FormData()
				data.append('file', this.$refs.avatarInput.files[0])
				api.uploadImg(data).then(data => {
					storage.set('currentUser', data.user)
					this.myInfor = data.user
				}, err => {
					console.log(err)
				})
				this.avatarDialog = false
			},
			cancelAvatarChg: function () {
				// 取消更新头像操作
				this.newAvatar = ''
				this.$refs.avatarInput.value = ''
				this.avatarDialog = false
			}
		}
	};
</script>

<style scope>
.selected {
	border: 2px solid green;
}
</style>
