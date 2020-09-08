<template>
	<v-container fluid>
		<div class="text-h5 mb-9">
			{{title}}
		</div>
		<v-card
			class="mx-auto mb-6"
			v-for="msg in innerMsgs"
			:key="msg.id"
		>
			<v-card-title>
				{{ msg.title }}
			</v-card-title>
			<v-card-text>
				{{ msg.text }}
			</v-card-text>
		</v-card>
	</v-container>
</template>

<script>
export default {
	name: 'InnerMsg',

	data: () => ({
		title: '站内信',
		innerMsgs: [
			{	
				id: 1,
				title: '系统提醒',
				text: '您的网站一周之后到期，请及时续费！否则将影响网站正常运行。'
			},
			{
				id: 2,
				title: '系统提醒',
				text: '网站有新发布功能，邀请您内测使用。'
			}
		]
	})
};

</script>

<style scope>
	
</style>
