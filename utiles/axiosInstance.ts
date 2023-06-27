import axios from 'axios';

var axiosInstance = axios.create();
axiosInstance.interceptors.request.use(
    function (config){
            // config.headers['x-apiKey'] = process.env.API_KEY;
        return config;

    },
    function (error){
        return Promise.reject(error);
    },

);
export default axiosInstance;