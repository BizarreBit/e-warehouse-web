import axios from '../config/axios';

export const getMeApi = () => axios.get('/users/me');
export const signupApi = (input) => axios.post('/auth/signup', input);
export const signinApi = (input) => axios.post('/auth/signin', input);
