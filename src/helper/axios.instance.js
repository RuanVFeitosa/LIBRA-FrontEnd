import axios from "axios";

const axiosInstance = axios.create({
    baseURL : "http://10.92.198.5:8080/"
})

export default axiosInstance