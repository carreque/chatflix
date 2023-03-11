import axios from 'axios';
import { getEnvVariables } from '../helpers';

const {VITE_API} = getEnvVariables();

//Create axios instance
const chatFlixApi = axios.create({
    baseURL: VITE_API
});

//Interceptors
chatFlixApi.interceptors.request.use(config => {
    
    //Get from localstorage jwt
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})

export default chatFlixApi;