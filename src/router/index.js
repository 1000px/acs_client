import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Manager from '@/components/Manager'
import UserManager from '@/components/UserManager'

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
            redirect: 'user',
            children: [
                {
                    path: 'user',
                    name: 'User',
                    component: UserManager
                }
            ]
        }
    ]
})