import service from './http'
// 登录、注册
const login = (params) => {
    return service.post('/login', JSON.stringify(params))
}

// 用户管理
const getUsers = (params) => {
    return service.get('/users/', { params: params })
}
const toggleDisabled = (id) => {
    return service.put('/users/' + id + '/toggle_disabled')
}

// 网站管理
const getSites = (params) => {
    return service.get('/sites/', { params: params })
}

export default {
    // 登录注册
    login,

    // 用户管理
    getUsers,
    toggleDisabled,

    // 网站管理
    getSites
}