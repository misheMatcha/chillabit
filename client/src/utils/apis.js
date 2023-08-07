import axios from './axios';

export const verifyHandle = (handles) => axios.post('/verify_handle', handles);

export const registerUser = (user) => axios.post('/users', user);

export const loginUser = (user) => axios.post('/login', user);
