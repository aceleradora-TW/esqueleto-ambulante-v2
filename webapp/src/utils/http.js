import axios from 'axios';
const client = axios.create({
    baseURL: 'https://reqres.in/api/',
    timeout: 5000});
export default client;
