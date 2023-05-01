import axios from 'axios';

// const devBaseUrl = 'http://localhost:3001/api/v1';
const proBaseUrl = 'https://chillabit.herokuapp.com/api/v1/';

const instance = axios.create({
	baseURL: proBaseUrl,
});

export default instance;
