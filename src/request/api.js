import service from './http'
// 登录、注册
const login = (params) => {
    return service.post('/login', JSON.stringify(params))
}

// 用户管理
const getUsers = (params) => {
    return service.get('/users/', { params: params })
}

// 网站管理

export default {
    // 登录注册
    login,

    // 用户管理
    getUsers
}