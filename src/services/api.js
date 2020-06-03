import axios from 'axios';

const api = axios.create({
    baseURL: 'http://142.93.122.114:5000/',
});

export default api;