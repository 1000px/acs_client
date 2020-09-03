<template>
    <v-container fluid>
        <v-data-table
            :headers="usersHeader"
            :items="users"
            :page="page"
            :options.sync = "options"
            :server-items-length="total"
            :loading="loading"
            :disable-sort="isSorted"
            :disable-pagination="hasPage"
        >
            <template v-slot:[`item.disabled`]="{ item }">
                <v-switch 
                    inset
                    v-model="item.disabled"
                    @click="toggleUser(item)"></v-switch>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
import api from '../request/api'

export default {
    name: 'UserManager',
    data: () => ({
        page: 1,
        per_page: 10,
        isSorted: true,
        hasPage: true,
        total: 0,
        loading: true,
        options: {},
        usersHeader: [
            {
                text: '用户名',
                align: 'start',
                sortable: false,
                value: 'username',
            },
            { text: '电子邮件', value: 'email' },
            { text: '注册时间', value: 'create_time' },
            { text: '最后登录', value: 'last_login' },
            { text: '是否禁用', value: 'disabled' }
        ],
        users: []
    }),
    mounted () {
        this.getUsers()
    },
    methods: {
        getUsers: function () {
            this.loading = true
            const { page, itemsPerPage } = this.options
            api.getUsers({page: page, per_page: itemsPerPage}).then(res => {
                console.log(res)
                this.loading = false
                this.users = res.users
                this.total = res.total
            }, err => {
                console.log('The error data.', err)
            })
        },
        toggleUser (user) {
            console.log('1000px', user)
            api.toggleDisabled(user.id).then(res => {
                // 
                console.log(res)
            }, err => {
                console.log(err)
                user.disabled = !user.disabled
            })
        }
    },
    watch: {
        options: {
            handler () {
                this.getUsers()
            },
            deep: true
        }
    }
}
</script>

<style>

</style>
