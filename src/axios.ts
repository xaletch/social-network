import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:5000/',
});

Axios.interceptors.request.use((config: any) => {
    config.headers.Authorization = window.localStorage.getItem('logged_in');
    return config;
});

export default Axios;