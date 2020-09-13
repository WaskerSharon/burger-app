import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ae7dc.firebaseio.com/'
});

export default instance;