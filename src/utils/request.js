import axios from "axios";

const instance = axios.create({
    baseURL: '/api'
})

instance.interceptors.request.use(
    (config) => {
        return config;
    }
)

instance.interceptors.response.use(
    (response) => {
        // if (response.data.code === 200) {
        //     // 返回成功的响应数据
        //     return response
        // }
        return response.data
        //return Promise.reject();
    },
    (error) => {
        const message = error.message || "网络错误"
        // 提示错误
        return Promise.reject(message)
    }
)
export default instance;