import axios from '../config/axios';

export const getMeApi = () => axios.get('/users/me');
export const updateDetailApi = (input) => axios.patch('/users', input);
export const updateImageApi = (input) => axios.patch('/users/image', input);