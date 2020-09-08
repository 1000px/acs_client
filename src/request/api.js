import service from './http'
import fileService from './fileApi'
// import storage from '../plugins/storage'
// 登录、注册
const login = (params) => {
    return service.post('/login', JSON.stringify(params))
}
const register = (params) => {
    return service.post('/register', JSON.stringify(params))
}
const modifyPassword = (params) => {
    return service.post('/modify-password', JSON.stringify(params))
}
const getCodeImg = () => {
    return fileService.get('/img_code')
}
const verifyImgCode = (params) => {
    return service.post('/verify_img_code', JSON.stringify(params))
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
    register,
    modifyPassword,
    getCodeImg,
    verifyImgCode,

    // 用户管理
    getUsers,
    toggleDisabled,

    // 网站管理
    getSites
}