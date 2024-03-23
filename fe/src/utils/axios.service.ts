import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://hr-app-yb8m.onrender.com',
});

export default axiosInstance;
