import axios from '../config/axios';

export const signupApi = (input) => axios.post('/auth/signup', input);
export const signinApi = (input) => axios.post('/auth/signin', input);
export const changePasswordApi = (input) => axios.patch('/auth', input);
export const changeEmailApi = (input) => axios.patch('/auth/id', input);