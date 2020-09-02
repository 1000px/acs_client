import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Manager from '@/components/Manager'
import UserManager from '@/components/UserManager'
import WebManager from '@/components/WebManager'
import Complex from '@/components/Complex'

// 引入组件
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/mng',
            name: 'Mng',
            component: Manager,
            redirect: '/mng/user',
            children: [
                {
                    path: 'user',
                    name: 'User',
                    component: UserManager
                },
                {
                    path: 'web',
                    name: 'Web',
                    component: WebManager
                }
            ]
        },
        {
            path: '/complex',
            name: 'Complex',
            component: Complex
        }
    ]
})