import axios, { AxiosRequestConfig } from "axios"

const httpClient = axios.create({
    baseURL: "http://localhost:4444",
});

httpClient.interceptors.request.use( async (config: AxiosRequestConfig) => {
    if (config.headers === undefined) {
        config.headers = {};
    }
    const token = localStorage.getItem('token')
    config.headers.Authorization = token ? token : ''
    return config
})

export default httpClient


