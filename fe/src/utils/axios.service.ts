import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.beyond-recruitment.net/api',
});

export default axiosInstance;
