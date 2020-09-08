import axios from 'axios'
import storage from '../plugins/storage'
const fileService = axios.create({
    baseURL: 'http://localhost:5000/file/v1',
    timeout: 15000
})

fileService.interceptors.request.use(
    config => {
        config.responseType = 'blob'
        config.headers['authorization'] = storage.get('img_code_token') || ''
        return config
    }
)

export default fileService