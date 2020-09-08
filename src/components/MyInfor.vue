<template>
	<v-container fluid>
		<div class="text-h5 mb-8">
			{{ title }}
		</div>
		<form>
			<v-avatar size="180" class="mb-9">
				<img :src="myInfor.avatar" alt="John">
				<v-btn style="position: absolute; left: 0; top: 0; width: 180px; height: 180px;" 
					outlined
					fab
					v-if="!disabledEdit">
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
				<v-btn color="primary" class="mr-4">确认</v-btn>
				<v-btn color="warning" @click="cancelEdit">取消</v-btn>
			</div>
		</form>
	</v-container>
</template>

<script>
	export default {
		name: 'MyInfor',
		data: () => ({
			title: '个人信息',
			disabledEdit: true,
			myInfor: {
				username: 'niubi',
				email: 'yueyunpeng@null.com',
				avatar: 'https://cdn.vuetifyjs.com/images/john.jpg',
				create_time: '2020-08-30 18:00'
			},
			myCopyInfor: {}
		}),
		methods: {
			editMyInfor: function () {
				this.disabledEdit = !this.disabledEdit
				this.myCopyInfor = JSON.parse(JSON.stringify(this.myInfor))
			},
			cancelEdit: function () {
				this.disabledEdit = !this.disabledEdit
				this.myInfor = JSON.parse(JSON.stringify(this.myCopyInfor))
			}
		}
	};
</script>

<style scope>
</style>
