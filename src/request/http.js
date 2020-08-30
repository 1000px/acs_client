import axios from 'axios'
// import QS from 'qs'
import storage from '../plugins/storage'

const service = axios.create({
    baseURL: 'http://192.168.11.205:5000/api/v1',
    timeout: 15000
})

// 请求方法统一封装配置
service.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json'
        config.headers.Authorization = storage.get('bearerToken')
        // 可以在这里设置每次发送请求的token
        return config
    }
)

// 请求响应统一封装配置
service.interceptors.response.use(
    response => {
        if (response.status) {
            let resCode = response.status
            switch (resCode) {
                case 200:
                    return Promise.resolve(response.data)
                default:
                    console.log('未约定的状态码。')
            }
        }
    },
    error => {
        if (error.response.status) {
            let errorCode = error.response.status
            switch (errorCode) {
                case 401:
                    storage.remove('bearerToken')
                    break
                case 403:
                    break
                case 404:
                    break
                default:
                    console.log('失败：未约定的状态码。')
            }
            return Promise.reject(error.response)
        }
    }
)

export default service
