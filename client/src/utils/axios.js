import axios from 'axios';

const baseURL = 'http://localhost:3001/api/v1';
// const baseURL = 'https://chillabit.herokuapp.com/api/v1/';

const instance = axios.create({
	baseURL: baseURL,
});

export default instance;
