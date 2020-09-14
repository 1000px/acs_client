import axios from 'axios'
import storage from '../plugins/storage'
import router from '../router'
import store from '../plugins/store'

const fileGetter = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 15000
})

fileGetter.interceptors.request.use(
  config => {
    let token = storage.get('bearerToken') || ''
    config.headers.Authorization = token
    return config
  }
)

fileGetter.interceptors.response.use(
  response => {
    let resCode = response.status

    switch (resCode) {
      case 200:
        return Promise.resolve(response)
      default:
        console.log('未约定的状态码')
    }
  },
  error => {
    if (error.response.status) {
      let errorCode = error.response.status

      switch (errorCode) {
        case 400:
          break
        case 401:
          storage.remove('bearerToken')
          storage.remove('currentUser')
          router.push({name: 'Login'})
          store.commit('toggleGlobalAlert', {
            shown: true,
            text: '状态已过期，请重新登录。'
          })
          break
        case 403:
          break
        case 404:
          break
        default:
          console.log('失败：未约定的状态码')
      }
      return Promise.reject(error.response)
    }
  }
)

export default fileGetter