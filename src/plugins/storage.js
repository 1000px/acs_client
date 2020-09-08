import Vue from 'vue'

const storage = {
    // 设置
    set (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },
    // 获取
    get (key) {
        return JSON.parse(localStorage.getItem(key))
    },
    // 删除
    remove (key) {
        localStorage.removeItem(key)
    }
}

Vue.use(storage)

export default storage