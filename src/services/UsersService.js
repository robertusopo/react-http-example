import axios from 'axios';

const API_URL = 'https://5c7d6bdadd19010014c8e9dd.mockapi.io'

const http = axios.create({
    baseURL: API_URL
})

export const listUsers = () => {
    return http.get('/userss');
}
