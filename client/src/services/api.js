import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = "http://localhost:5000/api"; // Replace with your backend API URL

const api = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type" : "application/json" },
    timeout: 9000, // Set a timeout of 9 seconds
})

// Auth api calls
export const authAPI = {
    register: (data) => api.post('/auth/register', data),

}

export default api;