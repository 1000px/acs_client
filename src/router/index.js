import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Manager from '@/components/Manager'
import UserManager from '@/components/UserManager'
import WebManager from '@/components/WebManager'
import Complex from '@/components/Complex'
import NewWeb from '@/components/NewWeb'
import MyInfor from '@/components/MyInfor'
import ModifyPassword from '@/components/ModifyPassword'
import InnerMsg from '@/components/InnerMsg'
import Register from '@/components/Register'
import WebBuilding from '@/components/WebBuilding'
import Payload from '@/components/Payload'

// 引入组件
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            title: '主页',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            title: '登录',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            title: '注册',
            component: Register
        },
        {
            path: '/mng',
            name: 'Mng',
            title: '控制中心',
            component: Manager,
            redirect: '/mng/user',
            children: [
                {
                    path: 'user',
                    name: 'User',
                    title: '用户管理',
                    component: UserManager
                },
                {
                    path: 'web',
                    name: 'Web',
                    title: '网站管理',
                    component: WebManager
                },
                {
                    path: 'new_web',
                    name: 'NewWeb',
                    title: '新建网站',
                    component: NewWeb
                },
                {
                    path: 'my-infor',
                    name: 'MyInfor',
                    title: '个人信息',
                    component: MyInfor
                },
                {
                    path: 'modify-password',
                    name: 'ModifyPassword',
                    title: '修改密码',
                    component: ModifyPassword
                },
                {
                    path: 'inner-msg',
                    name: 'InnerMsg',
                    title: '站内信',
                    component: InnerMsg
                },
                {
                    path: 'payload',
                    name: 'Payload',
                    title: '付款页面',
                    component: Payload
                },
                {
                    path: 'web-building',
                    name: 'WebBuilding',
                    title: '生成网站',
                    component: WebBuilding
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